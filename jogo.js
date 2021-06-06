// var alturaMax = window.screen.availHeight
// var larguraMax = window.screen.availWidth

var height = 0
var width = 0
var vidas = 3
var tempo = 10 //segundos
var nivel = window.location.search.replace('?', '') //recupera o nivel contido na url
var criaMosquitoTempo  = 1500

if(nivel === 'normal'){
    criaMosquitoTempo  = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo  = 1000
}else if(nivel === 'expert'){
    criaMosquitoTempo  = 750
}

function ajustaTamanhoPalco(){    //Palco com tamanho dinâmico
    height = window.innerHeight
    width = window.innerWidth
    console.log(height+" | "+width)
}

ajustaTamanhoPalco()

var cronometro = setInterval(function(){
        if(tempo == 0){
            clearInterval(cronometro)
            clearInterval(criaMosq)
            //window.alert("Você venceu!")
            window.location.href = "vitoria.html"
        }        
        tempo--;
        document.getElementById("segundos").innerHTML = tempo        
        
    }, 1000);

function posicaoRandomica(){
    //remover o mosquito anterior, caso exista.
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas == 0){            
            window.location.href = "game_over.html"
            clearInterval(cronometro)
            clearInterval(criaMosq)            
            //window.location.href = "game_over.html"
        }else if(vidas > 0){
            document.getElementById('vida'+vidas).src = "imagens/coracao_vazio.png"
            vidas--;
        }        
    }
    
    var posicaoX = Math.floor(Math.random() * width) - 90
    var posicaoY = Math.floor(Math.random() * height) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX 
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)
    
    //Criar o mosquito no html
    var mosquito = document.createElement('img')
    mosquito.src = "./imagens/mosquito.png"
    mosquito.className = tamanhoMosquito()+' '+ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX+'px'
    mosquito.style.top = posicaoY+'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())
}

function tamanhoMosquito(){
    var classe = Math.floor(Math.random() * 3)+1
    console.log("| Classe: "+classe)

    switch(classe){
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
        case 3:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)+1
    console.log("| Lado: "+classe)

    switch(classe){
        case 1:
            return 'ladoA'
        case 2:
            return 'ladoB'    
    }
}

