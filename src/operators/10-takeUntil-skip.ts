/**
 * =============== Operadores ===============
 * ============= takeUntil, skip =============
 * takeUntil: Recibe como arg un Observable, emite valores hasta que el otro observable emita su primer valor
 * skip: Omite x cantidades de emisiones iniciales de un Observable
 */

import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

// Crea un boton
const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);
//const clickBtn$ = fromEvent<MouseEvent>(boton, 'click');
const clickBtn$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    tap(()=> console.log("tap antes de skip")),
    // Finaliza cuando se clickea 2 veces
    skip(1),
    tap(()=> console.log("tap despues de skip")),
);

counter$.pipe(
    // Finaliza las emisiones del Obs$ cuando se clickea
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});
