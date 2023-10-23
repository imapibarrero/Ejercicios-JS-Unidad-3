/*15. Se le solicita al usuario que ingrese un número. Realice un programa para informar 
si el número es cero, par o impar
*/

var numero_usuario = parseFloat(prompt("Ingrese un número"));

if (numero_usuario === 0) {
    alert("el número ingresado es cero");
}

else if (numero_usuario % 2 === 0) {
    alert("el número ingresado es par");
}

else {
    alert("el número ingresado es impar");
}
/*

16. Se le solicita al usuario que ingrese un número. Realice un programa para informar 
si el número es múltiplo de 3.
*/
var mult_3 = parseFloat(prompt("Ingrese un número"));

if (mult_3 % 3 === 0) {
    alert("el número ingresado es múltiplo de 3");
}

else { alert("el número ingresado no es múltiplo de 3") };
/*
7. Se le solicita al usuario que ingrese una letra. Realice el algoritmo para informar si 
el valor ingresado es una vocal.
*/
var es_vocal = prompt("Ingrese una letra").toLowerCase();
if (es_vocal === "a" || es_vocal === "e"|| es_vocal === "i"|| es_vocal === "o"||es_vocal === "u" ) {
alert  ("la letra ingresada es una vocal") }
     else { (alert("la letra ingresada no es una vocal"));}

/*
18. Se le solicita al usuario que ingrese los extremos de un rango numérico y un 
número. Realice un programa para informar si el número está dentro del rango.
*/

var inferior = parseFloat(prompt("Ingrese el extremo inferior del rango numérico"));
var superior = parseFloat(prompt("Ingrese el extremo superior del rango numérico.  Recuerde que la diferencia entre superior e inferior debe ser mayor o igual 5"));

if (superior - inferior >= 5) {
    var en_rango = parseFloat(prompt("Ingrese el número a considerar mayor o menor"));
    if (en_rango <= superior && en_rango >= inferior) {
        alert("El número ingresado está dentro del rango indicado.");
    } else {
        alert("El número ingresado no está dentro del rango indicado.");
    }
} else {
    alert("El rango indicado es inferior a 5.");
}
/*
19. Se le solicita al usuario que ingrese dos números y un operador (+, -, *, /). Realice 
un programa para calcular e informar la operación solicitada entre ambos números
*/


    var abc = parseFloat(prompt("Ingrese un número"));
    var cba = parseFloat(prompt("Ingrese otro número"));
    var operador = prompt("Ingrese una operación");
    
    if (operador === "+") {
        var suma = abc + cba;
        alert("El resultado de la suma es: " + suma);
    } else if (operador === "-") {
        var resta = abc - cba;
        alert("El resultado de la resta es: " + resta);
    } else if (operador === "*") {
        var multip = abc * cba;
        alert("El resultado de la multiplicación es: " + multip);
    } else if (operador === "/") {
        var division = abc / cba;
        alert("El resultado de la división es: " + division);
    } else {
        alert("Operador no válido. Por favor, ingrese +, -, *, o /.");
    }
/*
20. Se le solicita al usuario que ingrese los tres lados de un triángulo. Realice el 
algoritmo para informar si el triángulo es equilátero, isósceles o escaleno
  */  



    alert("Ingrese los lados de un triángulo");
var lado1 = parseFloat(prompt("Ingrese el primer lado"));
var lado2 = parseFloat(prompt("Ingrese el segundo lado"));
var lado3 = parseFloat(prompt("Ingrese el tercer lado"));

if (lado1 == lado2 && lado2 == lado3) {
    alert("El triángulo es equilátero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    alert("El triángulo es isósceles");
} else {
    alert("El triángulo es escaleno");
}

/*21. Realizar un sistema para el cálculo de sueldo de una empresa. Se le solicita al 
usuario que ingrese la categoría a la que pertenece que define el sueldo básico 
mensual (categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000) y las 
horas extras. Se sabe que:

a. Si es de la categoría 1 y trabajó más de 20 horas extra, suma un bono de u$s 500 
más.
b. Si es de la categoría 3 y trabajó más de 30 horas extra, suma un bono de u$s 1000 
más.
Realice un programa para calcular e informar el sueldo mensual del empleado, 
indicando si su sueldo supera o no los u$s 4000.*/

alert("Cálculo de sueldo mensual según la categoría y el número de horas extras");
alert("categoría 1: u$s 2000, categoría 2: u$s 3000, categoría 3: u$s 4000")
let cat = parseFloat(prompt("Ingrese su categoría: 1, 2 o 3"));
let ext = parseFloat(prompt("Ingrese el número de horas extras"));
if (cat == 12 && ext > 20) {
    sueldo = (2000+(2000*ext/180)+500);
} else if (cat == 1 && ext <= 20) {
    sueldo = (2000+(2000*ext/180));
} else if (cat == 2) {
    sueldo = (3000+(3000*ext/180));
} else if (cat == 3 && ext > 180){
    sueldo = (4000+(4000*ext/180)+1000);
} else {
    sueldo = (4000+(4000*ext/180));
}

prompt("Su sueldo de este mes es: " + sueldo);
if (sueldo >= 4000) {
    alert("Su sueldo de este mes supera los u$s 4000");
} else{
    alert("Su sueldo es inferior a u$s 4000")
}

