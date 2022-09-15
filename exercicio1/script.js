//a)

const seuNome = (nome) => {
    console.log(`Olá, ${nome}`)
}
seuNome("Aureana")

//Arrow function  ... a seta 

//b)

const tabuada = (num)=>{
    let arrayNovo = [1,2,3,4,5,6,7,8,9,10]
    for (let i of arrayNovo){
        let tabuadaSeis = num*i 
        console.log(tabuadaSeis)
    }
}
tabuada(6)

//c)
// Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

const tabuada2 = function (num2){
    let arrayNovo = [1,2,3,4,5,6,7,8,9,10]
    for (let i of arrayNovo){
        let tabuadaSeis = num2*i 
        console.log(tabuadaSeis)
    }
}
tabuada(6)