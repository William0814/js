var resultado = 5 + 6;
console.log('el resultado es:' + resultado);
// Operador modulo o resto de la division

var resto = 46 % 5;
console.log('el resto de 46/5 es:' + resto);

// operador incremento
var Inicial = 10;
var incremento = ++Inicial;
console.log('el incrimento es: ' + incremento++);

const CONSTANTE = 12345;
console.log(CONSTANTE);
var num = 3;
var num2 = num.toString();

console.log(num2);

var texto = 'esto es un texto corto';
var busqueda = texto.indexOf('corto');
var busqueda1 = texto.search('texto');
var busqueda2 = texto.match(/texto/gi);
var busqueda3 = texto.substring(10.6);
var busqueda4 = texto.charAt(9);
var busqueda5 = texto.startsWith('esto');
var busqueda6 = texto.startsWith('la');
var busqueda7 = texto.endsWith('esto');
var busqueda8 = texto.replace('esto', 'mira');

console.log(busqueda);
console.log(busqueda1);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);

var numero1 = 5;
var numero2 = 2;
numero3 = numero1++ + numero2;
// numero3 = 7, numero1 = 6

numero4 = ++numero1 + numero2;

console.log(numero3, numero4);

var booleano = true;
console.log(!booleano); // caso contrario al dado en la variable.

var cantidad = 0,
  vacio = !cantidad;
console.log(vacio);

var cantidad = 5,
  vacio1 = !cantidad;

console.log(vacio1);

var mensaje = '',
  mensajeVacio = !mensaje;

console.log(mensajeVacio);

var Mensaje = 'hola mundo',
  MensajeVacio = !Mensaje;
console.log(MensajeVacio);

var valor1 = true;
var valor2 = false;
resultado = true && false;

console.log('es:' + resultado);

var Valor1 = true;
var Valor2 = false;
Resultado = Valor1 || Valor2;

console.log('Sera:' + Resultado);

var numeroA = 5;
var numeroB = 6;
ResultadoA = numeroA > numeroB;

console.log(ResultadoA);
