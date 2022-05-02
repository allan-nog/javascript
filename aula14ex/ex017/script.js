function tabuada () {
    let number = document.getElementById('number')
    let tabuada = document.getElementById('tabuada')

    if (number.value.length == 0){
        alert('Por favor, digite um número')
    } else {
        let n = Number(number.value)

        tabuada.innerHTML = ''

        let c = 1
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c++
        }

    }

}