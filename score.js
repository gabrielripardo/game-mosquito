import { DbPontuacao } from './localstorage.js';
let pontos = null
let nivel = null
let ganhou

if(window.location.search != ""){ //Páginas: vitoria.html e game_over.html
    registrarPontuacao()
    console.log(window.location.search)    
}else{ //Página score.html
    document.getElementById("btn_limpar").addEventListener("click", limparPontuacoes);
    listarPontuacoes()
}

function registrarPontuacao(){
    pontos = window.location.search.replace('?', '').split('&')[0] //recupera o nivel contido na url
    nivel = window.location.search.replace('?', '').split('&')[1] //recupera o nivel contido na url
    ganhou = window.location.search.replace('?', '').split('&')[2] //recupera o nivel contido na url
    
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

    console.log(`Pontos: ${pontos} | Nível: ${nivel} | Date: ${date}`)
    let pontuacao = {pontos, nivel, date, ganhou}
    console.log(pontuacao)
    let db = new DbPontuacao()
    db.inserir(pontuacao)
}


function limparPontuacoes(){
    let db = new DbPontuacao()
    db.limpar()
    console.log("Limpando pontuações...")
}

function listarPontuacoes(){
    let db = new DbPontuacao()
    
    if(db.getProxId() >= 1){
        let lista = db.listar()
        console.log(db.listar())   
        console.log(typeof(lista))     

        let cont = 1        
        let listaSorted = lista.sort((a, b) => b.pontos - a.pontos)
        console.log(`lista sorted: ${listaSorted}`)
        listaSorted.forEach((element) => {
            let linha = document.createElement('tr')             
            let posicao = document.createElement('td')
            posicao.innerHTML = cont+'º'
            let date = document.createElement('td')
            date.innerHTML = element.date
            let nivel = document.createElement('td')
            nivel.innerHTML = element.nivel
            let pontos = document.createElement('td')                        
            pontos.innerHTML = element.pontos
            pontos.className = element.ganhou == 'true' ? 'bg-success' : 'bg-danger'
            
            linha.appendChild(posicao)              
            linha.appendChild(date)
            linha.appendChild(nivel)
            linha.appendChild(pontos)
            document.getElementById('t-content').appendChild(linha)                   
            cont++
        });   
    }
}
