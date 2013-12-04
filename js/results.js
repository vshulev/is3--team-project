// JavaScript Document
function rate1(){
    $("#sel1").change(function() {
   var rate1 = $("#sel1 option:selected").text(); 
   $('#resultsOutput1').html(rate1+": ");
});  

}

function rate2(){
    $("#sel2").change(function() {
   var rate2 = $("#sel2 option:selected").text();
   $('#resultsOutput2').html(rate2+": ");
});  

}

function check(){
	var x=document.getElementById("selectedList");
	$('#resultsOutputText').html(x);
	}