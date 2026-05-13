// Condicionais se(if)
const tela = require("readline-sync")

const n1:number = Number(tela.question("Informe sua primeira nota: "))
const n2:number = Number(tela.question("Informe sua segunda nota: "))
const n3:number = Number(tela.question("Informe sua terceira nota: "))

const media = (n1+n2+n3)/3 

if(media >= 7 ){
  console.log("Sua media é de "+ media.toFixed(2) + "\n" + "Sua situação: APROVADO!")
}
else{
  console.log("Sua media é de "+ media.toFixed(2) + "\n" +"Sua situação: REPROVADO!")
}
