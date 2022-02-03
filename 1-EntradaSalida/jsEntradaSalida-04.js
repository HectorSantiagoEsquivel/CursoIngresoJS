/* 
Hector Santiago Esquivel
Ejercicio 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado;

	nombreIngresado=prompt("Tu mensaje");
	
	document.getElementById("txtIdNombre").value=nombreIngresado;

}

