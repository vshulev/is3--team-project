$(function(){


var countries = [];
	
		for(var i = 0; i < fullDataSet.length; i++){
			countries.push(fullDataSet[i].Country);
}

var selected = [];

$('#autocomplete').autocomplete({
    lookup: countries,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Country Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      var country = suggestion.value;
      selected.push(country);
      var p='';
      for(var i = 0; i < selected.length; i++){
        p = p + selected[i] + ', ';
      }
      $('#outputbox').html(p);
      //$('#outputcontent').html(thehtml);
    }
  });
  

});


