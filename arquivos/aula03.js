'use strict'

function teste(){
    let nome="Giliarde"
    if(true){
        console.log("Dentro do IF do teste: " + nome)
    }
    console.log("Dentro do teste: " + nome)
}

teste()

console.log("Fora do teste: " + nome)

/*
    var - o valor pode ser modificado a qualquer momento, e pode ser utilizado mesmo nao estando no mesmo bloco.

    let - o valor tambem pode ser modificado, mas ele é restrito sempre ao mesmo bloco apenas que foi declarado.

    const - o valor nao pode ser alterado de forma alguma, dá erro na execução
*/