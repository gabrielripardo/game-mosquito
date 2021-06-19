class DbPontuacao{
    constructor(){
        if(localStorage.getItem("id") == null){
            localStorage.setItem("id", 0)
            console.log("criando primeiro id")
            this.realLength = 1
        }else{
            this.realLength = localStorage.getItem("id")
        }        
    }
    getProxId(){        
        console.log(`Id: ${localStorage.getItem("id")}`)
        return parseInt(localStorage.getItem("id"))+1
    }
    listar(){
        let pontuacoes = Array()

        for(let i=0; i<=this.realLength; i++){
            pontuacoes.push(i, JSON.parse(localStorage.getItem(i+1)))
        }

        return pontuacoes
    }    
    inserir(objeto){
        let currentId = this.getProxId()
        localStorage.setItem(currentId, objeto)
        localStorage.setItem("id", currentId) //atualiza key id
        console.log("ID: ", currentId) 
    }
    limpar(){                        
        for(let i=1; i<=this.realLength; i++){
            localStorage.removeItem(i)
        }        
        localStorage.setItem("id", 0)
    }
}

let db = new DbPontuacao()
let pos = {posicao: 1, data: "19/06/2021", nivel: "Fácil", pontos: 18}
db.inserir(JSON.stringify(pos))
//db.limpar()
console.log(db.listar())
export { DbPontuacao };