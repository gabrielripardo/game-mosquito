import { DbPontuacao } from './localstorage.js';

function registrarPontuacao(){
    var pontos = window.location.search.replace('?', '').split('&')[0] //recupera o nivel contido na url
    var nivel = window.location.search.replace('?', '').split('&')[1] //recupera o nivel contido na url
    
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

    console.log(`Pontos: ${pontos} | Nível: ${nivel} | Date: ${date}`)
    let pontuacao = {pontos, nivel, date}
    console.log(pontuacao)
    let db = new DbPontuacao()
    //db.inserir(pontuacao)
}

registrarPontuacao()