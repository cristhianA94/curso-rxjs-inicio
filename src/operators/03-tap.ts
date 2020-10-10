/**
 * =============== Operadores ===============
 * ============= tap =============
 * tap: No modifica nada la salida, sirve a modo de depuracion
 *       para comprobar valores antes de la subscripcion
 */

import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1, 5);

const observer = {
    next: valor => console.log('next', valor),
    complete: () => console.log('Se termino todo')
}

numeros$.pipe(
    tap(x => console.log('antes', x)),
    map(val => val * 10),
    tap(observer)
)
    .subscribe(val => console.log('subs', val));