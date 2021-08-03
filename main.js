const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const numberButtons = document.querySelectorAll('.number');
const mathButtons = document.querySelectorAll('.math');

const calculadora = new Calculadora();
const display = new Display(displayValorAnterior, displayValorActual);

numberButtons.forEach(button => {
  button.addEventListener('click', () => display.agregarNumero(button.innerHTML));
});

mathButtons.forEach(button => {
  button.addEventListener('click', () => display.computar(button.value))
});
