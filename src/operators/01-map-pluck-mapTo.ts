/**
 * =============== Operadores ===============
 * ================== map, pluck, mapTo ==================
 * map: Transforma el valor de salida
 * pluck: Extrae el valor de una clave perteneciente a un objeto, ejem: {v:1} => 1
 * mapTo: Trasnforma la entrada en una salida especifica
 */

import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';


range(1, 5).pipe(
    // Tipo de dato y el tipo de salida del dato a transformar
    map<number, string>(val => {
        return (val * 10).toString();
    })
).subscribe(console.log)

// Crea un Observable de evento KeyUp
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

/* TODO map      */
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

/* TODO pluck      */
// Accediendo a una propiedad de un objeto
/* const keyupPluck$ = keyup$.pipe(
    pluck('key')
); */

// Accediendo a una propiedad dentro de un objeto
const keyupPluck$ = keyup$.pipe(
    pluck('target','baseURI')
);

/* TODO mapTo      */
const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);


keyup$.subscribe(console.log);
keyupCode$.subscribe(code => console.log('map', code))
keyupPluck$.subscribe(code => console.log('pluck', code))
keyupMapTo$.subscribe(code => console.log('mapTo', code))
