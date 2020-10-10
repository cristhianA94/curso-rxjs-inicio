/**
 * =============== Operadores ===============
 * ============= distinct, distinctUntilChanged =============
 * distinct: Deja pasar los valores que no han sido duplicados
 * distinctUntilChanged: Deja pasar los valores si el penultimo valor no se duplica
 */

import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged } from 'rxjs/operators';

const numeros$ = of<number | string>(1, '1', 1, 3, 3, 4, 5, 6, 2, '2', 1, 10);

numeros$.pipe(
    distinct() // usa ===
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});


interface Personaje {
    nombre: string
};

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Batman'
    },
    {
        nombre: 'Dr. Strange'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Batman'
    },
    {
        nombre: 'Robin'
    }
]

from(personajes).pipe(
    // Especifica el campo a fijarse para emitir
    //distinct(p => p.nombre)
    distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log)