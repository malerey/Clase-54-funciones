// 1. las funciones son datos 
// 1. a. los puedo asignar a variables
// 1. b. los puedo utilizar en mi codigo como a cualquier dato 

// 2. Las funciones siempre retornan un dato
// 2. a. Si no lo escribo explicitamente, el dato retornado sera "undefined"
// 2. b. Si no hay llaves depsues de la flecha, se retorna lo que viene despues de la flecha 
// (no se deben poner llaves)
// 2. c. Una funcion puede retornar cualquier expresion, por mas larga que sea. 
// 2. d. Los parametros pueden usar el mismo nombre que una variable declarada
// fuera de la funcion, pero en caso de usar ese nombre dentro de la funcion
// nos estaremos refiriendo a los parametros y no a la variable. 
// O mejor: no repitan nombres de variables en sus parametros. 

// 3. Las funciones hacen que nuestro codigo sea mejor
// 3. a. Mas breve: una funcion puede hacer el trabajo de muchas lineas de codigo
// 3. b. Mas claro: no necesito ver lo que hace una funcion linea por linea, 
// sino entender a grandes rasgos qué hace
// 3. c. Mas organizado: es mas facil encontrar la fuente de algun error 


calculos = (num1, num2, operacion) => {
  let resultado = 0;
  if (operacion === "SUMAR") {
    resultado = Number(num1) + Number(num2);
  }
  else if (operacion === "RESTAR") {
    resultado = Number(num1) - Number(num2);
  }
  else if (operacion === "DIVIDIR") {
    resultado = Number(num1) / Number(num2);
  }
  else if (operacion === "MULTIPLICAR") {
    resultado = Number(num1) * Number(num2);
  }
  else if (operacion === "POTENCIAS") {
    resultado = Number(num1) ** Number(num2);
  }
  return resultado
}

const realizarOperacion = (operacion) => {
  let num1 = prompt('primer numero');
  let num2 = prompt('segundo numero');
  
  let resultado = calculos(num1, num2, operacion)


  if (resultado != 0 && !resultado) {
    return "Ingresaste un dato invalido"
  }
  return resultado
}


alert('Bienvenido a una calculadora horrible');

let operacion = '';

while (operacion != 'SALIR') {
  operacion = prompt(`Indique que operacion desea realizar
  SUMAR
  RESTAR
  DIVIDIR
  MULTIPLICAR
  POTENCIAS
  SALIR
  `);

    if (operacion === "SUMAR" ||
    operacion === "RESTAR" ||
    operacion === "DIVIDIR" ||
    operacion === "MULTIPLICAR" ||
    operacion === "POTENCIAS") {
    alert(`El resultado es ${realizarOperacion(operacion)}`);
    }
}
