//your JS code here. If required.
const items = [...document.getElementsByTagName('li')];

for(let index=0; index<items.length; index++){
	if(items[index].id == 'level') {
		alert(`The level of the element is: ${index}`);
	}
}