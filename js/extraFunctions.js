function changeThis(){
	var formInput = document.getElementById('autocomplete').value;
	document.getElementById('newText').innerHTML = formInput;
}

function rate1(){
	$("#sel").change(function() {
    var rate1 = $("#sel option:selected").text(); //no 'var' to make it a global variable
    $('#selVal').val(rate1);
	return rate1;
});  
}


function rate2(){
    $("#sel2").change(function() {
   $('#selVal2') = $("#sel2 option:selected").text(); //no 'var' to make it a global variable
});  

}


