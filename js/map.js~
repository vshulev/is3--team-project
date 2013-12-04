
function Map(elementID, mapheadings, mapdata) {

	var listeners = new Array();

	var continents = ["002", "150", "021", "005", "142", "009"];
	var chart, data;
	var options = {
		height:527,
		width: 844,
		colorAxis: {colors: ['#CFFFBF', '#1D7300']},
		enableRegionInteractivity: true,
		region: "world",
		explorer: {}
	};

	google.load('visualization', '1', {'packages': ['geochart']});
	google.setOnLoadCallback(drawRegionsMap);

	function drawRegionsMap() {

		var headings = [mapheadings];
		data = headings.concat(mapdata);
	
		data = google.visualization.arrayToDataTable(data);

		chart = new google.visualization.GeoChart(document.getElementById(elementID));
		google.visualization.events.addListener(chart, "regionClick", function(evt) {
			for(i = 0; i < listeners.length; i++)
				listeners[i].notify(evt.region);
		});
		chart.draw(data, options);
	}

	this.drawRegion = function(rID) {
		options.region = rID;
		chart.draw(data, options);
	};
	
	this.redraw = function(h, d) {
		var headings = [h];
		data = headings.concat(d);
		
		data = google.visualization.arrayToDataTable(data);
		chart.draw(data, options);
	};

	this.addListener = function(obj) { listeners.push(obj); }

}
