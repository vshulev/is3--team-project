
function Map(elementID, mapheadings, mapdata) {

	var continents = ["002", "150", "021", "005", "142", "009"];
	var chart, data, options;

	google.load('visualization', '1', {'packages': ['geochart']});
	google.setOnLoadCallback(drawRegionsMap);

	function drawRegionsMap() {

		var headings = [mapheadings];
		data = headings.concat(mapdata);
	
		data = google.visualization.arrayToDataTable(data);

		options = {
			colorAxis: {colors: ['#CFFFBF', '#1D7300']},
			enableRegionInteractivity: true,
			region: "world"
		};

		chart = new google.visualization.GeoChart(document.getElementById(elementID));
		google.visualization.events.addListener(chart, "regionClick", function(region) { console.log(region); });
		chart.draw(data, options);
	}

	this.drawRegion = function(rID) {
		options.region = rID;
		chart.draw(data, options);
	};

}
