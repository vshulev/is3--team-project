
function CountryInfo(elementID, model) {

	var cInfo = document.getElementById(elementID);

	this.notify = function(region) {
		cInfo.innerHTML = region;
	}

}
