import readline = require('readline-sync')
console.clear()

const calc = require('./calculadora')
let loop: boolean = true 
do{
  console.log("===============CALCULADORA==================")
  const opc:number = readline.questionInt("1 - SOMAR\n2 - SUBTRAIR\n3 - MULTIPLICAR\n4 - DIVIDR\n")
  const numr1:number = readline.questionInt("Informe o primeiro Número: ")
  const numr2:number = readline.questionInt("Informe o segundo Número: ")

  switch(opc){
    case 1: 
        console.log(`A soma de ${numr1} + ${numr2} = ${calc.somar(numr1, numr2)}`)
    break 
    case 2:
        console.log(`A subtração de ${numr1} + ${numr2} = ${calc.subtrair(numr1, numr2)}`) 
    break
    case 3: 
        console.log(`A soma de ${numr1} + ${numr2} = ${calc.multiplicar(numr1, numr2)}`)
    break
    case 4:
        console.log(`A soma de ${numr1} + ${numr2} = ${calc.dividir(numr1, numr2)}`)
    break
    default: 
        console.log("INFORME UM NÚMERO ENTRE 1 - 4!")
    break 
  }
  const stop:number = readline.questionInt("Deseja realizar outro calculo? 1 - Sim || 2 - Não\n")
  loop = stop !==2 ? true : false
}while(loop) 
