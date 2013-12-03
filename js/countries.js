$(function(){


var countries = [];
	
		for(var i = 0; i < fullDataSet.length; i++){
			countries.push(fullDataSet[i].Country);
}

var selected = [];

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
  alert("You selected: " + x.options[x.selectedIndex].text);
  var x=document.getElementById("selectedList");
  x.remove(x.selectedIndex);
  //alert("You selected: " + x.options[x.selectedIndex].text);

  if(selected.indexOf(x.text) != -1) { // Make sure the value exists
        selected.splice(selected.indexOf(x), 1);
  

    }   
}

