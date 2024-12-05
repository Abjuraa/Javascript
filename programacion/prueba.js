function mayorEdad(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad")
    } else {
        console.log("No eres mayor de edad")
    }
}

mayorEdad(90)

const edad = 19

switch (edad) {
    case 17:
        console.log("Eres menor de edad")
        break
    case 18:
        console.log("Tienes 18 años ya eres mayor de edad!!")
        break
    case 19:
        console.log("Ya puedes conducir y salir a fiestas!!")
        break
    default:
        console.log("Tu edad no esta")
        break
}

const frutas = ["Manzana", "Banana", "Naranja"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

frutas.forEach(function (frutas) {
    console.log(frutas)
})

for (let fruta of frutas) {
    console.log(fruta)
}

const edades = [12, 14, 16, 45, 18, 19]
let i = 0

while (i < edades.length) {
    if (edades[i] >= 18) {
        console.log(`La edad ${edades[i]} es mayor de edad`)
    } else {
        console.log(`La edad ${edades[i]} es menor de edad`)
    }

    i++
}

a = 20
b = 0
try {
    c = a / b
    console.log(`El resultado de dividr ${a} por ${b} el resultado es ${c}`)
} catch (error) {
    console.log(error)
}

class Persona {
    constructor(nombre, apellido, edad, altura, peso) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
        this.peso = peso
    }
}

let persona = new Persona('Bryam', 'Castañeda', 20, 1.68, 52)

console.log(persona)



tipo = 0
limite = 61

function validar(tipo, limite) {
    if (tipo == limite) {
        time()
    } else {
        console.log(tipo)
    }
}

function time() {
    for (let i = 0; i < limite; i++) {
        validar(i, limite)
    }
}

time()

for (let i = 0; i < 100; i++) {

    const div3 = i % 3
    const div5 = i % 5
    if (div3 == 0 && div5 == 0) {
        console.log('FizzBuzz')
    } else if (div3 == 0) {
        console.log('Fizz')
    } else if (div5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

function calculadora(num1, num2, operador) {
    let resultado;
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            console.log(resultado)
            break;

        case "-":
            resultado = num1 - num2;
            console.log(resultado)
            break;

        case "*":
            resultado = num1 * num2;
            console.log(resultado)
            break;

        case "/":
            resultado = num1 / num2;
            console.log(resultado)
            break

        default:
            console.log("Debe ingresar todos los datos")
    }
    return resultado
}

calculadora(10, 10, "/");

const numeros = [1, 28, 39, 12, 45, 5, 6, 7, 8, 9, 10, 11, 12]
let max = 0
let min = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) {
        max = numeros[i]
    }
}
console.log(`El numero mayor del array de numeros es ${max}`)

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < min) {
        min = numeros[i]
    }
}
console.log(`El numero menor del array de numeros es ${min}`)




piedra = 1
papel = 2
tijera = 3
let jugador = Math.floor(Math.random() * (tijera - piedra + 1) + piedra)
let pc = Math.floor(Math.random() * (tijera - piedra + 1) + piedra)
console.log(`Jugador juega con ${jugador} y pc juega con ${pc}`)

if (jugador == pc) {
    console.log("Empate")
} else if (jugador = piedra && pc == tijera || jugador == papel && pc == piedra || jugador == tijera && pc == papel) {
    console.log("Ganaste")
} else if (jugador = tijera && pc == piedra || jugador == papel && pc == tijera || jugador == piedra && pc == papel) {
    console.log("Perdiste")
}



//genera un numero random entre el 10 y el 20
min = 10
max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))

function procesarPedido(pedidos) {
    const array = pedidos
    const cliente = array.shift([0])
    array.unshift("bebidas")
    array.push(cliente)

    console.log(array)

}

procesarPedido(["Abjura", "cocacola", "pepsi"])

const autos = ["BMW", "Mercedes", "Audi", "Honda"]

for (let i = 0; i < autos.length; i++) {
    console.log("Bucle for: " +autos[i])
}

for (moviles of autos) {
    console.log("for of: " +  moviles)
}

const objetos = {
    nombre: "Bryam",
    apellido: "Castañeda",
    edad: 20,
    altura: 1.68,
    peso: 52
}

for (propiedades in objetos){
    console.log(propiedades + " " + objetos[propiedades])
}