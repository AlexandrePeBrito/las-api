const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());
jest.mock("../src/repositorios/usuario");

describe("API de Usuarios", () => {
  
  //ok
  test("Listar Usuarios",async () => {
    const resp = await request.get("/usuarios");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual([
      {
        "id": 1,
        "nome":"Alexandre",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/women/55.jpg"
      },
      {
        "id": 2,
        "nome":"Maiure",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/women/55.jpg"
      },
      {
        "id": 3,
        "nome":"Zelda",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/women/55.jpg"
      }
  ]);
  });

  //ok
  test("Buscar Usuario pelo ID existente",async () => {
    const resp = await request.get("/usuarios/1");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(
      {
        "id": 1,
        "nome":"Alexandre",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/women/55.jpg"
      }
    );
  });

  //ok
  test("Buscar Usuario pelo ID inexistente",async () => {
    const resp = await request.get("/usuarios/50");
    expect(resp.statusCode).toBe(404);
  });
  
  //ok
  test("Adicionar Usuario com dados Validos",async () => {
    const resp = await request.post("/usuarios").send(
      {
        "id": 12345,
        "nome": "Paulo",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/men/50.jpg"
    });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(
      {
        "id": 12345,
        "nome": "Paulo",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/men/50.jpg"
    });
  });

  test("Alterar Usuario",async () => {
    const resp = await request.put("/usuarios/2").send(
      {
        "id": 12345,
        "nome": "Paulo Silva",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/men/50.jpg"
      });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      "id": 12345,
      "nome": "Paulo Silva",
      "urlFotoPerfil": "https://randomuser.me/api/portraits/men/50.jpg"
    });
  });

  test("Excluir Usuario",async () => {
    const resp = await request.delete("/usuarios/3");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      "id": 3
    });
  });

  //ok
  test("Buscar Usuario por Nome",async () => {
    const resp = await request.get("/usuarios/nome/Zelda");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(
      {
        "id": 3,
        "nome": "Zelda",
        "urlFotoPerfil": "https://randomuser.me/api/portraits/women/55.jpg",
    }
  );
  });

  test("Listar Dados pessoais do Usuario",async () => {
    const resp = await request.get("/usuarios/1/dados-pessoais");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(
      {
        "id": 1,
        "nomeCompleto": "Alexandre Brito",
        "rg": "1357174500",
        "cpf": "07828625510",
        "dataNascimento": "1999-10-05"
      }
  );
  });

  test("Alterar Dados Pessoais do Usuario dados invalidos",async () => {
    const resp = await request.put("/usuarios/1/dados-pessoais").send({
      "id":1,
      "telefone": "7132121422",
      "celular": "71999663589",
      "email": "etsvaldo@gmail.com"
    });
    expect(resp.statusCode).toBe(400);
  });
  
  /*test("Alterar Dados pessoais do Usuario",async () => {
    const resp = await request.put("/usuarios/1/dados-pessoais").send({
        "nomeCompleto": "aaaa",
        "rg": "07828625510",
        "cpf": "07828625510",
        "dataNascimento": "1999-10-05"
      });
    expect(resp.statusCode).toBe(200);
  });*/

  test("Listar Contatos do Usuario",async () => {
    const resp = await request.get("/usuarios/1/contatos");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(
      {
        "id":1,
        "telefone": "7132121422",
        "celular": "71999663589",
        "email": "etsvaldo@gmail.com"
      }
  );
  });

  test("Alterar Contatos do Usuario",async () => {
    const resp = await request.put("/usuarios/2/contatos").send({
      "telefone": "7132121422",
      "celular": "71999663589",
      "email": "etsvaldo@gmail.com"
    });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(
      {
        "id":2,
        "telefone": "7132121422",
        "celular": "71999663589",
        "email": "etsvaldo@gmail.com"
      }
  );
  });

  test("Alterar Senha do Usuario",async () => {
    const resp = await request.put("/usuarios/2/senha").send({
    "senha": "admin"
    });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      "id": 2,
      "senha": "admin"
    });
  });

  test("Listar Endereco do Usuario",async () => {
    const resp = await request.get("/usuarios/1/endereco");
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual(
      {
        "id":1,
        "cep": "43700000",
        "endereco": "rua dois de julho",
        "numero": 256,
        "complemento": "",
        "bairro": "cia 30"
      }
  );
  });

  test("Alterar Endereco do Usuario",async () => {
    const resp = await request.put("/usuarios/2/endereco").send({
      "cep": "43700000",
      "endereco": "rua dois de julho",
      "numero": 256,
      "complemento": "",
      "bairro": "cia 30"
    });
    expect(resp.statusCode).toBe(200);
    expect(resp.body).toEqual({
      "id":2,
      "cep": "43700000",
      "endereco": "rua dois de julho",
      "numero": 256,
      "complemento": "",
      "bairro": "cia 30"
    });
  });
});
