function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagem/criança.jpg')
            } else if ( idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/jovem.jpg')
            } else if ( idade >=21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagem/homemidoso.jpg')
            }
        } else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'imagem/criança1.jpg')
            } else if ( idade >=10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/jovem1.jpg')
            } else if ( idade >=21 && idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/adulta.jpg')
            } else {
                //idoso 
                img.setAttribute('src', 'imagem/mulheridosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}