const titulo = document.querySelector('h1');
const mensaje = document.querySelector('.texto__parrafo');
const inputNumero = document.querySelector('.container__input');
const botonIntentar = document.querySelector('.container__boton');
const botonReiniciar = document.getElementById('reiniciar');

let numeroSecreto;
let intentosRestantes;
const MAX_INTENTOS = 5;

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    intentosRestantes = MAX_INTENTOS;
    titulo.textContent = 'Adivina el número';
    mensaje.textContent = `Tienes ${MAX_INTENTOS} intentos. Ingresa un número entre 1 y 100.`;
    inputNumero.value = '';
    inputNumero.disabled = false;
    botonIntentar.disabled = false;
    botonReiniciar.disabled = true;
}

function terminarJuego(resultado) {
    inputNumero.disabled = true;
    botonIntentar.disabled = true;
    botonReiniciar.disabled = false;
    if (resultado === 'ganaste') {
        mensaje.textContent = `¡Felicitaciones! Adivinaste el número ${numeroSecreto}.`;
    } else if (resultado === 'perdiste') {
        mensaje.textContent = `Se acabaron los intentos. El número era ${numeroSecreto}.`;
    }
}

function manejarIntento() {
    const valor = Number(inputNumero.value);
    if (!valor || valor < 1 || valor > 10) {
        mensaje.textContent = 'Ingresa un número válido entre 1 y 100.';
        return;
    }

    if (valor === numeroSecreto) {
        terminarJuego('ganaste');
        return;
    }

    intentosRestantes -= 1;
    if (intentosRestantes <= 0) {
        terminarJuego('perdiste');
        return;
    }

    if (valor < numeroSecreto) {
        mensaje.textContent = `Demasiado bajo. Te quedan ${intentosRestantes} intentos.`;
    } else {
        mensaje.textContent = `Demasiado alto. Te quedan ${intentosRestantes} intentos.`;
    }
}

botonIntentar.addEventListener('click', manejarIntento);
botonReiniciar.addEventListener('click', iniciarJuego);

iniciarJuego();
