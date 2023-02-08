let num =[5,8,2,9,3]

console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} tantos elementos`) //LENGTH QUANTIDADE DE ELEMENTOS
num.push(1) //PUSH ADICIONA ELEMENTO NO FINAL DO VETOR
console.log(`Nosso vetor agora é o ${num}`)

num.sort() //SORT ORGANIZA EM ORDEM CRESCENTE
console.log(`Nosso vetor agora é o ${num}`)

for(let pos = 0; pos < num.length ; pos++){
    console.log(num[pos])
}

for(let pos in num){
    console.log(num[pos])
}

console.log(`O valor 2 está na posição ${num.indexOf(2)}`)