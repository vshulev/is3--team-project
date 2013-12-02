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
      selected.push(suggestion.value);
      $('#outputcontent').html(thehtml);
    }
  });
  

});


