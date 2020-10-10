/**
 * =============== Operadores ===============
 * ============= take =============
 * Emite solo hasta el numero de valores definidos en el take(num) y finaliza la subcripcion
 */

import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    tap(tap => console.log('tap', tap)),
    take(3)
)
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log("complete")
    });

