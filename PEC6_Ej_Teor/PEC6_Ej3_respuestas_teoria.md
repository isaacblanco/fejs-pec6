# PEC 6 - PREGUNTA 3 - Teoria

## a) ¿Qué son los interceptores?

Los interceptores son una característica muy utíl en Angular que permiten interceptar y manipular las peticiones y respuestas HTTP. Proporcionan una forma de centralizar funcionalidades comunes, como agregar encabezados, manejar errores o autenticación.

Un interceptor es un servicio que implementa la interfaz HttpInterceptor. Se usa para inspeccionar o modificar las solicitudes antes de que se envíen al servidor o las respuestas antes de que lleguen a la aplicación.

Por ejemplo, se puede usar un interceptor para agregar un encabezado de autorización a todas las solicitudes salientes. Sera útil cuando se necesite enviar un token de acceso o realizar alguna otra acción antes de que la solicitud se complete, p. ej. con la autentificaciones.

## b) Analiza la siguiente cadena de operadores de RxJS, explica cada uno de los pasos que se están desarrollando y explica en qué caso usarías este código:

```typescript
this.wines$ = this.searchSubject
  .startWith(this.searchTerm)
  .debounceTime(300)
  .distinctUntilChanged()
  .merge(this.reloadProductsList)
  .switchMap((query) => this.wineService.getWine(this.searchTerm));
```

- **startWith(this.searchTerm)**: agrega el valor inicial this.searchTerm al flujo de datos. Es útil para asegurarte de que haya un valor inicial antes de aplicar otros operadores.
- **debounceTime(300)**: se espera 300 milisegundos después de que se detiene la emisión de eventos antes de propagar el último valor. Es útil para evitar búsquedas excesivas mientras el usuario sigue escribiendo.
- **distinctUntilChanged()**: filtra los valores duplicados consecutivos. Solo emite un valor si es diferente al valor anterior. Útil para evitar búsquedas innecesarias si el término de búsqueda no cambia.
- **merge(this.reloadProductsList)**: combina dos flujos de datos en uno solo. En este caso, está fusionando this.searchSubject con this.reloadProductsList.
- **switchMap((query) => this.wineService.getWine(this.searchTerm))**: transforma el flujo de datos en otro observable. En este caso, está llamando al servicio wineService.getWine(this.searchTerm) con el término de búsqueda actual.

Esta cadena de operadores podría usarse en una búsqueda en tiempo real en una aplicación de catálogo de vinos. Cuando el usuario escribe en el campo de búsqueda (this.searchSubject), se aplica un retraso (debounceTime) para evitar búsquedas excesivas. Luego, se verifica si el término de búsqueda ha cambiado (distinctUntilChanged). Si se produce un cambio, se realiza la búsqueda (switchMap) utilizando el servicio wineService.
