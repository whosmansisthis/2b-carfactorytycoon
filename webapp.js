// JavaScript Document
var money = 1000;
var h = 1;
var roi = 100*h;


function generate(m,roi) {
	Math(m + roi);
	setTimeout(generate(m,roi), 5000);
}