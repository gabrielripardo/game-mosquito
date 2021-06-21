import { DbPontuacao } from './localstorage.js';
let pontos = null
let nivel = null
function registrarPontuacao(){
    pontos = window.location.search.replace('?', '').split('&')[0] //recupera o nivel contido na url
    nivel = window.location.search.replace('?', '').split('&')[1] //recupera o nivel contido na url
    
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

    console.log(`Pontos: ${pontos} | Nível: ${nivel} | Date: ${date}`)
    let pontuacao = {pontos, nivel, date}
    console.log(pontuacao)
    let db = new DbPontuacao()
    //db.inserir(pontuacao)
}

document.getElementById("btn_limpar").addEventListener("click", limparPontuacoes);

function limparPontuacoes(){
    let db = new DbPontuacao()
    db.limpar()
    console.log("Limpando pontuações...")
}

console.log(`P: ${pontos} | N: ${nivel}`)
if(pontos != null && nivel != null){
    registrarPontuacao()
}
