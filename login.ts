import readline = require("readline-sync")

console.clear()
let key = "6969"
let senha = ""

do{

  console.log("=============TELA LOGIN ============")
  const user:string = readline.question("Informe seu usuário: ")

  senha = readline.question("Informe sua senha: ")
  
    if(senha === key){
      console.log("!!LOGIN EFETUADO COM SUCESSO!!")
      console.log(`WELCOME ${user}, WE MISS YOU.`)
      break 
    }
      console.log("!!SENHA INCORRETA, TENTE NOVAMENTE!!")
    

}while(senha !== key)
