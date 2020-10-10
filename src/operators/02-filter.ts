/**
 * =============== Operadores ===============
 * ============= filter =============
 * filter: Filtra el contenido y solo emite la condicion puesta
 */

import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

/* range(1, 10).pipe(
    // Filtra los numeros impares
    filter(val => val % 2 === 1)
).subscribe(console.log); */

range(20, 10).pipe(
    // Filtra los numeros impares
    filter((val, i) => {
        console.log('index', i);
        return val % 2 === 1
    })
)//.subscribe(console.log);

interface Personaje {
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

// Filtra solo los heroes
from(personajes).pipe(
    filter(personaje => personaje.tipo === 'heroe')
)//.subscribe(console.log);

// TODO Encadenar operadores
// Mapea la tecla y filtra solo la tecla Enter
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code), // <KeyboardEvent, string>
    filter(key => key === 'Enter')
);


keyup$.subscribe(console.log);
