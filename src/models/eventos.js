const repositorio =require("../repositorios/evento");
const moment = require("moment");

class Eventos{
    //ok
    listar(){
        return repositorio.listar();
    }

    //ok
    buscarPorId(id){
        return repositorio.buscarPorId(id);
    }

    //ok
    adicionar(evento) {
        const dataEvento = this.isDataValidas(evento.dataInicio,evento.dataFim);
        
        if(dataEvento){
            return repositorio.adicionar(evento);
        }else{
            return Promise.reject({erro: "Data Invalida"});
        }
    }

    //ok
    alterar(id, valores) {
        return repositorio.alterar(id, valores);
    }
    
    //ok
    excluir(id) {
        return repositorio.excluir(id);
    }

    //ok
    listarPorStatus(status){
        if(status ==="agendado"){
            return repositorio.listarAgendado();
        }
        if(status ==="em-andamento"){
            return repositorio.listarEmAndamento();
        }
        if(status ==="finalizado"){
            return repositorio.listarFinalizado();
        }

        return Promise.reject(`Status inválido: ${status}`); 
    }

    //ok
    isDataValidas({dataInicio,dataFim}){
        const dataCricaoEvento = moment().format("YYYY-MM-DD");
        const dataInicioEvento =moment(dataInicio).format("YYYY-MM-DD");
        const dataFimEvento = moment(dataFim).format("YYYY-MM-DD");
        
        const isDataEhValida= moment(dataInicioEvento).isSameOrAfter(dataCricaoEvento) &&
        moment(dataFimEvento).isSameOrAfter(dataInicioEvento);

        return isDataEhValida;
    }
}
module.exports = new Eventos();