/**
 * =============== Operadores ===============
 * ============= distinctUntilKeyChanged =============
 * Deja pasar los valores si el penultimo valor no se duplica segun una key ({k:1}) especificada
 */

import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

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
    distinctUntilKeyChanged("nombre")
).subscribe(console.log)