function tournamentWinner(competitions, results) {

    const score = {} // se crea un objeto para almacenar el puntaje
    let winners = '' // se crea una variable para almacenar el ganador

    for (let i = 0; i < competitions.length; i++) {
        const home = competitions[i][0] // se asigan la primera columna como home
        const away = competitions[i][1] // se asigan la segunda columna como away
        const winningTeam = results[i] === 0 ? away : home // si el resultado es 0, el ganador es el away, de lo contrario el home

        score[winningTeam] = (score[winningTeam] || 0) + 3 // si no existe el ganador, se le suma 3 puntos

        if (!winners ||score[winningTeam] > score[winners]) { // si no existe el ganador o el score del ganador es menor al score del ganador
            winners = winningTeam // se le asigna el ganador
        }
    }
    return winners
}

const competitions = [
    ['JavaScript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'JavaScript']
]

const results = [1, 0, 0]

console.log(tournamentWinner(competitions, results))