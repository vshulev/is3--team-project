
function Comparison(elementID, data) {

	var chart, chartData;
	var options = {
		animation: {
			duration: 1000,
			easing: 'out'
		}
	};

	var criteria = new Array();
	var countries = new Array();

	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(init);

	function init() {
		chart = new google.visualization.ColumnChart(document.getElementById(elementID));
		chartData = google.visualization.arrayToDataTable(data);
		chart.draw(chartData, options);
	}
	
	this.redraw = function(data) {
		chartData = google.visualization.arrayToDataTable(data);
		chart.draw(chartData, options)
	}

}
