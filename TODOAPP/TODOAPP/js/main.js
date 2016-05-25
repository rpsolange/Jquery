function getInputValue(){
	var inputBox= document.getElementById("text-box");
	return inputBox.value;
}

function tarea(){
	var inputBoxValue= getInputValue();
	if(inputBoxValue!== ""){
		doTarea(inputBoxValue);
		clean();
	}
}

 function doTarea(texto){
 	// texto
 	var notas= document.getElementById("texto");
 	//crear elementos
 	var caja= document.createElement("div");
 	caja.className="gray-box";
 	var elemento= document.createElement("span")
 	elemento.className="nota";
 	elemento.innerHTML= texto;
 	//boton
 	var boton= document.createElement("button");
 	var icon= document.createElement("i");
 	icon.className="glyphicon glyphicon-trash";
 	boton.onclick= function(){
 		notas.removeChild(caja);
 	}
 	//checkbox
 	var check= document.createElement('input');
 	check.type = 'checkbox';
 	check.onchange= function(){
 		if(check.checked==true)
 			elemento.innerHTML=texto.strike();
 		else
 			elemento.innerHTML=texto;
 	}

 	boton.appendChild(icon);
	caja.appendChild(elemento);
 	caja.insertBefore(check,elemento);
	caja.appendChild(boton);
	notas.appendChild(caja);
}

function clean() {
	var inputBox = document.getElementById("text-box");
	inputBox.value = "";
	inputBox.focus();
}