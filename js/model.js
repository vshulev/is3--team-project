
function Model(head, data) {

	this.headers = head;
	this.data = data;
	this.selected = new Array(); // subset of selected countries
	
	// populate array of selected items
	for(i = 0; i < data.length; i++)
		this.selected.push(this.data[i]);
	
	this.getCounryInfoByIso = function(iso) {
		var result = lookup(iso, this.data);
		if(result == -1) return null;
		return this.data[result];
	};

	this.getCountryInfoByName = function(cname) {
		var result = lookupCname(cname, this.data);
		if(result == -1) return null;
		return this.data[result];
	}
	
	this.addToSelected = function(iso) {
		var res = lookup(iso, this.data);
		console.log(res);
		if(res != -1)
			this.selected.push(this.data[res]);
	};
	
	this.removeFromSelected = function(iso) {
		var res = lookup(iso, this.selected);
		if(res != -1)
			this.selected.splice(res, 1);
	};
	
	/*
	 * Returns an array of data compatible with the map chart
	 */
	this.getMapData = function(prop1, prop2) {
		var out = new Array();
		for(i = 0; i < this.selected.length; i++) {
			if(this.selected[i][prop1] == null || this.selected[i][prop2] == null || this.selected[i][prop2] == 0) continue;
			out.push([ this.selected[i]["ISO"], this.selected[i][prop1] / this.selected[i][prop2] ]);
		}
		return out;
	};
	
//EXTENSION -can be implemented in the upper function by checking for null
	this.getMapDataCompView = function(prop1) {
		var out2 = new Array();
		for(i = 0; i < this.selected.length; i++) {
			if(this.selected[i][prop1] == null) continue;
			out2.push([ this.selected[i]["ISO"], this.selected[i][prop1]]/1);
		}
console.log("1");
		return out2;
	};
//END OF EXTENSION
	/*
	 * Returns an array of data compatible with the scatterplot chart.
	 */
	this.getScatterplotData = function(prop1, prop2) {
		var out = new Array();
		for(i = 0; i < this.selected.length; i++) {
			if(this.selected[i][prop1] == null || this.selected[i][prop2] == null) continue;
			out.push([ this.selected[i][prop1], this.selected[i][prop2], this.selected[i]["Country"] ]);
		}
		return out;
	};
	
	/*
	 * Returns an array of data compatible with the bar chart.
	 */
	this.getComparisonData = function(prop1, prop2, maxCountries) {
		maxCountries = (maxCountries < this.selected.length) ? maxCountries : this.selected.length;	
		
		var out = new Array();
		var row = new Array();
		row.push("x");
		for(i = 0; i < maxCountries; i++) {
			row.push(this.selected[i]["Country"]);
		}
		out.push(row);
		row = new Array();
		row.push(prop1 + " / " + prop2);
		for(i = 0; i < maxCountries; i++) {
			if(this.selected[i][prop1] == null || this.selected[i][prop2] == null || this.selected[i][prop2] == 0) row.push(0);
			row.push(this.selected[i][prop1] / this.selected[i][prop2]);
		}
		out.push(row);
		return out;
	};

	/*
	 * Returns an array of data compatible with the bar chart.
	 */
	this.getComparisonDataCompView = function(prop1, maxCountries) {
		maxCountries = (maxCountries < this.selected.length) ? maxCountries : this.selected.length;	
		
		var out = new Array();
		var row = new Array();
		row.push("x");
		for(i = 0; i < maxCountries; i++) {
			row.push(this.selected[i]["Country"]);
		}
		out.push(row);
		row = new Array();
		row.push(prop1 );
		for(i = 0; i < maxCountries; i++) {
			if(this.selected[i][prop1] == null ) row.push(0);
			row.push(this.selected[i][prop1] / 1);
		}
		out.push(row);
		console.log("2");
		return out;
	};
	
	function lookup(iso, arr) {
		for(i = 0; i < arr.length; i++)
			if(arr[i]["ISO"] == iso) return i;
		return -1;
	}

	function lookupCname(cname, arr) {
		for(i = 0; i < arr.length; i++)
			if(arr[i]["Country"] == cname) return i;
		return -1;
	}

}
