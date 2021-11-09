//script carrusel
var myIndex = 0;

	function carrusel(){
		var i;
		var x = document.getElementsByClassName("imagenes");
		for(i = 0; i < x.length; i++){
			x[i].style.display = "none";
		}
		myIndex++;
		if(myIndex > x.length){
			myIndex = 1
		}
		x[myIndex-1].style.display = "block";
		setTimeout(carrusel, 3000); //cambiar cada 1.5 segundos
	}
	carrusel();


//cotizaciones

document.getElementById('coti').addEventListener("click", function(){
	
	var fechaIn = document.getElementById("fechaIn").value;
	var fechaOut = document.getElementById("fechaOut").value;
	var num = document.getElementById("personas").value;
	
	var presiopersona = num * 1000;
	var diai = parseInt(fechaIn.substr(8,5));
	var diafinal = parseInt(fechaOut.substr(8,5));
	var difdia = diafinal - diai;
	
	var cototal = presiopersona * difdia;
		
	alert(
		"Cotizacion final"+"\n"+
		"Fecha de inicio: " +fechaIn+"\n"+
		"Fecha de salida: " +fechaOut+"\n"+
		"Dias totales: "+difdia+"\n"+
		"Numero de personas: " +num+"\n"+
		"Presion por persona: " +presiopersona+"\n"+
		"total: "+cototal+"\n"
	
	);
	
});