let primeiroNumero = Number(prompt("Insina o primeiro número"))
let segundoNumero = Number(prompt("Insina o segundo número"))

function soma (n1,n2){
    let somando = n1 + n2
    return somando
}
console.log(`Resultado da soma dos números informados é: ${soma(primeiroNumero, segundoNumero)}`)

function subtracao (n1,n2){
    let subtraindo = n1 - n2
    return subtraindo
}
console.log(`Resultado da subtração dos números informados é: ${subtracao(primeiroNumero, segundoNumero)}`)

function multiplicacao (n1,n2){
    let multiplicando = n1 * n2
    return multiplicando
}
console.log(`Resultado da multiplicação dos números informados é: ${multiplicacao(primeiroNumero, segundoNumero)}`)

function divisao (n1,n2){
    let dividindo = n1 / n2
    return dividindo
}
console.log(`Resultado da divisão dos números informados é: ${divisao(primeiroNumero, segundoNumero)}`)