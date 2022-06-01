const usuariosMock = require("./usuarios");

class Usuario {
    //ok
    listar() {
        return Promise.resolve(usuariosMock);
    }

     //ok
    buscarPorId(id) {
        return Promise.resolve(usuariosMock.find((usuario) => usuario.id === id));
    }
  
    //ok
    adiciona(usuario){
        return Promise.resolve(usuario && {insertId:90});
    }
    
    //ok
    alterar(id, valores){
        return Promise.resolve(usuariosMock && [valores,id]);
    }

    //ok
    excluir(id){
        return Promise.resolve(usuariosMock && id);
    }

    //ok
    buscarPorNome(nome){
        return Promise.resolve(usuariosMock.find((usuario) => usuario.nomeCompleto === nome));
    }

    //ok
    listarDadosPessoais(id){
        // eslint-disable-next-line no-unused-vars
        const usuarios = usuariosMock.map(({ _telefone, _celular, _email, _urlFotoPerfil, _senha, _cep, _endereco, _numero, _complemento, _bairro, ...demais }) => demais);      
        const usuarioSelecionado= (usuarios.find((usuario) => usuario.id === id));
        return Promise.resolve(usuarioSelecionado);
    }
    
    //ok
    alterarDadosPessoais(id, valores){
        return Promise.resolve(usuariosMock && [valores,id]);
    }

    //ok
    listarContatos(id){
        // eslint-disable-next-line no-unused-vars
        const usuarios = usuariosMock.map(({_nomeCompleto, _rg, _cpf, _dataNascimento, _urlFotoPerfil, _senha, _cep, _endereco, _numero, _complemento, _bairro, ...demais }) => demais);      
        const usuarioSelecionado= (usuarios.find((usuario) => usuario.id === id));
        return Promise.resolve(usuarioSelecionado);
    }

    //ok
    alterarContatos(id, valores){
        return Promise.resolve(usuariosMock && [valores,id]);
    }

    //ok
    alterarSenha(id, valores){
        return Promise.resolve(usuariosMock && [valores,id]);
    }

    //ok
    listarEndereco(id){
        // eslint-disable-next-line no-unused-vars
        const usuarios = usuariosMock.map(({_nomeCompleto, _rg, _cpf, _dataNascimento, _telefone, _celular, _email, _urlFotoPerfil, _senha, ...demais }) => demais);      
        const usuarioSelecionado= (usuarios.find((usuario) => usuario.id === id));
        return Promise.resolve(usuarioSelecionado);
    }

    //ok
    alterarEndereco(id, valores){
        return Promise.resolve(usuariosMock && [valores,id]);
    } 

    isNomeUsuarioUtilizado(nome) {
        return Promise.resolve(!!usuariosMock.find((usuario) => usuario.nomeCompleto === nome));
        
    }
}
module.exports = new Usuario();
