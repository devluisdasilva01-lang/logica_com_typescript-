const tela = require("readline-sync")
 
const nome:string = tela.question("Qual é o seu nome? ")
const ano_nasc:number = Number(tela.question('Qual o ano de seu nascmento? '))
const idade:number = Number( 2026 - ano_nasc) 

console.log("Olá "+ nome +" a sua Idade é "+ idade +" anos.")

