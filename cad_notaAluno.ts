import readline = require('readline-sync')

console.clear()

const nome_aluno:string = readline.question("Informe o nome do aluno: ")
const n1:number = Number(readline.question("Informe a primeira nota: "))
const n2:number = Number(readline.question("Informea segunda nota: "))
const n3:number = Number(readline.question("Informe a terceira nota: "))
const faltas:number = Number(readline.question("Informe a quantidade de faltas: "))

let situacao:string = ""

const media = (n1+n2+n3)/3

if (media >= 7 && faltas < 5){
	situacao = "Aprovado!"
}else if(media >=5 && media < 7 && faltas < 3){
		situacao = "Recuperação!"
	}else{
		situacao = "Reprovado!"
	}

console.log(`Olá, ${nome_aluno}! \nSua média é: ${media.toFixed(2)} \nNúmero de Faltas: ${faltas} \nSua situação atual é: ${situacao}`)
