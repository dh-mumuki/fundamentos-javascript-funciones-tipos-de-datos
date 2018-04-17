Como acabamos de ver, en JavaScript existen al menos números, strings y booleanos.

¿Y para qué sirve almacenar datos en variables?
Bueno, en principio lo que podemos hacer con estos datos es realizar operaciones. 
Por ejemplo:

```javascript
var dni = 35546708;
var siguienteDni = dni + 1;
console.log(siguienteDni) 
// El resultado sería: 35546709
```
¿Y que pasa si sumo textos?

```javascript
var nombre = "Digital";
var apellido = "House";
console.log(nombre + " " + apellido) 
// El resultado sería: "Digital House"
```
¿Y que pasa si sumo números con textos?

```javascript
var calle = "Monroe";
var numero = 860;
console.log(calle + " " + numero) 
// El resultado sería: "Monroe 860"
```

> Veamos si se entiende: **Declará y asigná** dos variables, una con tu `nombre` y la otra con tu `apellido`, y luego en la consola usando estas variables mostrá todo junto. Ejemplo: “Elon Musk”. Tené en cuenta el espacio!