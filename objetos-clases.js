// class
class Persona {
    constructor (nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    saludo(){
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

const persona = new Persona ('Bryam', 'Castañeda', 20)

persona.saludo()

// function 


function Persona2 (nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.saludo = function () {
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

const persona2 = new Persona2 ('Bryam', 'Castañeda', 20) //instancia de la clase
persona2.saludo()