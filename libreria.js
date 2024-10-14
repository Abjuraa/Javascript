/*
Crear un programa que simule un stack usando los metodos push y pop. El stack debe guardar una coleccion de libros. El usuario puede realizar las siguientes acciones:
- Agregar un libro al tope del stack
- Sacar un libro del tope del stack
- Mostrar todos los libros

Se debe implementar un loop que permita al usuario realizar estas acciones hasta que decida salir.
*/

const library = []

const ADD_BOOK = 'add'
const REMOVE_BOOK = 'remove'
const VIEW_BOOKS = 'view'

function viewBook () {
    console.log('Los libros que hay disponibles son:', library)
}

function libraryStantion(action, newBook) {
    switch(action) {
        case ADD_BOOK:
            library.push(newBook)
            //console.log(`Se añadio un nuevo libro '${newBook}'`)
            break;

        case REMOVE_BOOK:
            library.pop();
            console.log('Se ha eliminado un libro')
            break;

        case VIEW_BOOKS:
            viewBook()
            break;
    }
}

libraryStantion(ADD_BOOK, 'Harry Potter')
libraryStantion(ADD_BOOK, 'Cien años de soledad')
libraryStantion(ADD_BOOK, 'El principito')
libraryStantion(ADD_BOOK, 'El senor de los anillos')
libraryStantion(REMOVE_BOOK)
libraryStantion(VIEW_BOOKS)
