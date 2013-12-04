
function Scatter(elementID, sHeadings, sData) {

	var chart;
	var options = {
		height:527,
		width: 844,
		title: sHeadings[0] + " / " + sHeadings[1],
		hAxis:{title: sHeadings[0]},
		vAxis:{title: sHeadings[1]},
		legend: 'none',
		explorer: {}
	};

	google.load('visualization', '1', {'packages': ['corechart']});
	google.setOnLoadCallback(drawScatterchart);

	function drawScatterchart() {
		var dataTable = new google.visualization.DataTable();
		dataTable.addColumn("number", sHeadings[0]);
		dataTable.addColumn("number", sHeadings[1]);
		dataTable.addColumn({type: 'string', role: 'tooltip'});

		dataTable.addRows(sData);

		chart = new google.visualization.ScatterChart(document.getElementById(elementID));
		chart.draw(dataTable, options);
	}

	this.update = function(sHeadings, sData) {
		// TODO move repeating code to separate function
		var dataTable = new google.visualization.DataTable();
		dataTable.addColumn("number", sHeadings[0]);
		dataTable.addColumn("number", sHeadings[1]);
		dataTable.addColumn({type: 'string', role: 'tooltip'});

		dataTable.addRows(sData);

		options.title = sHeadings[0] + " / " + sHeadings[1];
		options.hAxis.title = sHeadings[0];
		options.vAxis.title = sHeadings[1];

		chart.draw(dataTable, options);
	};

}
