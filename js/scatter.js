
function Scatter(elementID, sHeadings, sData) {

	var data, chart, options;

	google.load('visualization', '1', {'packages': ['corechart']});
	google.setOnLoadCallback(drawScatterchart);

	function drawScatterchart() {
		var headings = [sHeadings];
		data = headings.concat(sData);

		data = google.visualization.arrayToDataTable(data);

		options = {
			title: sHeadings[0] + " / " + sHeadings[1],
			hAxis:{title: sHeadings[0]},
			vAxis:{title: sHeadings[1]},
			legend: 'none'
		};

		chart = new google.visualization.ScatterChart(document.getElementById(elementID));
		chart.draw(data, options);
	}

	this.update = function(headings, data) {
		var h = [headings];
		data = h.concat(data);
		chart.draw(data, options);
	};

}
