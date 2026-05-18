import readline = require('readline-sync')

console.clear() 

let loop:boolean = true
let preco:number = 0 
let valores:number[] = []

while(loop){
  console.log("Combo para lanche: ")

  const opc:string = readline.question("1 - Coca pet com Bomba\n2 - Guarana pet com Bomba\n3 - Bolo com Café\n4 - Somente Café\n")

  switch(opc){
    case "1":
      console.log("O combo 1 custa R$ 10,50")
      preco = 10.5
      valores.push(preco)
    break
    case "2":
      console.log("O combo 2 custa R$ 10,00")
      preco = 10
      valores.push(preco)
    break
    case "3":
      console.log("O combo 3 custa R$ 7,50")
      preco = 7.5
      valores.push(preco)
    break
    case "4":
      console.log("O combo 4 custa R$ 2,50")
      preco = 2.5
      valores.push(preco)
    break
    default:
      console.log("Ops! Opção invalida informe número de 1 a 4")
    break
  }

  const stop = readline.questionInt("Deseja alog a mais? 1 - Sim | 2 - Não\n ")
  loop = stop !== 2 ? true : false

  let total = 0

  for(let i = 0; i < valores.length; i++){
    total += valores[i]     
  }

  console.log(`Você selecionou ${valores.length} intem(ns) seu total em R$ ${total.toFixed(2)}`)
}
