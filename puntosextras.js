var precio_base = 2000; // representa salario base 
var recargo_edad = 0 // guardad cargo por edad 
var recargo_conyuge = 0 //guardar cargo cargo por conyuge
var recargo_hijos = 0 //
var total = 0

//variable para saber si sale del ciclo
var salir = "";
while (salir.toLowerCase() != "salir") {
    var edad = prompt("ingrese su edad"); //(se utiliza el prompt para que el usuario pueda ingresar la edad)  variable que  almacena la edad 

    if (edad >= 18 && edad <= 24) {
        recargo_edad = precio_base * 0.1; // coloco la variable precio base y le sumo el valor actul + la variable por el 0.1
    }
    else if (edad >= 25 && edad <= 49) {
        recargo_edad = precio_base * 0.2;
    }
    else if (edad >= 50) {
        recargo_edad = precio_base * 0.3;
    }

    var conyuge = prompt("tiene conyuge ")
    if (conyuge.toLowerCase() == "si") {//  se ejecuta la variable tolowercas paso todo a miniscula 
        var edad_esposa = prompt("ingrese la edad de su esposa") // se le indica con un prompt que ingrese la cantidad de la conyuge

        if (edad_esposa >= 18 && edad_esposa <= 24) {
            recargo_edad = recargo_edad + precio_base * 0.1; // coloco la variable precio base y le sumo el valor actul + la variable por el 0.1
        }
        else if (edad_esposa >= 25 && edad_esposa <= 49) {
            recargo_edad = recargo_edad + precio_base * 0.2;
        }
        else {
            recargo_edad = recargo_edad + precio_base * 0.3;
        }
        recargo_conyuge = precio_base * 0.2;
    }

    var cantidad_hijos = prompt("cuantos hijos tiene")

    recargo_hijos = (precio_base * 0.2) * parseInt(cantidad_hijos)

var propiedades = prompt("precio de la propiedad")
var recargo_propiedades = 0
recargo_propiedades = propiedades * 0.35

var salario = prompt("ingrese su salario")
var recargo_salario = 0
recargo_salario = salario * 0.05


total = precio_base + recargo_edad + recargo_conyuge + recargo_hijos + recargo_propiedades + recargo_salario
console.log(total)
console.log("Recargo Edad", recargo_edad);
console.log("Recargo Conyuge", recargo_conyuge);
console.log("Recargo Hijos", recargo_hijos);
console.log("Recargo propiedades", recargo_propiedades)
console.log("Recargo salario", recargo_salario)

salir = prompt("Dijite salir si desea salir del programa");
}




