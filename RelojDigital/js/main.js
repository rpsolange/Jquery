$(document).ready(function(){
	reloj();
	fecha();
	$( '.check' ).on( 'click', function() {
		valorData= $(this).attr("data");
		if( $(this).is(':checked') ){
			$(".box").append("<div class='box-style' id='caja"+valorData+"'></div>");
			horario(valorData);
		} else{
			$("#caja"+valorData).remove();
		}
	})
});

var valorData= 0;
var arreglo=[
	{
		ciudad: "Chicago",
		hora: 0
	},
	{
		ciudad: "Sau Paulo",
		hora: 2
	},
	{
		ciudad: "Santiago",
		hora: 1
	},
	{
		ciudad: "México D.F.",
		hora: -1
	},
	{
		ciudad: "Caracas",
		hora: 1
	},
	{
		ciudad: "Brasilia",
		hora: 2
	},
	{
		ciudad: "Quito",
		hora: 0
	},
	{
		ciudad: "Guayaquil",
		hora: 0
	},
	{
		ciudad: "Santa Marta",
		hora: 1
	},
	{
		ciudad: "Bogota",
		hora: 1
	}
]

function reloj(){
	var tiempo= new Date();
	var hora= tiempo.getHours();
	var minuto= tiempo.getMinutes();
	var segundo= tiempo.getSeconds();

	if(minuto<10)
        minuto = "0" + minuto;
    if(segundo<10)
        segundo = "0" + segundo;
    $("#reloj").html(hora+" : "+minuto);
    var time = setTimeout( 'reloj()' , 1000 );
}

function fecha(){
	var meses = new Date;
    var dias= new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var mes= new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var año= meses.getFullYear();
    var day= dias[meses.getDay()];
    var porcion = day.substring(0, 3);
    $("#fecha").html(porcion.toLowerCase()+" "+meses.getDate()+ " de "+mes[meses.getMonth()]+" , "+año);
}

function horario(val){
	var time= new Date;
	var hour= time.getHours();
	var minute= time.getMinutes();
	var second= time.getSeconds();
	var valorName= arreglo[val].ciudad;
	var valorHora=  parseInt(arreglo[val].hora);
	var horaFinal= hour+valorHora;

	if(minute<10)
        minute = "0" + minute;
    if(second<10)
        second = "0" + second;

	$("#caja"+val).html("<p>"+valorName+"</p><p class='text'>"+horaFinal+" : "+minute+"</p>");
	setTimeout('horario('+val+')',1000);
}

//('+val+') --> se escribe entre comillas porque sino la funcion lo toma como texto(valor definido) y no como el parametro de la funcion
// atributo del input -- data --> en vez de usar un id(el cual haria que haga una funcion por hora/ciudad) me permite usar una misma funcion variando el valor de la data (es como si fuera la posición de un array)