onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%3)+1;
	document.getElementById('t'+i).checked = true;
}
setInterval(Move,8000); 
}
