El verdadero poder de los Boolean es que pueden surgir al hacer comparaciones de distintos valores con algunos operadores matemáticos.

Por ejemplo sabemos que si le preguntamos a alguien "¿2 es mayor a 1?" la persona nos va a decir "Si es verdadero, 2 es mayor a 1", lo mismo pasa en JavaScript cuando escribimos lo siguiente:

```javascript
console.log(2 > 1) // Esto imprimirá por pantalla "true"
```

Esto quiere decir que "2 > 1" tiene un valor de verdadero. También podriamos haber escrito el mismo codigo de la siguiente manera: 

```javascript
var valorDeVerdad = 2 > 1; //Como vimos 2 > 1 retorna un valor de verdad y se lo asignamos a una variable
console.log(valorDeVerdad) // Esto imprimirá por pantalla "true"
```

Y si le preguntamos a alguien "¿2 es igual a 1?" la persona nos va a decir "Eso es falso, 2 no es igual 1", lo mismo pasa en JavaScript cuando escribimos lo siguiente:

```javascript
console.log(2 == 1) // Esto imprimirá por pantalla "false"
```