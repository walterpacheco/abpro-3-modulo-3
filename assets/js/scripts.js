import { calcularSumatoria, verificarPrimo, ejecutarCuentaRegresiva, ejecutarSumatoriaPares, ejecutarTablaMultiplicar } from './utils.js';

window.addEventListener('load', function() {
    // Hacer disponibles las funciones globalmente
    window.calcularSumatoria = calcularSumatoria;
    window.verificarPrimo = verificarPrimo;
    window.ejecutarCuentaRegresiva = ejecutarCuentaRegresiva;
    window.ejecutarSumatoriaPares = ejecutarSumatoriaPares;
    window.ejecutarTablaMultiplicar = ejecutarTablaMultiplicar;
});
