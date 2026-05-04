import * as combine from './combine.js';

const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const operacionSelect = document.getElementById('operacion');
const btncalcular = document.getElementById('btncalcular');
const resultadosDiv = document.getElementById('resultados');

function calcular() {
    try {
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
                throw new Error('Operación no válida');
        }

        mostrarResultado(`📌 Resultado: ${JSON.stringify(resultado)}`);

    } catch (error) {
        mostrarResultado(`❌ Error: ${error.message}`, 'error');
    }
}

function mostrarResultado(mensaje, tipo = 'success') {
    resultadosDiv.textContent = mensaje;
    resultadosDiv.className = `result ${tipo}`;
}

btncalcular.addEventListener('click', calcular);