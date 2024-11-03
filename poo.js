/*nombreDelObjeto.propiedad = 'valor';
Renault.ancho = '2000';
botton.style.width = '500px';
Document.write();
windows.alert();
Renault.acelera();

var miBoton = document.getElementById('boton');
var miBoton2 = document.getElementById('boton2');
miBoton2.focus();
miBoton.focus();*/

//let num1 = 5;
//let num2 = 5;

/*function suma() {
  console.log(num1 + num2);
}
suma();*/

/*function suma2(num1, num2) {
  console.log(num1 + num2);
}*/
//suma2(prompt('digite numero 1: '), prompt('digite numero 2: '));

function fecha() {
  document.write(Date());
}
var nombre;
function perdir_nombre() {
  nombre = prompt('Digite su nombre: ');
  document.write(nombre);
}

var miFuncion = function (nombre) {
  return 'el nombre es' + nombre;
};
miFuncion('william');
