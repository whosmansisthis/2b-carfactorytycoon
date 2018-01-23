// JavaScript Document
// Give the user their income every 5 seconds
var money = 100;
var h = 1;
var roi = 100*h;

function generate() {
	money += roi;
}

function d(val) {
	document.getElementById("d").value = val;
}

function v(val) {
	document.getElementById("d").value = val;
}

 function e() {
	 try {
		 d(eval(document.getElementById("d").value));
	 }
	 catch(err) {
		 d("Error");
	 }
 }

window.onload = setInterval(generate, 5000);