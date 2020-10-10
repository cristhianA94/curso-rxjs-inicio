/**
 * ==== Operadores para crear Observables ====
 * ============== fromEvent ===============
 * Permite crear Observables a partir eventos
 */
import { fromEvent } from 'rxjs';


//Eventos del DOM
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
};

src1$.subscribe(({ x, y }) => {
    console.log(x, y)
});

src2$.subscribe(evento => {
    console.log(evento.key);
});

// Es lo mismo pero destructurando el objeto
/* src2$.subscribe(({key}) => {
    console.log(key);
}); */