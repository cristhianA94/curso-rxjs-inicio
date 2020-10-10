/**
 * =============== Operadores ===============
 * ============= first =============
 * Emitira una emision en cuanto la detecte, normalmente la 1º, o segun una condicion
 */

import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

/* click$.pipe(
    tap(console.log),
    // Emite solo el primer resultado
    //first()
    // Condicion de que Y sea >= a 150
    first<MouseEvent>(event => event.clientY >= 150)
) */

// Con destructuracion de objetos
click$.pipe(
    tap<MouseEvent>(() => console.log('tap')),
    /* map(event => ({
        clientY: event.clientY,
        clientX: event.clientX,
    })) */
    map(({ clientX, clientY }) => ({ clientY, clientX })),
    first(event => event.clientY >= 150)
)
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log("complete")
    });