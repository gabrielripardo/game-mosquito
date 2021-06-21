// var alturaMax = window.screen.availHeight
// var larguraMax = window.screen.availWidth

var height = 0
var width = 0
var vidas = 3
var tempo = 30 //segundos
var nivel = window.location.search.replace('?', '') //recupera o nivel contido na url
var criaMosquitoTempo = 1500
var capturados = 0
var notCaptured = false

if(nivel === 'normal'){
    criaMosquitoTempo  = 1500
}else if(nivel === 'dificil'){
    criaMosquitoTempo  = 1200
}else if(nivel === 'expert'){
    criaMosquitoTempo  = 900
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
            window.location.href = "vitoria.html?"+capturados+'&'+nivel
        }        
        document.getElementById("segundos").innerHTML = tempo        
        tempo--;                
    }, 1000);

function posicaoRandomica(){    
    console.log(`Vidas: ${vidas}`)
    if(notCaptured || vidas == 0){        
        document.getElementById(`vida${vidas}`).src = "imagens/coracao_vazio.png"            
        vidas--;        
        if(vidas == 0){                        
            window.location.href = "game_over.html?"+capturados+'&'+nivel
            clearInterval(cronometro)
            clearInterval(criaMosq)            
            //window.location.href = "game_over.html"
        }
        document.getElementById('mosquito').remove()     
    }
    notCaptured = true //não foi capturado ainda

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
        notCaptured = false; //foi capturado
        document.getElementById('caputured-sound').src='./sounds/click-effect.wav'
        document.getElementById('caputured-sound').play()
        capturados++
        document.getElementById('m-capturados').innerHTML = capturados
        //this.style.transition = 'width 0.2s'
        this.style.transform = 'rotate(180deg)'
        // this.remove()
        setTimeout(function(){
            document.getElementById('mosquito').remove()
            //mosquito.remove()                   
        }, criaMosquitoTempo/6)        
    }      
    document.body.appendChild(mosquito)                  
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

