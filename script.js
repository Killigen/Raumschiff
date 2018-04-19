
var mySchiff=0;

var i = 1;
var posy = 200;
var posx = 200;
var t;
var strecke = 0;

function setSchiff(schiff){
this.mySchiff = schiff;
document.getElementById("mySchiffName").innerHTML = getSchiffName(mySchiff);
var schiffPic = document.getElementById("mySchiffPic");
schiffPic.src = getSchiffPic(mySchiff);

var parent = document.getElementById("s");
var child = document.getElementById("auswahl");
parent.removeChild(child);
var box = document.getElementById('box');

}
function start(){
		
		
		
		 
		
		
}
//Tasteneingabe
document.onkeydown = function(event) {
  if (event.keyCode == 40) {
    bewegen(2);
  }
  if (event.keyCode == 39) {
    bewegen(3);
  }
  if (event.keyCode == 38) {
    bewegen(0);
  }
  if (event.keyCode == 37) {
    bewegen(1);
  }
}

function moveRight(){
	if(strecke >= 50 ){
		clearInterval(t);
	}
	else
	{
		posx +=1;
		box.style.left = posx+'px';
		strecke++;
	}
console.log(pos);

}


function moveLeft(){
	if(strecke >= 50){
		clearInterval(t);
	}
	else
	{
		posx -=1;
		box.style.left = posx+'px';
		strecke++;
	}
console.log(pos);

}

function moveDown(){
	if(strecke >= 50){
		clearInterval(t);
	}
	else
	{
		posy +=1;
		box.style.top = posy+'px';
		strecke++;
	}
console.log(strecke);

}

function moveUp(){
	if(strecke >= 50){
		clearInterval(t);
	}
	else
	{
		posy -=1;
		box.style.top = posy+'px';
		strecke++;
	}
console.log(pos);

}


function bewegen(r){//0=up 1=left  2=down  3=right
	switch (r) {
    
	case 0:
		t = setInterval(moveUp,10);
		strecke = 0;
	break;
	
	case 1:
		t = setInterval(moveLeft,10);
		strecke = 0;
	break;
	
	case 2:
		t = setInterval(moveDown,10);
		strecke = 0;
	break;
		
	case 3:
		t = setInterval(moveRight,10);
		strecke = 0;
	break;
		
	default:
	
	
	}
	
}
	


//Wird nich nicht Benötigt

 function werIstWo(gesucht){
	for(var i = 0; i < feldgröße; i++){
	}
} 




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