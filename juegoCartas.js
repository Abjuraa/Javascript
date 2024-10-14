const cartas = ["♠", "♥", "♦", "♣","♠", "♥", "♦", "♣","♠", "♥", "♦", "♣","♠", "♥", "♦", "♣"]

function shuffle(){
    for (let i = cartas.length - 1; i > 0; i--){ //Obtiene el tamaño del array pero de ultimo al primero
        const j = Math.floor(Math.random() * (i + 1)); //Genera un número aleatorio entre 0 y i
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]] //Intercambia los valores en el array original
    }
}

function dealCards(numCard) {
    const dealCards = cartas.splice(0, numCard) // Elimina la cantidad de elementos del array con las cartas ya en aleatorio
    return dealCards
}

shuffle() // Baraja las cartas

const player1 = dealCards(4) // Obtiene las primeras 4 cartas
const player2 = dealCards(4) // Obtiene las primeras 4 cartas
const player3 = dealCards(4) // Obtiene las primeras 4 cartas

console.log('Player 1', player1) //Player 1 [ '♥', '♠', '♣', '♥' ]
console.log('Player 2', player2) //Player 2 [ '♣', '♠', '♦', '♦' ]
console.log('Player 3', player3) //Player 3 [ '♥', '♥', '♠', '♣' ]