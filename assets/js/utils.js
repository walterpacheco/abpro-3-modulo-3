// Función para obtener la sumatoria de un número
export function calcularSumatoria() {
    const numero = parseInt(document.getElementById('numero').value);
    let sumatoria = 0;
    for (let i = 1; i <= numero; i++) {
        sumatoria += i;
    }
    document.getElementById('resultado').textContent = `La sumatoria es: ${sumatoria}`;
}

// Función para verificar si un número es primo
export function verificarPrimo() {
    const numero = parseInt(document.getElementById('numeroPrimo').value);
    let esPrimo = true;
    if (numero === 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }
    document.getElementById('resultadoPrimo').textContent = esPrimo ? `${numero} es un número primo` : `${numero} no es un número primo`;
}

// Función para ejecutar una cuenta regresiva
export function ejecutarCuentaRegresiva() {
    const numero = parseInt(document.getElementById('numeroRegresiva').value);
    let resultado = '';
    for (let i = numero; i >= 0; i--) {
        resultado += `${i} `;
    }
    document.getElementById('resultadoRegresiva').textContent = resultado.trim();
}

// Función para calcular la sumatoria de números pares
export function ejecutarSumatoriaPares() {
    const numero = parseInt(document.getElementById('numeroPares').value);
    let sumatoria = 0;
    for (let i = 2; i <= numero; i += 2) {
        sumatoria += i;
    }
    document.getElementById('resultadoPares').textContent = `La sumatoria de números pares es: ${sumatoria}`;
}

// Función para generar una tabla de multiplicar
export function ejecutarTablaMultiplicar() {
    const numero = parseInt(document.getElementById('numeroTabla').value);
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    document.getElementById('resultadoTabla').textContent = resultado;
}
