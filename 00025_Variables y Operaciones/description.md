Vimos como declarar una variable y asignarle un valor, y probablemente ahora te preguntes ¿Y para qué sirve almacenar datos en variables?.

Las variables nos permiten reutilizar el dato asignado en la misma con solo invocar su nombre.

```javascript
var unNumero = 124;
console.log(unNumero); 
// Podemos usar console.log para imprimir el valor que tiene asignado unNumero. Su resultado será 124.
```

También algo muy importante, así como podemos hacer operaciones matemáticas como sumar (+) o restar (-) números podemos hacer lo mismo con las variables que las referencien.

Por ejemplo:

```javascript
var unNumero = 124;
var siguienteNumero = unNumero + 1;
console.log(siguienteNumero); 
// Se imprimirá por pantalla el valor que tiene asignado siguienteNumero que será 125.
```

> Veamos si se entiende: **Declará y asigná** dos variables, `numeroA` y `numeroB`, y luego en las variables `resultadoSuma`, `resultadoResta`, `resultadoMultiplicacion` y `resultadoDivision` almacená el resultado que corresponda utilizando variables.
Luego puedes mostrar los resultados imprimiendo cada uno de ellos, utilizando console.log().  
