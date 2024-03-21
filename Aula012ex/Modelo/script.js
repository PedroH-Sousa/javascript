function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data =new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src='imagens/pexels-gareth-davies-910411.jpg'
        //img.src='imagens/pexels-pixabay-460370.jpg'

        document.body.style.background = '#FBE490'
    } else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src='imagens/pexels-pixabay-460370.jpg'
        
        document.body.style.background = '#E3D8D4'
    } else {
        // Boa noite
        img.src='imagens/pexels-pixabay-414144.jpg'
        document.body.style.background = '#182B4D'
    }

}

