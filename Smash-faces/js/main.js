var pais1=peru;
var pais2=mexico;
var arreglo= [];
var num1=aleatorio(pais1);
var num2=aleatorio(pais2);

$("#miselect").on('change', function() {
	var valor=$('#miselect').val();
	if (valor==2) {
		fotos(peru,"peru",num1);
	}else if (valor==3) {
		fotos(mexico,"mexico",num2);
	}
});

function aleatorio(pais){
	var fotoTotal= pais.length;
	var randomNumber;
	var existe= true;
	do{
		randomNumber = Math.round(Math.random()*(fotoTotal-1)) + 1;
		if(arreglo.length == fotoTotal){
			randomNumber= -1;
			existe= false;
		} else if(arreglo.length == 0){
			arreglo.push(randomNumber);
			existe= false;
		}  else{
			var parte= arreglo.indexOf(randomNumber)
			if(parte<0){
				arreglo.push(randomNumber);
				existe=false;
			} else{
				console.log('Repite->'+randomNumber)
			}
		}
	} while (existe);
	return randomNumber;
}

function fotos(pais,npais,num){
	var foto=('fotos/'+npais+'/'+pais[num].image);
	$("#foto").html("<img class='foto-coder' src='"+foto+"'/>");	
}

var a=0;
var i=0;
function random(){
	if($('#nombre-coder').val()==pais1[num1].name){
		$('#mensaje').text("Excelente!, Haz acertado");
		a=a+5;
		$("#texto").html(a+" puntos");
		num1=aleatorio(pais1);
		fotos(peru,"peru",num1);
		clean();
	} else if ($('#nombre-coder').val()==pais2[num2].name) {
		$('#mensaje').text("Excelente!, Haz acertado");
		a=a+5;
		$("#texto").html(a+" puntos");
		num2=aleatorio(pais2);
		fotos(mexico,"mexico",num2);
		clean();
	} else{
		$('#mensaje').text("Sigue intentando");
		a=a-1;
		$("#texto").html(a+" puntos");
		i++;
		if(i==5){
			num1=aleatorio(pais1);
			fotos(peru,"peru",num1);
		}
		clean();
	}
}

$('#comprobar').click(random);

function clean(){
	$('#nombre-coder').val("");
}

//Math.random()*ValorLimite+ValorInicial
//Ejemplos 
//         Value          Ceiling          Floor
//          7.03                8              7
//          7.64                8              7
//          0.12                1              0
//         -0.12                0             -1
//          -7.1               -7             -8
//          -7.6               -7             -8

