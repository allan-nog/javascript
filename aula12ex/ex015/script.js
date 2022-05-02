function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (formAno.value.length == 0 || formAno.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        // if (fsex[0].checked){
        //     genero = 'Homem'
        //     if (idade >= 0 && idade < 13){
        //         img.setAttribute('src', 'images/foto-bebe-m.png')
        //         document.body.style.background=`#FF665A`
        //     } else if (idade < 21){
        //         img.setAttribute('src', 'images/foto-jovem-m.png')
        //         document.body.style.background=`#705E78`
        //     } else if (idade < 50){
        //         img.setAttribute('src', 'images/foto-adulto-m.png')
        //         document.body.style.background=`#FFF587`
        //     } else {
        //         img.setAttribute('src', 'images/foto-idoso-m.png')
        //         document.body.style.background=`#A3A1A8`
        //     }
        // } else if (fsex[1].checked) {
        //     genero = 'Mulher'
        //     if (idade >= 0 && idade < 13){
        //         img.setAttribute('src', 'images/foto-bebe-f.png')
        //     } else if (idade < 21){
        //         img.setAttribute('src', 'images/foto-jovem-f.png')
        //     } else if (idade < 50){
        //         img.setAttribute('src', 'images/foto-adulto-f.png')
        //     } else {
        //         img.setAttribute('src', 'images/foto-idoso-f.png')
        //     }
        // }

        genero = fsex[0].checked ? 'Homem':'Mulher'

        if(idade <= 13) img.setAttribute('src', `images/foto-bebe-${genero}.png`)
        else if(idade <= 21) img.setAttribute('src', `images/foto-jovem-${genero}.png`)
        else if(idade <= 50) img.setAttribute('src', `images/foto-adulto-${genero}.png`)
        else img.setAttribute('src', `images/foto-idoso-${genero}.png`)

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos.`
        res.appendChild(img)

    }
}