// JavaScript Document
// Give the user their income every 5 seconds
var money = 1000;
var h = 1;
var roi = 100*h;

function generate() {
	money += roi;
	alert(money);
}

window.onload = setInterval(generate, 5000);