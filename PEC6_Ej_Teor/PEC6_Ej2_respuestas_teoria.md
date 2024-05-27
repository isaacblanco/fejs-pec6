# PEC 6 - PREGUNTA 2 - Teoria


## a. ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule? 

Referencia: https://angular.io/guide/providers

**@Injectable:** este decorador se utiliza para marcar una clase como un servicio inyectable. Los servicios son componentes reutilizables que proporcionan funcionalidad específica a lo largo de la aplicación. Cuando aplicas @Injectable a una clase, Angular puede inyectar instancias de esa clase en otros componentes o servicios. Los servicios decorados con @Injectable se registran en el inyector de dependencias y están disponibles para su uso en toda la aplicación.
**@NgModule:** el NgModule es una clase marcada por el decorador @NgModule. Representa un módulo en Angular y se utiliza para organizar componentes, directivas, pipes y servicios relacionados. Los módulos agrupan cosas similares juntas. Además de organizar, los NgModules también configuran el inyector y el compilador. Pueden declarar componentes, importar otros módulos y proporcionar servicios. El módulo raíz (AppModule) es esencial para iniciar la aplicación, y otros módulos pueden extender la funcionalidad de la aplicación.

## b. ¿Qué otras opciones admiten el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones?

Referencia: https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb

**providedIn: 'root':** con esta configuración, el servicio se proporciona a nivel de aplicación. Esto significa que una única instancia del servicio se comparte en toda la aplicación. Es útil para servicios globales o que deben mantener un estado compartido.
**providedIn: 'any':** esta opción permite que el servicio se proporcione en cualquier módulo. Cada módulo tendrá su propia instancia del servicio. Útil cuando deseas limitar el alcance del servicio a un módulo específico.
**providedIn: SomeModule:** se puedes especifica un módulo específico (por ejemplo, providedIn: SharedModule) para proporcionar el servicio solo en ese módulo. Útil cuando deseas encapsular funcionalidades en un módulo específico.