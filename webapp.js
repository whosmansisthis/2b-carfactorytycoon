// JavaScript Document
// Give the user their income every 5 seconds
var money = 1000;
var h = 1;
var roi = 100*h;

function generate() {
	money += roi;
}

function d() {
h += 0.25;
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