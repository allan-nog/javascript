function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'images/foto-manha.jpg'
        document.body.style.backgroundColor = '#E2CD9F'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'images/foto-tarde.jpg'
        document.body.style.backgroundColor = '#B9846F'
    } else {
        img.src = 'images/foto-noite.jpg'
        document.body.style.backgroundColor = '#515154'
    }
}