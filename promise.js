function usuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: 'Jorge', edad: 18 })
            } else {
                reject('Error al encontrar el usuario')
            }
        }, 2000)
    })
}

console.log("Iniciando busqueda de usuario")

usuario(1)
    .then((usuario) => {
        console.log("Los datos del usuario son: ", usuario)
        return usuario.edad
    })
    .then((edad) => {
        console.log("La edad del usuario es: ", edad)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("Proceso terminado")
    })