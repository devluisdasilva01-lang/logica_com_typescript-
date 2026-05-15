import readline = require('readline-sync')

console.clear()

console.log("!!!Impar ou Par!!!")
const nmr:number = readline.questionInt("Informe um número: ")

if(nmr % 2 === 0){
  console.log("Par!")
} else{
  console.log("Impar!")
}
