/**
 * =============== Operadores ===============
 * ============= scan =============
 * Aplicar una funcion acumuladora a las emisiones emitidas continuamente
 */

import { from } from 'rxjs';
import { map, reduce, scan} from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acumulado, valorActuak) => acumulado + valorActuak;

// Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
)
//.subscribe(console.log);

// Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
)
    .subscribe(console.log);

// Redux
interface Usuario {
    id?: string,
    auth?: boolean,
    token?: string,
    edad?: number,
}

const user: Usuario[] = [
    { id: 'Cris', auth: false, token: null },
    { id: 'Cris', auth: true, token: 'ABC' },
    { id: 'Cris', auth: true, token: 'sweet' },
];

const state$ = from(user).pipe(
    // Estado inicial hay un objeto con esa edad
    scan<Usuario>((acc, curr) => {
        // Extrae las propiedades y crea una nueva instancia de cada uno
        return { ...acc, ...curr }
    }, { edad: 33 })
);

const id$= state$.pipe(
    map( state => state.id)
);

id$.subscribe(console.log);