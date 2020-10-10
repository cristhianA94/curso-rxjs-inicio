import { Observable, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error:error => console.warn('error [obs]:', error),
    complete: ()=>console.info('Completados [obs]')
}

const obs$ = new Observable<string>(subs => {

    // Asigna datos al Observable
    subs.next('Hola');
    subs.next('mundo');
    // Forzar error
    const a = undefined;
    a.nombre = 'Cristhian';
    // Finaliza las emisiones de resultados
    subs.complete();
    // Ya no se ejecutan
    subs.next('Hola 2');
    subs.next('mundo 2');
});

/* obs$.subscribe(
    valor => console.log('next', valor),
    error => console.warn('error', error),
    () => console.info('Completado')
); */

// Subscribe el Observable a un Observador
obs$.subscribe(observer);