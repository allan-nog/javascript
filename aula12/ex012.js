var horaAtual = new Date()
var hora = horaAtual.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 5){
    console.log('Boa madrugada!!! kakakakakak')
} else if (hora < 12){
    console.log('Bom dia!!!')
} else if (hora < 18){
    console.log('Boa Tarde!!!')
} else if (hora <= 24){
    console.log('Boa noite')
} else {
    console.log('O horário está errado')
}