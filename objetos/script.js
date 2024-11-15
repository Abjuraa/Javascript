//objeto literal
const natalia = {
    nombre: 'Natalia',
    edad: 20,
    cursosAprobados: ['angular', 'html', 'css'],
    aprobarCursos(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    },
}

//prototipos 
function Student(name, age, cursosAprobados) {
    this.name = name,
        this.age = age,
        this.cursosAprobados = cursosAprobados
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
}

const juanita = new Student('juanita', 20, ['javascript', 'react', 'vue'])

//prototipos con la sintaxis de clases

class Student2 {
    constructor({ name, age, cursosAprobados = [], email }) {
        this.name = name,
            this.age = age,
            this.email = email,
            this.cursosAprobados = cursosAprobados
    }
    aprobarCurso(nuevoCursito) {
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguel = new Student2({ name: 'miguel', age: 20, email: 'miguel.com' })

//prueba Banda de rock

class Banda {
    constructor({ nombre, generos = [] }) {
        this.nombre = nombre;
        this.generos = generos;
        this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
        //Verificar si el integrante ya existe
        const existente = this.integrantes.find(integrante => integrante.instrumento === integranteNuevo.instrumento);

        if (existente) {
            //Si el integrante ya existe
            console.log(`El integrante con el instrumento ${integranteNuevo.instrumento} ya existe`);
        } else {
            //Si el integrante no existe
            this.integrantes.push(integranteNuevo);
            console.log(`${integranteNuevo.nombre} ha sido integrado a la banda con el instrumento ${integranteNuevo.instrumento}`);
        }
    }
}

//Crear clase Integrante
class Integrante {
    constructor({ nombre, instrumento }) {
        this.nombre = nombre;
        this.instrumento = instrumento;
    }
}

const banda = new Banda({ nombre: 'Metallica', generos: ['Metal', 'Rock'] });

banda.agregarIntegrante(new Integrante({ nombre: 'Bryam', instrumento: 'guitarra' }))
banda.agregarIntegrante(new Integrante({ nombre: 'kevin', instrumento: 'bateria' }))
banda.agregarIntegrante(new Integrante({ nombre: 'lincon', instrumento: 'flauta' }))
banda.agregarIntegrante(new Integrante({ nombre: 'Bryam', instrumento: 'piano' }))
banda.agregarIntegrante(new Integrante({ nombre: 'maicol', instrumento: 'guitarra' }))




