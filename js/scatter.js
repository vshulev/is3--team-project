
function Scatter(elementID, sHeadings, sData) {

	google.load('visualization', '1', {'packages': ['corechart']});
	google.setOnLoadCallback(drawRegionsMap);

	function drawRegionsMap() {
		var headings = [sHeadings];
		var data = sHeadings.concat(sData);
		console.log(data);
	
		var data = google.visualization.arrayToDataTable(data);

		var options = {
				title: 'Pop vs Awesome',
				hAxis:{title: 'Pop', minValue: 0, maxValue: 1000},
				vAxis:{title: 'Awesome', minValue: 0, maxValue: 1000},
				legend: 'none'
				};

		var chart = new google.visualization.ScatterChart(document.getElementById(elementID));
		chart.draw(data, options);
	}
}
