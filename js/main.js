import * as combine from './combine.js';

const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const operacionSelect = document.getElementById('operacion');
const btncalcular = document.getElementById('btncalcular');
const btntest = document.getElementById('btntest');
const resultadosDiv = document.getElementById('resultados');

function calcular() {
    const operacion = operacionSelect.value;
    const num1 = parseFloat(numero1Input.value);
    const num2 = parseFloat(numero2Input.value);

    let resultado;

    switch (operacion) {
        case 'ejercicio1':
            resultado = combine.ejer.ejercicio1();
            break;

        case 'ejercicio2':
            resultado = combine.ejer.ejercicio2();
            break;

        case 'ejercicio3':
            resultado = combine.ejer.ejercicio3(num1, num2);
            break;

        case 'ejercicio4':
            resultado = combine.ejer.ejercicio4();
            break;

        case 'ejercicio5':
            resultado = combine.ejer.ejercicio5(num1);
            break;

        default:
            resultado = "Operación no válida";
    }

    resultadosDiv.innerHTML = `📌 Resultado:<br>${resultado}`;
}

function testEjercicios() {
    resultadosDiv.innerHTML =
        "🧪 TEST EJERCICIOS<br><br>" +
        "Ejercicio 1: " + combine.ejer.ejercicio1() + "<br><br>" +
        "Ejercicio 2: " + combine.ejer.ejercicio2() + "<br><br>" +
        "Ejercicio 3: " + combine.ejer.ejercicio3(1, 10) + "<br><br>" +
        "Ejercicio 4: " + combine.ejer.ejercicio4() + "<br><br>" +
        "Ejercicio 5: " + combine.ejer.ejercicio5(5);
}

btncalcular.addEventListener('click', calcular);
btntest.addEventListener('click', testEjercicios);