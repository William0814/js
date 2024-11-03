var miBoton = document.getElementById('MiBoton');

miBoton.addEventListener('click', function () {
  alert('has hecho click.....');
});

var imagens = document.getElementById('image');
imagens.addEventListener('mouseover', function () {
  alert('has puesto el raton encima....');
});

console.log(window.innerHeight.valueOf);
