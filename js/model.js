
function Model(head, data) {

	this.headers = head;
	this.data = data;
	this.selected = new Array(); // subset of selected countries
	
	// populate array of selected items
	for(i = 0; i < data.length; i++)
		this.selected.push(this.data[i]);
	
	this.getCounryInfo = function(iso) {
		var result = lookup(iso, data);
		if(result == -1) return null;
		return data[result];
	};
	
	this.addToSelected = function(iso) {
		var res = lookup(iso, data);
		if(res != -1)
			selected.push(data[res]);
	};
	
	this.removeFromSelected = function(iso) {
		var res = lookup(iso, selected);
		if(res != -1)
			selected.splice(res, 1);
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
	
	function lookup(iso, arr) {
		for(i = 0; i < arr.length; i++)
			if(arr[i]["iso"] == iso) return i;
		return -1;
	};

}
