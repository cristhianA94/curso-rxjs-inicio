/**
 * ==== Operadores para crear Observables ====
 * ============== interval || timer ===============
 * Interval: Permite crear Observables numeros secuenciales en un intervalo de tiempo asíncronamente
 * Timer: Permite crear un unico Observable que se completara despues de cierto tiempo.
 */
import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
}

const hoyEn5 = new Date(); // Fecha ahora
// Suma 5 segundos a la fecha actual
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const intervals$ = interval(1000);

// Emitira el valor despues de 2seg y se completa
//const timer$ = timer(2000);
// Intervalo que inicia un intervalo de cada seg cuando pase 2seg
//const timer$ = timer(2000, 1000);
// Emite el valor despues de 5 seg
const timer$ = timer(hoyEn5);


console.log('Inicio');
//intervals$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');