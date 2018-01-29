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
}

function e(val) {
	document.getElementById("d").value = val;
}
 
 function v() {
	 try {
		 d(eval(document.getElementById("d").value));
	 }
	 catch(err) {
		 d("Error");
	 }
 }
 
window.onload = setInterval(generate, 5000);