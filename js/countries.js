var selected = [];


$(function(){


var countries = [];
	
		for(var i = 0; i < fullDataSet.length; i++){
			countries.push(fullDataSet[i].Country);
}


var sList = document.getElementById('selectedList');

$('#autocomplete').autocomplete({
    lookup: countries,
    onSelect: function (suggestion) {
      //var thehtml = '<strong>Country Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      var country = suggestion.value;
      
      if(selected.indexOf(country) == -1){
        selected.push(country);
        var p='';

        var opt = document.createElement('option');
        opt.innerHTML = country;
        opt.textContent = country;
        sList.appendChild(opt);
        
    }
  }
  });
  

});


function removeOption()
{
  
  var x=document.getElementById("selectedList");
  var selection=x.options[x.selectedIndex].text;
  x.remove(x.selectedIndex);
  
  if(selected.indexOf(selection) != -1) { // Make sure the value exists
        
        selected.splice(selected.indexOf(selection), 1);
      }

}
