//Arrays ;)
let frutas:string[] = ["goiaba", "amora", "banana", "maracuja", "kwi"]

console.log("Frutas", frutas)
console.log("frutas", frutas[1])
console.log("Tamanho do Array:", frutas.length)
console.log("Ultimo elemento do Array: ", frutas[frutas.length - 1])
//ordem alfabetica
frutas.short()
//ordem descrecente
frutas.reverse()

frutas[2] = 'melancia'
//Add na Ultima posição 
frutas.push("limão")
//Add na primeira posição 
frutas.unshift("melão")
// remove ultimato elemento do Array
frutas.pop()
// remove o primeiro elemento do Array
frutas.shift()
for(let i=0; i<frutas.length;i++){
  console.log(`${i + 1} - ${frutas[i]}`)
}
