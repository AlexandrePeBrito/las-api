const supertest = require("supertest");
const customExpress = require("../src/config/customExpress");

const request = supertest(customExpress());
jest.mock("../src/repositorios/evento");

describe("API de Eventos", () => {
    test("Listar Eventos",async () => {
        const resp = await request.get("/eventos");
        expect(resp.statusCode).toBe(200);
        expect(resp.body).toEqual([
            {
                "id": 1,
                "nome": "Carnaval",
                "descricao": "Melhor festa do Mundo",
                "urlFoto": "teste",
                "dataInicio": "2022-05-29",
                "dataFim": "2022-05-30",
                "status": "agendado"
            },
            {
                "id": 2,
                "nome": "Sao Joao",
                "descricao": "Melhor festa do Mundo",
                "urlFoto": "teste",
                "dataInicio": "2022-05-29",
                "dataFim": "2022-08-29",
                "status": "em-andamento"
            },
            {
                "id": 3,
                "nome": "Show da Virada",
                "descricao": "Melhor festa do Mundo",
                "urlFoto": "teste",
                "dataInicio": "2022-02-25",
                "dataFim": "2022-04-29",
                "status": "finalizado"
            }
        ]);
    });
});

