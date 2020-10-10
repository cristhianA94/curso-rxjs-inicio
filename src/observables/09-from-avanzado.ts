/**
 * ==== Operadores para crear Observables ====
 * ============== of, from ===============
 * of: toma argumentos y genera una secuencia de Observables
 * from: array, promise, iterable, observable
 */
import { from } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete')
};


// Funcion generadora, mirar Mozzilla Devep
const miGenerador = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
};

const miIterable = miGenerador();

from(miIterable).subscribe(observer);

/*  Probando con fecth */
//const src$ = from([1, 2, 3, 4, 5, 6]);
// Igual a esta:
//const src$ = of(...[1, 2, 3, 4, 5, 6]);

//const src$ = from('Hola');

const src$ = from(fetch('https://api.github.com/users/cristhianA94'));

/* src$.subscribe(async (res) => {
    const dataRes = await res.json();
    console.log(dataRes);
});
 */

//src$.subscribe(observer);
