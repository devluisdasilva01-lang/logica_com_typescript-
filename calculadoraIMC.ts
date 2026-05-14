import readline = require('readline-sync')

console.clear()

console.log("===========CALCULADORA IMC =================")
const nome:string = readline.question("Informe seu Nome: ")
const peso:number = Number(readline.question("Informe seu PESO em (kg:):  "))
const altura:number = Number(readline.question("Infome sua ALTURA em (m): "))

console.log("===========RESULTADO==================")

const imc:number = peso/altura**2
let classificacao:string = ""

if(imc < 18.5){
	classificacao = "BAIXO PESO!"
}else if(imc >= 18.5 && imc < 25){
	classificacao = "PESO NORMAL!"
	}else if(imc >= 25 && imc < 30){
		classificacao = "EXCESSO DE PESO!"
		}else if(imc >= 25 && imc < 30){
        	        classificacao = "EXCESSO DE PESO!"
       			}else if(imc >= 25 && imc < 30){
               			 classificacao = "EXCESSO DE PESO!"
       				}else if(imc >= 30 && imc < 35){
         			         classificacao = "OBESIDADE DE CLASSE 1!"
    					}else if(imc >= 35 && imc < 40){
     					 	 classificacao = "OBESIDADE DE CLASSE 2!"
						}else if(imc < 40){
					                classificacao = "OBESIDADE DE CLASSE 3!"
						        }

console.log(`Olá, ${nome}! \nEsses são seus Dados: \nPeso: ${peso} \nAltura: ${altura} \nSeu IMC: ${imc.toFixed(2)} \nSeu diagnostco: ${classificacao}`)
