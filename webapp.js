// JavaScript Document
// Give the user their income every 5 seconds
var money = 1000;
var research = 1;
var research_cost = 1000;

function generate() {
	money += 100 * research;
	update();
}

function research_car() {
	if(money >= research_cost) {
		research = research + 0.1;
		money -=research_cost;
		research_cost *= 1.1;
		update();
	}
}

// update the value stored in javascript onto the page.
function update() {
	document.getElementById("d").value = money.toFixed(2);
	setCookie();
}
 
 
window.onload = setInterval(generate, 5000);

// COOKIE	

function setCookie() {
    var exdays = 365;
	var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = "money=" + money + ";" + expires;
    document.cookie = "research=" + research + ";" + expires;
	document.cookie = "research_cost=" + research_cost + ";" + expires;
}

function loadCookies(cname) {
    var string = document.cookie;
	var name = cname + "=";
    var ca = string.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length);
        }
    }
    return "";
	update();
}



