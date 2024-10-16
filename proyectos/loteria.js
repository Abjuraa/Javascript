const participants = [
    {id: 1, name: 'Jorge', ticketNumber: 1 },    
    {id: 23, name: 'Luis', ticketNumber: 12 },    
    {id: 56, name: 'Kevin', ticketNumber: 45 },    
    {id: 94, name: 'Lili', ticketNumber: 67 }
]

function findWinnerByName (name) {
    const winnerName = participants.find(participant => participant.name == name)
    console.log(winnerName)
    return winnerName || 'No hay ganador con ese nombre'
}

function findWinnerByticketNumber (ticket) {
    const winnerTicket = participants.findIndex(participant => participant.ticketNumber === ticket)
    return winnerTicket !== -1 ? winnerTicket : 'No hay ganador con ese ticket'
}

function displayWinners (winner) {  
    if(winner !== undefined && winner !== null && winner !== 'No hay ganador con ese nombre' && winner !== 'No hay ganador con ese ticket') {
        console.log('winner information', winner)
    } else {
        console.log('winner not found')
    }
}


 const participanteNombre = findWinnerByName('Luis')
 const participanteTicket = findWinnerByticketNumber(12)
 displayWinners(participanteNombre)
 displayWinners(participanteTicket)