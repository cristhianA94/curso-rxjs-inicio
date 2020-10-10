# Proyecto inicial - Curso de RXJS

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```

Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.

* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```

Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto

Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)

---

## Funciones para crear Observables


### Subject

Permite acoplarse a un Observable y generar nuevos datos a éste.
Caracteriticas Subject:

* Casteo múltiple
* Tambien es un Observer
* Next, error y complete

### of

Permite crear Observables a partir de un conjunto de datos o argumentos de manera **SÍNCRONA**.

```
const obs$ = of([1, 2, 3, 4, 5, 6]);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6]);
const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, true, Promise.resolve());
```

### from

Permite crear Observables a partir de: array, promise, iterable, observable.

```
const src$ = from([1, 2, 3, 4, 5, 6]);());
```

### fromEvent

Permite crear Observables a partir eventos.

```
const src1$ = fromEvent<MouseEvent>(document, 'click');
```

### range

Permite crear Observables que emiten una secuencia de numeros en base a un rango, por defecto son **SÍNCRONOS**.

```

@param {number} [start=0] Valor por defecto.
@param {number} count Numeros a generar.
@param asyncScheduler Convierte en forma asincrona.

const src1$ = range(1,5, asyncScheduler);
```

### interval

Permite crear Observables numeros secuenciales en un intervalo de tiempo **ASÍNCRONAMENTE**.

```
const intervals$ = interval(1000);
```

### timer

Permite crear un unico Observable que se completara despues de cierto tiempo.

```
const timer$ = timer(2000);
// Intervalo que inicia un intervalo de cada seg cuando pase 2seg
const timer$ = timer(2000, 1000);
```

### asyncScheduler

Permite crear intervalos de tiempo **ASÍNCRONAMENTE**.

```
// Llamar a funcion con 1 solo argumento.
const saludar2 = nombre => console.log(`Hola ${nombre}`);
asyncScheduler.schedule(saludar2, 2000, 'Cristhian');
```
