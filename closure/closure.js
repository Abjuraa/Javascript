function greeting(){
    let userName = 'Ana';

    function displayUserName(){
        return `Hola ${userName}`
    }
    return displayUserName
}

const g = greeting()
console.log(g)
console.log(g())