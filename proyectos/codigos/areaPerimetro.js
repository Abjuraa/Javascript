function calcularCuadrado(lado){
    return{
        perimetro: lado * 4,
        area: lado *lado
    }
}

console.log(`Cuadrado: `, calcularCuadrado(5))

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    }
}

console.log(`Triangulo: `, calcularTriangulo(6,6,5,8))


function calcularCirculo(radio){
    const diametro = radio *2
    const  radioAlCuadrado =  Math.pow(radio, 2)

    return{
        circuferencia: diametro * Math.PI ,
        area: radioAlCuadrado * Math.PI
    }
}

console.log(`Circulo: `, calcularCirculo(3))

//calulcar la altura de un tingulo isósceles no equilatero

function alturaTriangulo(lados, base){
    if (lados === base){
        console.log(`Este no es un triangulo isosceles`)
    } else {
      return  Math.sqrt((lados ** 2) - (base ** 2) / 4)
    }
}

console.log(`La altura del triangulo isosceles es de: `, alturaTriangulo(6,6))