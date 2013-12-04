
function Tabs(elementID, callback) {

	this.name = new Array();
	this.tabsContainer = document.getElementById(elementID);

	var children = this.tabsContainer.childNodes;
	for(i = 0; i < children.length; i++) {	
		children[i].onclick = callback;
	}	

}
