class Animal {
    constructor (nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido(){
        console.log('Emitiendo sonido')
    }
}

class Perro extends Animal {
    constructor (nombre, tipo, raza){
        super(nombre, tipo)
        this.raza = raza
    }
    emitirSonido(){
        console.log('El perro ladra')
    }
    correr(){
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new Perro('Milo', 'Perro', 'Labrador')
console.log(perro1)

perro1.correr()

// ingresar nuevos metodos al prototype

Perro.prototype.saltar = function () {
    console.log(`EL perro salta muy alto`)
}

//ingresar nuevos metodos en las instancias 

perro1.tomarAgua() = function () {
    console.log("El perro esta tomando agua") 
}