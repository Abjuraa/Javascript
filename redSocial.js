/*
1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y 
contraseña son correctos.
3. Si el usuario y la contraseña son correctos, el sistema
debe mostrar un mensaje de bienvenida y mostrar el timeline
del usuario.
4. Si el usuario o la contraseña son incorrectos, el sistema
debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

const userDatabase = [
    {
        username: 'andres',
        password: '123'
    },
    {
        username: 'caro',
        password: '456'
    },
    {
        username: 'mariana',
        password: '789'
    }
]

const usersTimeLine = [
    {
        username: 'Estefany',
        timeline: 'Me encanta Javascript'
    },
    {
        username: 'Oscar',
        timeline: 'Programar es genial'
    },
    {
        username: 'Mariana',
        timeline: 'Me encanta el té'
    },
    {
        username: 'Andres',
        timeline: 'Estoy cansado, quiero dormir'
    }
]

const username = prompt('Ingresa tu usuario')
const password = prompt('Ingresa tu contraseña')

function usuarioExistente (username, password) {
    for (let i = 0; i < userDatabase.length; i++){
        if (userDatabase[i].username === username && userDatabase[i].password === password){
            return true
        }
    }
    return false
}

function singIn (username, password){
    if(usuarioExistente(username, password)){
        alert(`Bienvenido a tu cuenta ${username}`)
        console.log(usersTimeLine)
    } else{
        alert('Credenciales incorrectas')
    }
} 
singIn(username, password)


const numeroEntero = 3
console.log(!!numeroEntero)