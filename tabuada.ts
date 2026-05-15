import readline = require('readline-sync')

console.clear()

console.log("=============TABUABA===============")
const nmr:number = readline.questionInt("Informe um número para descobrir sua TABUADA:")

console.log(`TABUADA DO ${nmr}`)
for(let i = 0; i <= 10; i++){

  console.log(`${nmr} x ${i} =`+ nmr*i)
}

