$(function(){


var countries = [];
	
		for(var i = 0; i < fullDataSet.length; i++){
			countries.push(fullDataSet[i].Country);
}

var selected = [];

var s = document.getElementById('sel');

$('#autocomplete').autocomplete({
    lookup: countries,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Country Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      var country = suggestion.value;

      if(selected.indexOf(country) == -1){
        selected.push(country);
        var p='';

        var opt = document.createElement('option');
        opt.innerHTML = country;
        opt.textContent = country;
        s.appendChild(opt);
        
    }
  }
  });
  

});


