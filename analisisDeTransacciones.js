const transaction = [
    {id: 1, description: 'Grocery Shooping', amount: -50},
    {id: 2, description: 'Salary Deposit', amount: 2000},
    {id: 3, description: 'Utilies Bill Payment', amount: -100},
    {id: 4, description: 'Online Purchase', amount: -30},
]

// Calculate total balance
const totalBalance = transaction.reduce((acc, curr) => acc + curr.amount, 0)
console.log('Total balance: ',totalBalance)

// Calculate largest transaction (Income or Expense)
const largestTransaction = transaction.reduce((maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transaction[0])
console.log('Largest transaction: ', largestTransaction)

// Filter Purchase transactions
const purchaseTransactions = transaction.filter(value => value.amount < 0)
console.log('Purchase transactions: ', purchaseTransactions)

// Find a Transaction by Description

function specificTransaction (desc){
    return transaction.find(mensage => mensage.description === desc)
}

console.log(specificTransaction('Salary Deposit'))

// Find the index of a transaction by amount

const indexIdTransaction = transaction.findIndex(value => value.amount === -30)
console.log(indexIdTransaction)

// Upadte transaction descriptions
transaction.forEach(transaction => {
    if(transaction.amount < 0){
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
});
console.log('Update transaction: ', transaction)