
function CountrySelect(listID, autocomplID, selectAllID, deselectID, deselectAllID, m, uf) {

	var model = m;
	var sList = document.getElementById(listID);
	var updateFunc = uf;	

	var countries = new Array();
	for(i = 0; i < model.data.length; i++)
		countries.push(model.data[i]["Country"]);

	var selected = new Array();
	for(i = 0; i < model.selected.length; i++)
		selected.push(model.selected[i]["Country"]);

	$( "#" + autocomplID ).autocomplete({

		lookup: countries,
		onSelect: function(suggestion) {
			$( "#" + autocomplID ).val("");

			var country = suggestion.value;
			var countryRecord = model.getCountryInfoByName(country);
      
			if(selected.indexOf(country) == -1){
				selected.push(country);
				model.addToSelected(countryRecord["ISO"]);
				var p="";

				var opt = document.createElement("option");
				opt.innerHTML = country;
				opt.textContent = country;
				opt.setAttribute("value", countryRecord["ISO"]);
				sList.appendChild(opt);

				updateFunc();
			}
		}

	});

	
	$( "#" + selectAllID ).click(function() {
		// empty current selection
		selected = new Array();
		model.selected = new Array();
		while(sList.options.length > 0)
			sList.remove(0);

		// add everything
		var opt;
		var country;
		for(i = 0; i < model.data.length; i++) {
			model.selected.push(model.data[i]);
			country = model.selected[i]["Country"];
			selected.push(country);

			var opt = document.createElement("option");
			opt.innerHTML = country;
			opt.textContent = country;
			opt.setAttribute("value", model.selected[i]["ISO"]);
			sList.appendChild(opt);
		}

		updateFunc();
		
	});

	$( "#" + deselectID ).click(function() {

		// TODO handle case when there is no selected index..
		var selection = sList.options[sList.selectedIndex].text;
		var iso = sList.options[sList.selectedIndex].value;
		sList.remove(sList.selectedIndex);

		if(selected.indexOf(selection) != -1) {
			selected.splice(selected.indexOf(selection), 1);
			model.removeFromSelected(iso);
			updateFunc();
		}

	});

	$( "#" + deselectAllID ).click(function() {
		selected = new Array();
		model.selected = new Array();
		while(sList.options.length > 0)
			sList.remove(0);
		updateFunc();
	});

}
