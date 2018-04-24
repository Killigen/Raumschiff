
//Schiff 1
var mySchiff1=0;
var posy1 = 500;
var posx1 = 600;
var t1;
var strecke1 = 0;
var lebenspunkte1 = 100;
var richtung1 = 0;

//Schiff 2
var mySchiff2=0;
var posy2 = 500;
var posx2 = 200;
var t2;
var strecke2 = 0;
var lebenspunkte2 = 100;
var richtung2 = 0;

var beideHabenGewaelt = false;

function setSchiff(schiff){

//schiff1 auswaelen
if (beideHabenGewaelt==false){
	this.mySchiff1 = schiff;
	//Text anzeigen
	document.getElementById("mySchiffName1").innerHTML = getSchiffName(mySchiff1);
	//Balken anzeigen
	document.getElementById("progressBar1").style.backgroundSize = lebenspunkte1 + "% 100%";
	document.getElementById("progressInformation1").innerHTML = lebenspunkte1 + " %";
	// Schiff anzeigen 
	var schiffPic1 = document.getElementById("mySchiffPic1");
	schiffPic1.src = getSchiffPic(mySchiff1);	
	var box1 = document.getElementById('box1');
	var laser1 = document.getElementById('laser1');
	
	beideHabenGewaelt = true;
}
else{
	//schiff2 auswaelen
	this.mySchiff2 = schiff;
	document.getElementById("mySchiffName2").innerHTML = getSchiffName(mySchiff2);
	document.getElementById("progressBar2").style.backgroundSize = lebenspunkte2 + "% 100%";
	document.getElementById("progressInformation2").innerHTML = lebenspunkte2 + " %";
	
	var schiffPic2 = document.getElementById("mySchiffPic2");	
	schiffPic2.src = getSchiffPic(mySchiff2);
	var box2 = document.getElementById('box2');

	var parent = document.getElementById("s");
	var child = document.getElementById("auswahl");
	parent.removeChild(child);
		// boxen anzeigen
	var x = document.getElementById("mySchiffNameBox1");
        x.style.display = "block";
	var x = document.getElementById("mySchiffNameBox2");
        x.style.display = "block";

}

}
function start(){
		
		
		
		 
		
		
}
//Tasteneingabe
document.onkeydown = function(event) {
  
  // schiff 1 Pfeiltasten
  if (event.keyCode == 38) {
    bewegen1(0);
  }
  if (event.keyCode == 37) {
    bewegen1(1);
  }
  if (event.keyCode == 40) {
    bewegen1(2);
  }
  if (event.keyCode == 39) {
    bewegen1(3);
  }  
    if (event.keyCode == 13) {
    schuss1();
  }
  
    // schiff 2 wasd //0=up 1=left  2=down  3=right
  if (event.keyCode == 87) {
    bewegen2(0);
  }
  if (event.keyCode == 65) {
    bewegen2(1);
  }
  if (event.keyCode == 83) {
    bewegen2(2);
  }
  if (event.keyCode == 68) {
    bewegen2(3);
  }
    if (event.keyCode == 32) {
    schuss2();
  }
 
  
}

//Hier kommen die Bewegungsfunktionen für Schiff 1

function bewegen1(r2){//0=up 1=left  2=down  3=right
	clearInterval(t1);
	switch (r2) {
    
	case 0:
		t1 = setInterval(moveUp1,10);
		strecke1 = 0;
		richtung1 = 0;
	break;
	
	case 1:
		t1 = setInterval(moveLeft1,10);
		strecke1 = 0;
		richtung1 = 1;
	break;
	
	case 2:
		t1 = setInterval(moveDown1,10);
		strecke1 = 0;
		richtung1 = 2;
	break;
		
	case 3:
		t1 = setInterval(moveRight1,10);
		strecke1 = 0;
		richtung1 = 3;
	break;
		
	default:
	}
	
}

function moveRight1(){
	if(strecke1 >= 5 ){
		clearInterval(t1);
	}
	else
	{
		posx1 +=10;
		box1.style.left = posx1+'px';
		strecke1++;
	}
console.log("y= "+ posy1 + "x= " + posx1);

}

function moveLeft1(){
	if(strecke1 >= 5){
		clearInterval(t1);
	}
	else
	{
		posx1 -=10;
		box1.style.left = posx1+'px';
		strecke1++;
	}
console.log("y= "+ posy1 + "x= " + posx1);

}

function moveDown1(){
	if(strecke1 >= 5){
		clearInterval(t1);
	}
	else
	{
		posy1 +=10;
		box1.style.top = posy1+'px';
		strecke1++;
	}
console.log("y= "+ posy1 + "x= " + posx1);

}

function moveUp1(){
	
	if(strecke1 >= 5){
		clearInterval(t1);
	}
	else
	{
		posy1 -=10;
		box1.style.top = posy1+'px';
		strecke1++;
	}
console.log("y= "+ posy1 + "x= " + posx1);

}
//schuss schiff 1
function schuss1(){
	laserShow();
	if(treffer1()){
		lebenspunkte2 = lebenspunkte2 -10;
	document.getElementById("progressBar2").style.backgroundSize = lebenspunkte2 + "% 100%";
	document.getElementById("progressInformation2").innerHTML = lebenspunkte2 + " %";	
	
	bistDuTot(2);
	
	}
}

function treffer1(){
	switch (richtung1) {//0=up 1=left  2=down  3=right
    
	case 0:
			if(posx2 < posx1+128 && posx2 > posx1-128 && posy1 > posy2){
				return true;
			}	
	break;	
	case 1:
			if(posy2 < posy1+128 && posy2 > posy1- 128  && posx1 > posx2){
				return true;
			}
	break;
	case 2:
			if(posx2 < posx1+128 && posx2 > posx1-128 && posy1 < posy2){
				return true;
			}
	break;
		
	case 3:
			if(posy2 < posy1+128 && posy2 > posy1-128 && posx1 < posx2){
				return true;
			}
	break;		
	default:
	}
}


//zeigt den laser an
function laserShow(){
	var ly = posy1+128;
	var lx = posx1-1000; 
	laser1.style.top = ly+'px';
	laser1.style.left = lx+'px';
	
}






//Hier kommen die Bewegungsfunktionen für Schiff 2

function bewegen2(r2){//0=up 1=left  2=down  3=right
	clearInterval(t2);
	switch (r2) {
    
	case 0:
		t2 = setInterval(moveUp2,10);
		strecke2 = 0;
		richtung2 = 0;
	break;
	
	case 1:
		t2 = setInterval(moveLeft2,10);
		strecke2 = 0;
		richtung2 = 1;
	break;
	
	case 2:
		t2 = setInterval(moveDown2,10);
		strecke2 = 0;
		richtung2 = 2;
	break;
		
	case 3:
		t2 = setInterval(moveRight2,10);
		strecke2 = 0;
		richtung2 = 3;
	break;
		
	default:
	}
}

function moveRight2(){
	if(strecke2 >= 5 ){
		clearInterval(t2);
	}
	else
	{
		posx2 +=10;
		box2.style.left = posx2+'px';
		strecke2++;
	}
console.log("y= "+ posy2 + "x= " + posx2);

}

function moveLeft2(){
	if(strecke2 >= 5){
		clearInterval(t2);
	}
	else
	{
		posx2 -=10;
		box2.style.left = posx2+'px';
		strecke2++;
	}
console.log("y= "+ posy2 + "x= " + posx2);

}

function moveDown2(){
	if(strecke2 >= 5){
		clearInterval(t2);
	}
	else
	{
		posy2 +=10;
		box2.style.top = posy2+'px';
		strecke2++;
	}
console.log("y= "+ posy2 + "x= " + posx2);

}

function moveUp2(){
	
	if(strecke2 >= 5){
		clearInterval(t2);w
	}
	else
	{
		posy2 -=10;
		box2.style.top = posy2+'px';
		strecke2++;
	}
console.log("y= "+ posy2 + "x= " + posx2);

}

//schuss schiff 2
function schuss2(){
	if(treffer2()){
	lebenspunkte1 = lebenspunkte1 -10;	
	document.getElementById("progressBar1").style.backgroundSize = lebenspunkte1 + "% 100%";
	document.getElementById("progressInformation1").innerHTML = lebenspunkte1 + " %";	
	bistDuTot(1);
	}
}	
function treffer2(){
	switch (richtung2) {//0=up 1=left  2=down  3=right
    
	case 0:
			if(posx1 < posx2+128 && posx1 > posx2-128 && posy1 < posy2){
				return true;
			}	
	break;	
	case 1:
			if(posy1 < posy2+128 && posy1 > posy2-128 && posx1 < posx2){
				return true;
			}
	break;
	case 2:
			if(posx1 < posx2+128 && posx1 > posx2-128 && posy1 > posy2){
				return true;
			}
	break;
		
	case 3:
			if(posy1 < posy2+128 && posy1 > posy2-128 && posx1 > posx2){
				return true;
			}
	break;		
	default:
	}
}


function bistDuTot(s){
	if(s==1){
		if(lebenspunkte1<=0){
			var schiffPic1 = document.getElementById("mySchiffPic1");
			schiffPic1.src = "img/boom.gif";
		}
	}
	if(s==2){
		if(lebenspunkte2<=0){
			var schiffPic2 = document.getElementById("mySchiffPic2");
			schiffPic2.src = "img/boom.gif";
		}
	}
}



// Zuordnung SchiffName zu ID

function getSchiffName(id){
	switch (id) {
    case 1:
		return "A-Wing";
	
	case 2:
        return "X-Wing";
        break;
    case 3:
        return "Y-Wing";
		break;
	case 4:
		return "Tie-Interceptor";
		break;
	case 5:
		return "Tie-Advanced";
		break;
	case 6:
		return "Tie-Bomber";
		break;
	case 0:
		return 0;
		break;
    default:
		return 0;
	}
	
}

// Zuordnung SchiffPic zu ID
function getSchiffPic(id){
	switch (id) {
    case 1:
		return "Schiffe/A-Wing.png";
	
	case 2:
        return "Schiffe/X-Wing.png";
        break;
    case 3:
        return "Schiffe/Y-Wing.png";
		break;
	case 4:
		return "Schiffe/Tie-Interceptor.png";
		break;
	case 5:
		return "Schiffe/Tie-Advanced.png";
		break;
	case 6:
		return "Schiffe/Tie-Bomber.png";
		break;
	case 0:
		return "Schiffe/Tie-Fighter.png";
		break;
    default:
		return 0;
	}
	
}