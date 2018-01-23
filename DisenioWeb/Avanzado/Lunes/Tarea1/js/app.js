entrada=String(prompt("Ingresa Mensaje: ","default"));

aletorio=Math.floor(Math.random()*5) + 1;

if (aletorio==1) {
	alert("Si");
}else if(aletorio==2){
	alert("No");
}else if (aletorio==3) {
	alert("Probablemente");
}else if (aletorio==4) {
	alert("Tal vez");
}else if (aletorio==5) {
	alert("Definitivo no");
}