const calificaciones = [80, 50, 12, 90, 100, 50, 80, 90, 100, 70];

const graduado = calificaciones.filter((nota => nota >= 70))

const promedio = graduado.reduce((sum, notas) => sum + notas, 0) / calificaciones.length

console.log(`Las notas son: ${calificaciones}`)
console.log(`Las notas superiores a 70 son: ${graduado}`)
console.log(`El promedio en total es de: ${promedio}`)