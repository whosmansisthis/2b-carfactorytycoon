// JavaScript Document
// Give the user their income every 5 seconds
var money = 1000;
var research = 1;

function generate() {
	money += 100 * research;
}

function research_car() {
	research = research * 1.1;
	money-=100;
	e(money);
}

// update the value stored in javascript onto the page.
function e(val) {
	document.getElementById("d").value = val;
}
 

 
window.onload = setInterval(generate, 5000);
window.onload = setInterval(e(money), 005);