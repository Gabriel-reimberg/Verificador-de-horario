
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} : ${minutos} horas.`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = 'rgba(109, 65, 25, 0.884)'
    }else if(hora >= 12 && hora <= 18 ){
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = 'rgba(204, 109, 54, 0.884)'
    }else{
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = 'rgba(3, 33, 61, 0.884)'
    }
}