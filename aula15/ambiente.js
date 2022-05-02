let num = [30, 20, 10]

console.log(`Nosso vertor é o ${num}`)

console.log(num[0])
console.log(num[1])
console.log(num[2])

num[3] = 50
console.log(num)

num.push(40) // Adiciona o valor no array sem preocupar com a posição (vai colocar na 1° posição livre)
console.log(num)

console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`O vetor tem ${num.length} posições.`)

console.log(num.sort()) //O método sort() não organiza na verdade o valor total do elemento,  mas sim a sua primeira casa decimal. 

for (let i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for (let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log(`O valor 30 está na posição ${num.indexOf(30)}`)