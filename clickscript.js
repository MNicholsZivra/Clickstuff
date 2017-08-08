/*var points = 0;
document.getElementById("displaypnt").innerHTML = points;
document.getElementById("mainButton").onclick = points + 1;
*/
var clicks = 0;

function clickFunction(){
	clicks += 1;
	document.getElementById("displaypnt").innerHTML = clicks;
	
	if (clicks >= 50){
		document.getElementById("bs").innerHTML = "50 Clicks, nice!";
	}
	
	if (clicks >= 75){
		document.getElementById("bs").innerHTML = "75, great clicking!!";
	}
	
	if (clicks >= 100){
		document.getElementById("bs").innerHTML = "100 Clicks, take a break!";
	}
	
	if (clicks >= 110){
		document.getElementById("bs").innerHTML = "Seriously, this is all I got!";
	}
}

