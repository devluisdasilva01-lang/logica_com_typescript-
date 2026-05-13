const tela = require("readline-sync")

const v1:number = Number( tela.question('Informe o primeiro valor: '))
const v2:number = Number(tela.question('Informe o segundo valor: '))

const resultado:number = v1 + v2

console.log("A soma do "+ v1 +" + "+ v2 +" = "+resultado)
