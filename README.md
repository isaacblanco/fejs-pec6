# PEC 6 - Front end Javascript

- Login UOC: isaacblanco
- Nombre y apellidos del alumno: isaac blanco

URL git hub: https://github.com/isaacblanco/fejs-pec6.git

## Breve descripción

Se ha reciclado el ejercicio del ecommerce anterior en el estado en que se entrego.

### Ejercicio 2

Se ha creado el servicio en app/services/article-service

El article-new-reactive lo he traido del proyecto anterior.

### Ejercicio 4

Recordatorio:

```js
npm i --> intalar
npm start --> ejecutar el servidor
```

El servidor funciono a la primera: http://localhost:3000/api/articles

```json
{
        "id": 1,
        "name": "Article1",
        "imageUrl": "assets/images/article1.jpg",
        "price": 19.95,
        "isOnSale": false,
        "quantityInCart": 0
    },
    {
        "id": 2,
        "name": "Article2",
        "imageUrl": "",
        "price": 6.15,
        "isOnSale": true,
        "quantityInCart": 0
    },
    {
        "id": 3,
        "name": "Article3",
        "imageUrl": "assets/images/article3.jpg",
        "price": 31.9,
        "isOnSale": false,
        "quantityInCart": 0
    }
]
```

### Ejercicio 5

Entiendo que estamos aprendiendo, en el caso anterior para la moneda habia usado:
{{ article.price | currency : "EUR" : true }}

Que más o menos, hacia la misma labor.

## Dificultades

Como siempre mis problemas de permisos en el mac, que me bloquea todo y tengo que estar usando el sudo continuamente.

En el ejercicio 4, el filtrado por pulsación de tecla asociado al nombre dío algo de guerra.

## Mejoras

Si no se pide, no se hace.

## Notas

Se me ha pasado prácticamente el usar el control de versiones, no obstante, el proyecto se encuentra en https://github.com/isaacblanco/fejs-pec6
