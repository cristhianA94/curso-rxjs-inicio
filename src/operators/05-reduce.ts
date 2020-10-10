/**
 * =============== Operadores ===============
 * ============= reduce =============
 * Aplicar una funcion acumuladora a las emisiones emitidas, pero al finalizar el Observable
 */

import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

// Reduce en JavaScript
const number = [1, 2, 3, 4, 5];

const totalReduce = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
};

const total = number.reduce(totalReduce, 0);
console.log('total', total);

// Reduce RxJs
interval(500).pipe(
    // Completara el Observable despues de 3 emisiones
    take(6),
    tap(console.log),
    // Comienza con 0
    reduce(totalReduce)
)
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    });