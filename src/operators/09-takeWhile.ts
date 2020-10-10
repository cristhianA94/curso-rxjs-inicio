/**
 * =============== Operadores ===============
 * ============= takeWhile =============
 * Recibe emisiones mientras se cumpla una condicion
 */

import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    //takeWhile(({ y }) => y <= 150)
    // El true incluye el ultimo valor que completo la condicion
    takeWhile(({ y }) => y <= 150, true)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});
