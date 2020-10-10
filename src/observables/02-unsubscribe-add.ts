import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

const intervalos$ = new Observable<number>(subscriber => {

    // Crear un contador: 1,2,3,4...abs
    let count = 0;

    const interval = setInterval(() => {
        // Cada segundo
        count++;
        subscriber.next(count);
        //console.log(count);
    }, 1000);

    // Terminara en 2.5 segundos y no en 5 lin 46
    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    // Detiene el intervalo para que no se ejecute en bucle
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

let subs1 = intervalos$.subscribe(observer);
let subs2 = intervalos$.subscribe(observer);
let subs3 = intervalos$.subscribe(observer);

// Permite encadenar subscripciones
subs1.add(subs2)
    .add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    //subs2.unsubscribe();
    //subs3.unsubscribe();
    console.log('Completado timeout');
}, 5000);