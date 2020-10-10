/**
 * ==== Operadores para crear Observables ====
 * ============== asyncScheduler ===============
 * Permite crear intervalos de tiempo asíncronamente
 */
import { asyncScheduler } from 'rxjs';

//setTimeout(() => { }, 3000);
//setInterval(() => { }, 3000);

const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);

// Ejecuta despues de 2 segundos
//asyncScheduler.schedule(saludar, 2000);
// Permite enviar un argumento a la funcion, solo 1
//asyncScheduler.schedule(saludar2, 2000, 'Cristhian');

const subs = asyncScheduler.schedule(function (state) {
    console.log('state', state);
    // Llama recursiva a la misma funcion
    this.schedule(state + 1, 1000);
}, 3000, 0);

/* setTimeout(() => {
    subs.unsubscribe();
}, 6000); */

asyncScheduler.schedule(() => subs.unsubscribe(), 6000)