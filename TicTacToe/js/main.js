$(document).ready(function(){
	$(".box").click(boton);
	$("#inicio").click(empezar);
});

var i=0;

function boton() {
	i++;
	if(i%2==0){
		$(this).text("O")
	}
	else{
		$(this).text("X") 
	}
	$(this).attr("disabled", "disabled");
	juego();	
}

function juego(){
	var b1=$("#1").text();
	var b2=$("#2").text();
	var b3=$("#3").text();
	var b4=$("#4").text();
	var b5=$("#5").text();
	var b6=$("#6").text();
	var b7=$("#7").text();
	var b8=$("#8").text();
	var b9=$("#9").text();
	if(i>=5){
		if(b1==b4 && b4==b7&&b1!=""){
			alert("Jugador "+b1+" gana!");
		} else if(b3==b6&&b6==b9&&b3!=""){
			alert("Jugador "+b3+" gana!")
		} else if (b2==b5&&b5==b8&&b2!="") {
			alert("Jugador "+b2+" gana!")
		} else if (b1==b2&&b2==b3&&b1!="") {
			alert("Jugador "+b1+" gana!")
		} else if (b4==b5&&b5==b6&&b4!="") {
			alert("Jugador "+b4+" gana!")
		} else if (b7==b8&&b8==b9&&b7!="") {
			alert("Jugador "+b7+" gana!")
		} else if (b1==b5&&b5==b9&&b1!="") {
			alert("Jugador "+b1+" gana!")
		} else if (b3==b5&&b5==b7&&b3!="") {
			alert("Jugador "+b3+" gana!")
		} else if(i==9){
			alert("Empate");
		}
	}
}

function empezar(){
	$(".box").html("");
	$(".box").removeAttr("disabled");
	i=0;
}