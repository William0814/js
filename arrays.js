/*var Array1 = ['zapatilla', 'camiseta', 'pantalon'];
Array1[3] = 'Medias';
Array1[4] = prompt('digita otro arituculo ');

alert(Array1[4]);

var nombre = ['william', 'isabella', 'emilio', 'karime'];

for (var i = 0; i < nombre.length; i++) {
  document.write('<li>' + nombre[i] + '</li>');
}*/

/*var trabajadores = new Array();
var contador = 0;
var persona;*/

/*while (persona != 'salir') {
  persona = prompt('Digita nombre: ');
  trabajadores[contador] = persona;
  contador++;
}
trabajadores.pop();
for (var i = 0; i < trabajadores.length; i++) {
  document.write(trabajadores[i] + '<br>');
}
document.write('<ul>');
var nombres = ['william', 'luis', 'karime', 'emilio', 'isabella'];

nombres.forEach((elemento, index) => {
  document.write('<li>' + index + ' - ' + elemento + '</li>');
});
document.write('<ul>');

var busqueda = nombres.find(function (nombre) {
  return nombre == nombre1;
});

var numeros = [33, 55, 44, 12, 25, 25, 6, 9, 4];
var Busqueda = numeros.some((numero) => numero > 40);

console.log(numeros);*/

var pelis = ['batman', 'cars', 'it'];
var categoria = ['accion', 'infantil', 'terror'];
var cine = [pelis, categoria];
console.log(cine[1][0]);
