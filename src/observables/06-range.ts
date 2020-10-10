/**
 * ==== Operadores para crear Observables ====
 * ============== range ===============
 * Permite crear Observables que emiten una secuencia de numeros en base a un rango, por defecto son Síncronos
 */
import { range, asyncScheduler} from 'rxjs';

// @param {number} [start=0] Valor por defecto.
// @param {number} count Numeros a generar.
// @param asyncScheduler Convierte en forma asincrona.
const src1$ = range(1,5, asyncScheduler);

console.log("Inicio");

src1$.subscribe(console.log)

console.log("Fin");