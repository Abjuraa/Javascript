/*function moneyBox(coins){
    let saveCoins = 0
    saveCoins += coins
    console.log(`MoneyBox: $${saveCoins}`)
}

moneyBox(5)
moneyBox(10)
*/

function moneyBox() {
    let saveCoins = 0
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`)
    }
    return countCoins
}

const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)
myMoneyBox(1)

const moneyBoxAna = moneyBox()
moneyBoxAna(5)
moneyBoxAna(15)

/*------------------------------------------------------------------------------------------------ */
function createPetList() {
    const petList = []
    return function datosMascotas(myPet) {
        if (myPet) {
            petList.push(myPet)
        }
        console.log(petList)
        return petList
    }

}


const pet = createPetList()

pet(['Perro', 'Gato'])
pet(['Perro', 'caballo'])