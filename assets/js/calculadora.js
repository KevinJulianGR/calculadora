let numero = document.getElementsByClassName("boton-numero");
let num1 = '';
let num2 = '';
let operacion = null;
let resultado = document.getElementById('resultado');

const actualizarPantalla = () => {
    resultado.setAttribute('data-historial', `${num1} ${operacion || ''}`);
    resultado.value = num2;
};

const validarPunto = (str) => {
    return str.includes('.') ? '' : '.';
};

Array.from(numero).forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.value === '.') {
            num2 += validarPunto(num2);
        } else {
            num2 += boton.value;
        }
        actualizarPantalla();
    });
});

const establecerOperacion = (simbolo) => {
    if (num2 === '') return;
    
    num1 = num2;
    operacion = simbolo;
    num2 = '';
    
    actualizarPantalla();
};

document.getElementById("boton-suma").addEventListener("click", () => establecerOperacion('+'));
document.getElementById("boton-resta").addEventListener("click", () => establecerOperacion('-'));
document.getElementById("boton-multiplicar").addEventListener("click", () => establecerOperacion('x'));
document.getElementById("boton-dividir").addEventListener("click", () => establecerOperacion('÷'));

document.getElementById("boton-resultado").addEventListener("click", () => {
    if (num2 === '' || !operacion) return;
    
    let res = 0;
    switch (operacion) {
        case '+':
            res = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            res = parseFloat(num1) - parseFloat(num2);
            break;
        case 'x':
            res = parseFloat(num1) * parseFloat(num2);
            break;
        case '÷':
            res = parseFloat(num1) / parseFloat(num2);
            break;
    }
    num1 = '';
    num2 = res.toString();
    
    operacion = null;
    
    actualizarPantalla();
});

document.getElementById("boton-borrar").addEventListener("click", () => {
    num1 = '';
    num2 = '';
    operacion = null;
    actualizarPantalla();
});

document.getElementById("boton-borrar-todo").addEventListener("click", () => {
    num2 = num2.slice(0, -1);
    actualizarPantalla();
});