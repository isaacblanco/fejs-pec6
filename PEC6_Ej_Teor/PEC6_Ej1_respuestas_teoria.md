# Ejercicio 1 - PEC6

## a) ¿Cuál es la función de los componentes y servicios? (i.e. cuándo se debe utilizar cada uno de ellos)

Los componentes se ocupan de la interfaz de usuario y los servicios de la lógica de negocio, los datos y las tareas asíncronas.

**Componentes**

Función: Son los bloques modulares que construyen la interfaz de usuario de una aplicación Angular.
Uso: Se utilizan para presentar datos y responder a la interacción del usuario.
Ejemplo: Un componente podría mostrar una lista de productos, un formulario para crear un nuevo producto o un mapa interactivo.

**Servicios**

Función: Proporcionan funcionalidad reutilizable y compartida entre diferentes componentes.
Uso: Se utilizan para encapsular lógica de negocio, acceder a datos externos o realizar tareas asíncronas.
Ejemplo: Un servicio podría usarse para obtener datos de una API, realizar cálculos complejos o manejar el almacenamiento en caché de datos.

## b) ¿Qué es la <<inyección de dependencias>>? ¿Para qué sirve el decorador @Injectable?

Una inyección de dependencias es un mecanismo para simplificar la organización.

Para que los componentes puedan aprovechar las capacidades de los servicios, Angular utiliza un ingenioso mecanismo llamado inyección de dependencias. Este sistema se encarga de entregar automáticamente las instancias de los servicios necesarios a los componentes que los solicitan. De esta manera, los desarrolladores no tienen que preocuparse por crear y gestionar manualmente estas dependencias, lo que simplifica enormemente la organización y el mantenimiento del código.

## c) Explica los siguientes conceptos de la programación reactiva que se usan en RxJS:

En el centro de las aplicaciones Angular modernas se encuentra la programación reactiva, un paradigma que permite manejar flujos de datos dinámicos de manera eficiente. RxJS, una biblioteca popular para programación reactiva en JavaScript, proporciona las herramientas para gestionar y transformar estos flujos de datos:

**Observable** representan flujos de valores que se emiten con el tiempo, como una tubería que transporta datos.
**Subscription** son conexiones que permiten a los componentes o servicios recibir los valores emitidos por un Observable.
**Operators** son funciones que transforman o combinan Observables, como filtrar, ordenar o agrupar datos.
**Subject** es un tipo especial de Observable que permite controlar manualmente la secuencia de valores emitidos
**Schedulers** son mecanismos para programar la ejecución de código asíncrono en diferentes hilos o temporizadores, optimizando el rendimiento

## d) ¿Cuál es la diferencia entre promesas y observables?

Existen tres diferencias principales que se pueden identificar entre promesas y observables.

En primer lugar, las promesas emiten un único valor, mientras que los observables pueden emitir múltiples valores, incluyendo errores y notificaciones sobre su completitud.

En segundo lugar, las promesas tienen un ciclo de vida simple (pendiente, resuelta o rechazada), mientras que los observables tienen un ciclo de vida más flexible, permitiendo emisiones continuas, errores o completitud.

Finalmente, en cuanto a los casos de uso, las promesas se utilizan para tareas puntuales y simples, mientras que los observables son adecuados para gestionar flujos de datos dinámicos y cambiantes.

## e) ¿Cuál es la función de la tubería (pipe) async?

La pipe _async_ de Angular es una herramienta muy utíl para trabajar con Observables en las plantillas de los componentes. Se encarga de mostrar automáticamente el valor más reciente emitido por un Observable en la interfaz de usuario, eliminando la necesidad de código manual para manejar suscripciones y cancelaciones. Llega cuando tiene que llegar.
