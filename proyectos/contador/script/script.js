let buttonSum = document.querySelector('.button-plus')
let buttonMin = document.querySelector('.button-min')
let number = document.querySelector('.numero')


function calcular(){
    buttonSum.addEventListener("click", () => {
        let currentValue = parseInt(number.textContent)
        currentValue ++
        number.textContent = currentValue
    })

    buttonMin.addEventListener("click", () =>{
        let currentValue = parseInt(number.textContent)
        currentValue --
        if (currentValue <= 0){
            currentValue = 0
        } 
        number.textContent =  currentValue
        
    })
}
calcular()
