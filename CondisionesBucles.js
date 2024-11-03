/*var precio = 2500;
var dinero = prompt('Cuanto dinero tienes:  ');*/

/*if (dinero >= precio && edad >= 18) {
  console.log('Lo puedes comparar...');
} else if (dinero < precio && edad < 18) {
  alert('no te alcanza y estas chico....');
} else if (dinero < precio && edad >= 18) {
  alert('tienes la edad pero no el dinero.......');
} else if (dinero >= precio && edad < 18) {
  console.log('Tienes el dinero pero no la edad...');
} else {
  console.log('trabaja mas, no te alcanza');
} */

/*var num1 = prompt('Numero 1: ');
var num2 = prompt('Numero 2: ');
if (!isNaN(num1) && !isNaN(num2)) {
  var resultado = parseInt(num1) + parseInt(num2);
  alert('El resultado es: ' + resultado);
} else {
  alert('No hay numeros....');
}*/
/*var edad = parseInt(prompt('Que edad tienes: '));
var imprime = '';

switch (true) {
  case edad >= 18 && edad <= 29:
    imprime = 'Eres mayor de edad...';
    break;

  case edad <= 17:
    imprime = 'Eres menor de edad...';
    break;

  case edad >= 30 && edad < 45:
    imprime = 'Eres un adulto...';
    break;

  case edad >= 50:
    imprime = 'Eres viejo....';
    break;

  default:
    imprime = 'dato no valido....';
    break;
}
alert(imprime);
25; 

for (var i = 1; i <= 20; i++) {
  console.log('el numero: ' + i);
}*/
/*contador = 0;
var meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Diciembre',
];

for (let i = 0; i < meses.length; i++) {
  document.write('El mes de: ' + meses[i] + '<br/>');
}

while (contador < meses.length) {
  console.log(meses[contador]);
  contador++;
}

let ciclo = parseInt(prompt('Numero de veces a ejecutar: '));
let contadorA = 1;
while (contadorA < ciclo) {
  console.log('Contador vale: ' + contadorA);
  contadorA++;
}*/ 20;
//var contadorB = 0;
//var numero = parseInt(Math.random() * 100);
//var numeroIntroducido;

/*while (numero != numeroIntroducido) {
  numeroIntroducido = prompt('digite numero: ');
  contadorB++;

  if (numeroIntroducido > numero) {
    alert('Demasiado alto');
  }
  if (numeroIntroducido < numero) {
    alert('Demasiado bajo');
  }
}
alert(
  'correcto el numero era ' +
    numero +
    '. Has hacertado en ' +
    contadorB +
    ' Intentos'
);*/

var year = 2000;

while (year < 2010) {
  document.write(year + '<br>');
  if (year == 2006) {
    break;
  }
  year++;
}
