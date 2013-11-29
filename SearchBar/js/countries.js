$(function(){
  var countries = [
				   "Bulgaria",
				   "Belgium",
				   "Belarus",
				   "Italy",
				   "Spain",
				   "France", 
				   "UK", 
				   "USA",
				   "Australia"
				   ];

$('#autocomplete').autocomplete({
    lookup: countries,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Country Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
  

});