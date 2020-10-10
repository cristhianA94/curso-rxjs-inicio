import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

const intervalos$ = new Observable<number>(subscriber => {
    // Emitir nums aleatorios
    const intervalID = setInterval(
        () => subscriber.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID);
        console.log("Termino interval");
    }
});

/** Subject: permite acoplarse a un Observable y generar nuevos datos a este.
 * Caracteriticas Subject
 * 1- Casteo múltiple
 * 2- Tambien es un Observer
 * 3- Next, error y complete
*/
const subject$ = new Subject();
// Asigna al Subject el Observable
const subscription = intervalos$.subscribe(subject$);

// TODO Cold Observable: subscribir un Observable
// const subs1 = intervalos$.subscribe(random => console.log('subs1', random));
// const subs2 = intervalos$.subscribe(random => console.log('subs2', random));

// TODO Hot Observable: subscribir el Subject del Observable
// Las subscribciones tienen el mismo valor a la vez.
//  const subs1 = subject$.subscribe(random => console.log('subs1', random));
//  const subs2 = subject$.subscribe(random => console.log('subs2', random));
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);


setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    // Detiene el Observable ln 15
    subscription.unsubscribe();
}, 3500)