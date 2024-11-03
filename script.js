alert('esto es una una ventana emergente');
var edad = prompt('Edad:');
var nombre = prompt('Nombre:');
alert('La edad y nombre es: ' + nombre + ' ' + 'y tienes' + ' ' + edad);
document.write(' <h1> esto es un h1 es js</h1>');

var num = 5;
document.write(num);

if (true) {
  var num = 10;
  document.write(num);
}
document.write(num);

var num1 = prompt('Digite el numero:');
var num2 = 50,
  resultado = num1 + Number(num2);
alert(resultado);
alert(parseInt(num2) + 30);
var Inicial = 10;
let Incremento = Inicial++;
console.log('El numero es: ' + Incremento);

// Operador modulo o resto de la división;
var resto = 46 % 5;
console.log('El resto de 46/5 es ' + resto);
//Operador incremento
var numeroInicial = 10;
let numeroIncrementado = ++numeroInicial;
//Sería como poner que
numeroIncrementado = numeroInicial + 1;
console.log(
  'El operador incremento sobre numeroInicial daría ' + numeroIncrementado
);
//IMPORTANTE: No es lo mismo ++variable que variable++

var numero5 = 5;
document.write('El número antes del incremento vale ' + numero5++);
document.write('<br>');
document.write('<h1>El número después del incremento vale</h1>' + numero5);
document.write('<br>');
document.write('<br>');
// Ahora al revés
let numero6 = 5;
document.write('El número antes del incremento vale ' + ++numero6);
document.write('<br>');
document.write('El número después del incremento vale ' + numero6);
//Constantes. Como las variables

var texto = 'esto es un texto corto';
var busqueda = texto.indexOf('corto');
var busqueda1 = texto.search('texto');
var busqueda2 = texto.match(/texto/gi);
var busqueda3 = texto.substring(10.6);

console.log(busqueda);
console.log(busqueda1);
console.log(busqueda2);
console.log(busqueda3);
