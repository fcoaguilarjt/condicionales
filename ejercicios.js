alert("Bienvenido a esta serie de ejercicios, por favor responde en minusculas y con numeros")


//ejercicio 1: Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let q1 = prompt("Ej 1.- ¿Eres bellisimo/a?")

if (q1 === "si")
{
    alert("Ciertamente")
}

else if (q1 === "no")
{
    alert("No te creo")
}

else
{
    alert("No entendi")
}

// ejercicio 2: Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let a = Number(prompt("Ej 2.- Dame un numero")) 

if ( a%2 === 0)
{
    alert( a + " es divisible entre 2")
}

else
{
    alert( a + " no es divisible entre 2")
}

//ejercicio 3: Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let b = Number(prompt("Ej 3.- Dame un numero")) 

if ( b%2 === 0)
{
    alert( b + " es par")
}

else
{
    alert( b + " no es par")
}

//ejercicio 4:  Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let c = Number(prompt("Ej 4.- Dame un numero de cliente")) 

if ( c === 1000)
{
    alert("Ganaste un premio")
}

else
{
    alert("Lo sentimos, sigue participando")
}

//ejercicio 5:  Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let d = Number(prompt("Ej 5.- Dame tu primer numero")) 
let e = Number(prompt("Dame tu segundo numero")) 

if (d<e)
{
    alert(d + " es menor")
}

else
{
    alert(e + " es menor")
}

//ejercicio 6: Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let f = Number(prompt("Ej 6.- Dame tu primer numero")) 
let g = Number(prompt("Dame tu segundo numero")) 
let h = Number(prompt("Dame tu tercer numero")) 

if (f>=g && f>=h)
{
    alert(f + " es mayor")
}

else if(g>=f && g>=h)
{
    alert(g + " es mayor")
}

else 
{
    alert(h + " es mayor")
}

//ejercicio 7: Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt("Ej 7.- Dime un dia de la semana")

if(dia === "lunes")
{
    alert("Animo!!!, Arranca con todo la semana")
}

else if(dia === "viernes")
{
    alert("Ya casi!!! Con actitud de viernes!!!")
}

else if(dia === "sabado" || dia === "domingo")
{
    alert("A descansar y recargar energia!!!")
}

else
{
    alert("A sacar esos pendientes!")
}

//ejercicio 8.- Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10

let nota = Number(prompt("Ej 8.- Dime una calificacion (del 1 al 10)"))

if (nota > 10 || nota < 1)
{
    alert("La calificacion no es un numero valido entre 1 y 10")
}

else if (nota < 6)
{
    alert("Reprobado")
}

else if (nota >= 6 && nota <=8)
{
    alert("Regular")
}

else if (nota === 9)
{
    alert("Bien")
}

else if (nota === 10)
{
    alert("Excelente")
}

/*ejercicio 9: Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

let topping = prompt("Ej 9.- Dime con que topping quieres tu helado para decirte el costo... tenemos de oreo, kitkat y brownie")
const heladoSintopping = 50;
const oreo = 10;
const kitkat = 15;
const brownie = 20;
let total;

if (topping == "oreo")
{
    total = heladoSintopping + oreo;
    alert("El total de tu helado con topping de oreo es de " + total)
}

else if (topping == "kitkat")
{
    total = heladoSintopping + kitkat;
    alert("El total de tu helado con topping de kitkat es de " + total)
}

else if (topping == "brownie")
{
    total = heladoSintopping + brownie;
    alert("El total de tu helado con topping de brownie es de " + total)
}

else
{
    alert("No tenemos este topping, lo sentimos... el total de tu helado es " + heladoSintopping)
}

/* ejercicio 10.- 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

let programa = prompt("Ej 10.- Dime cual programa deseas tomar para calcular tu pago mensual, tenemos los siguientes programas: course, carrera y master")
let beca = prompt("¿Cuentas con alguna beca? Aceptamos las siguientes: facebook, google y jesua")
const course = 4999
const carrera = 3999;
const master = 2999;
const becaFace = 0.8;
const becaGoogle = 0.85;
const becaJesua = 0.50;
let costoTotal;
let descuento;

if (programa == "course")
{
    if (beca == "facebook")
    {
        descuento = course * becaFace;
        costoTotal = descuento * 2;
        alert("Por el programa Course deberas pagar " + descuento + " al mes, por un periodo de 2 meses dando un total de " + costoTotal)
    }
    else if (beca == "google")
    {
        descuento = course * becaGoogle;
        costoTotal = descuento * 2;
        alert("Por el programa Course deberas pagar " + descuento + " al mes, por un periodo de 2 meses dando un total de " + costoTotal)
    }
    else if(beca == "jesua")
    {
        descuento = course * becaJesua;
        costoTotal = descuento * 2;
        alert("Por el programa Course deberas pagar " + descuento + " al mes, por un periodo de 2 meses dando un total de " + costoTotal)
    }
}

else if (programa == "carrera")
{
    if (beca == "facebook")
    {
        descuento = carrera * becaFace;
        costoTotal = descuento * 6;
        alert("Por el programa Carrera deberas pagar " + descuento + " al mes, por un periodo de 6 meses dando un total de " + costoTotal)
    }
    else if (beca == "google")
    {
        descuento = carrera * becaGoogle;
        costoTotal = descuento * 6;
        alert("Por el programa Carrera deberas pagar " + descuento + " al mes, por un periodo de 6 meses dando un total de " + costoTotal)
    }
    else if(beca == "jesua")
    {
        descuento = carrera * becaJesua;
        costoTotal = descuento * 6;
        alert("Por el programa Carrera deberas pagar " + descuento + " al mes, por un periodo de 6 meses dando un total de " + costoTotal)
    }
}

else if (programa == "master")
{
    if (beca == "facebook")
    {
        descuento = master * becaFace;
        costoTotal = descuento * 12;
        alert("Por el programa Master deberas pagar " + descuento + " al mes, por un periodo de 12 meses dando un total de " + costoTotal)
    }
    else if (beca == "google")
    {
        descuento = master * becaGoogle;
        costoTotal = descuento * 12;
        alert("Por el programa Master deberas pagar " + descuento + " al mes, por un periodo de 12 meses dando un total de " + costoTotal)
    }
    else if(beca == "jesua")
    {
        descuento = master * becaJesua;
        costoTotal = descuento * 12;
        alert("Por el programa Master deberas pagar " + descuento + " al mes, por un periodo de 12 meses dando un total de " + costoTotal)
    }
}

/* ejercicio 11.- Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/

let vehiculo = prompt("Ej 11.- Dime tu tipo de vehiculo para calcular el total a pagar... coche, moto o autobus")
let kms = Number(prompt("Cuantos kilometros recorriste?"))
let litros = Number(prompt("Cuantos litros de gasolina usaste?"))

const coche = 0.2;
const moto = 0.1;
const autobus = 0.5;

let precioTotal;

if (vehiculo == "coche")
{
    if (litros > 0 && litros < 100)
    {
        precioTotal = (coche * kms) + 5;
        alert("El costo total por el uso del coche es de " + precioTotal)
    }

    else if (litros >= 100)
    {
        precioTotal = (coche * kms) + 10;
        alert("El costo total por el uso del coche es de " + precioTotal)
    }
}

else if (vehiculo == "moto")
{
    if (litros > 0 && litros < 100)
    {
        precioTotal = (moto * kms) + 5;
        alert("El costo total por el uso de la moto es de " + precioTotal)
    }

    else if (litros >= 100)
    {
        precioTotal = (moto * kms) + 10;
        alert("El costo total por el uso de la moto es de " + precioTotal)
    }
}

else if (vehiculo == "autobus")
{
    if (litros > 0 && litros < 100)
    {
        precioTotal = (autobus * kms) + 5;
        alert("El costo total por el uso del autobus es de " + precioTotal)
    }

    else if (litros >= 100)
    {
        precioTotal = (autobus * kms) + 10;
        alert("El costo total por el uso del autobus es de " + precioTotal)
    }
}

alert("Llegaste al final de los ejercicios!!!")
