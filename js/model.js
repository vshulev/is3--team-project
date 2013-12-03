
function Model(data) {

	this.data = data;
	this.selected = new Array(); // subset of selected countries
	
	// populate array of selected items
	for(i = 0; i < data.length; i++)
		this.selected.push(this.data[i]);
	
	this.getCounryInfo = function(cname) {
		var result = lookup(cname);
		if(result == -1) return null;
		return data[result];
	};
	
	this.addToSelected = function(cname) {
		var res = lookup(cname);
		if(res != -1)
			selected.push(data[res]);
	};
	
	this.removeFromSelected = function(cname) {
		
	};
	
	this.getMapData = function(prop1, prop2) {
		var out = new Array();
		for(i = 0; i < this.selected.length; i++) {
			if(this.selected[i][prop1] == null || this.selected[i][prop2] == null) continue;
			out.push([ this.selected[i]["Country"], this.selected[i][prop1] / this.selected[i][prop2] ]);
		}
		return out;
	};
	
	this.getScatterplotData = function() {
	
	};
	
	this.getComparisonData = function() {
	
	};
	
	function lookup(cname) {
		var mid = Math.floor( data.length / 2 );
		var d1 = bsearch(0, mid, cname);
		var d2 = bsearch(mid + 1, data.length, cname);
		return (d1 == -1) ? d2 : d1;
	};
	
	function bsearch(start, end, val) {
		if(start >= end) return -1; // value not found
		var mid = Math.floor( (end - start) / 2 );
		if(this.data[mid] == cname) return mid;
		if(this.data[mid] > val) return bsearch(start, mid - 1);
		return bsearch(mid + 1, end);
	};

}
