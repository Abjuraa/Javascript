function fibonacci (n){
    if(n === 0 || n ===1){
        return n
    } else {
        //NO RESTA LOS NUMEROS, RESTA LAS POSICIONES
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}
console.log(fibonacci(8))