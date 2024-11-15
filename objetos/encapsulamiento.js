class LearningPaths {
    constructor({ name, cursos = [] }) {
        this.name = name;
        this.cursos = cursos;
    }
}
class Cursos {
    constructor(name, classes = []) {
        this._name = name;
        this.classes = classes;
    }

    // Getters
    get name() {
        return this._name;
    }
    // El setter
    set name(nuevoNombre) {
        if (nuevoNombre === 'pesimo curso') {
            console.warn('El nombre del curso no es valido');
        } else {
            this._name = nuevoNombre;
        }
    }
}

const html = new Cursos({
    name: "HTML",
    classes: [
        'HTML basico',
        'HTML avanzado',
        'HTML experto'
    ]
})

const css = new Cursos({
    name: 'CSS',
    classes: [
        'CSS basico',
        'CSS avanzado',
        'CSS experto'
    ]
})

const javascript = new Cursos({
    name: 'JAVASCRIPT',
    classes: [
        'JAVASCRIPT basico',
        'JAVASCRIPT avanzado',
        'JAVASCRIPT experto'
    ]
})
const python = new Cursos({
    name: 'PYTHON',
    classes: [
        'PYTHON basico',
        'PYTHON avanzado',
        'PYTHON experto'
    ]
})
const rust = new Cursos({
    name: 'RUST',
    classes: [
        'RUST basico',
        'RUST avanzado',
        'RUST experto'
    ]
})
const sql = new Cursos({
    name: 'SQL',
    classes: [
        'SQL basico',
        'SQL avanzado',
        'SQL experto'
    ]
})
const unity = new Cursos({
    name: 'UNITY',
    classes: [
        'UNITY basico',
        'UNITY avanzado',
        'UNITY experto'
    ]
})
const unreal = new Cursos({
    name: 'UNREAL',
    classes: [
        'UNREAL basico',
        'UNREAL avanzado',
        'UNREAL experto'
    ]
})
const c = new Cursos({
    name: 'C++',
    classes: [
        'C++ basico',
        'C++ avanzado',
        'C++ experto'
    ]
})

const escuelaWeb = new LearningPaths({ name: 'Escuela web', cursos: [html, css, javascript] });
const escuelaData = new LearningPaths({ name: 'Escuela de Data Science', cursos: [python, rust, sql] });
const escuelaVgs = new LearningPaths({ name: 'Escuela de VideoJuegos', cursos: [unity, unreal, c] });

class Estudiante {
    constructor({ name, email, username, twitter = undefined, instagram = undefined, facebook = undefined, approvedCourses = [], learningPaths = [] }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = { twitter, instagram, facebook };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const abjura = new Estudiante({
    name: 'juanito',
    email: 'juanito.com',
    username: 'Abjura',
    twitter: 'abjura',
    learningPaths: [escuelaWeb, escuelaVgs]
})