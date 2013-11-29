
function Map(elementID, mapheadings, mapdata) {

	google.load('visualization', '1', {'packages': ['geochart']});
	google.setOnLoadCallback(drawRegionsMap);

	function drawRegionsMap() {
		var headings = [mapheadings];
		var data = headings.concat(mapdata);
		console.log(data);
	
		var data = google.visualization.arrayToDataTable(data);

		var options = {};

		var chart = new google.visualization.GeoChart(document.getElementById(elementID));
		chart.draw(data, options);
	}
}
