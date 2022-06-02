const tipoVendasMock = require("./tiposVendas");

class TiposVenda{
    //ok
    listar() {
        return Promise.resolve(tipoVendasMock);
    }

    //ok
    buscaPorId(id) {
        return Promise.resolve(tipoVendasMock.find((tipoVenda) => tipoVenda.id === id));
    }

    adicionar(tipoVenda){
        return Promise.resolve(tipoVenda && {insertId:4});
    }
    
    
    alterar(id,valores){
        return Promise.resolve(tipoVendasMock && [valores,id]);
    }
    
    excluir(id){
        return Promise.resolve(tipoVendasMock && id);
    }
    
}
module.exports = new TiposVenda();