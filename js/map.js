
function Map(elementID, mapheadings, mapdata) {

	var continents = ["002", "150", "021", "005", "142", "009"];

	google.load('visualization', '1', {'packages': ['geochart']});
	google.setOnLoadCallback(drawRegionsMap);

	function drawRegionsMap() {

		var headings = [mapheadings];
		var data = headings.concat(mapdata);
	
		var data = google.visualization.arrayToDataTable(data);

		var options = {
			colorAxis: {colors: ['#CFFFBF', '#1D7300']},
			enableRegionInteractivity: true
		};

		var chart = new google.visualization.GeoChart(document.getElementById(elementID));
		google.visualization.events.addListener(chart, "regionClick", function(region) { console.log(region); });
		chart.draw(data, options);
	}
}
