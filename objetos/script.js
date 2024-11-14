//objeto literal
const natalia = {
    nombre: 'Natalia',
    edad: 20,
    cursosAprobados: ['angular', 'html', 'css'],
    aprobarCursos(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    },
}

//prototipos 
function Student(name, age, cursosAprobados) {
    this.name = name,
    this.age = age,
    this.cursosAprobados = cursosAprobados
}

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
}

const juanita = new Student('juanita', 20, ['javascript', 'react', 'vue'])

//prototipos con la sintaxis de clases

class Student2{
    constructor({name, age, cursosAprobados = [], email}){
        this.name = name,
        this.age = age,
        this.email = email,
        this.cursosAprobados = cursosAprobados
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguel = new Student2({name:'miguel', age:20, email: 'miguel.com'})   

//prueba

class LearningPaths{
    constructor({name, cursos = []}){
        this.name = name;
        this.cursos = cursos;
    }
}

const escuelaWeb = new LearningPaths({name: 'Escuela web', cursos: ["HTML", 'CSS', 'JavaScript']});
const escuelaData = new LearningPaths({name: 'Escuela de Data Science', cursos: ["Python", 'R', 'SQL']});
const escuelaVgs = new LearningPaths({name: 'Escuela de VideoJuegos', cursos: ["Unity", 'Unreal', 'C++']});

class Estudiante{
    constructor({name, email, username, twitter = undefined, instagram = undefined, facebook = undefined, approvedCourses = [], learningPaths = []}){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = { twitter, instagram, facebook };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juanito = new Estudiante({
    name: 'juanito',
    email: 'juanito.com',
    username: 'Abjura',
    twitter: 'abjura',
    learningPaths: [escuelaWeb, escuelaVgs]
})