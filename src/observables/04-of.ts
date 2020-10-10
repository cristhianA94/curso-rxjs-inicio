/**
 * ==== Operadores para crear Observables ====
 * ============== of ===============
 * Permite crear Observables a partir de unos datos pero de manera SÍNCRONA
 */
import { of } from 'rxjs'

//const obs$ = of([1, 2, 3, 4, 5, 6]);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6]);
//const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve());

console.log('Inicio del Obs$');
obs$.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});
console.log('Fin del Obs$');