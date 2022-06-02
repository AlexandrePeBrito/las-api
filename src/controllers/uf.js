const uf = require("../models/uf");

module.exports = (app) => {
    
    app.get("/ufs", (_req, res) => {
        uf.listar(res)
          .then((resultados) => res.status(200).json(resultados))
          .catch((erros) => res.status(400).json(erros));
      });

    app.get("/ufs/:UF/municipios", (req, res) => {
        const valor_uf = req.params.UF;
    
        uf.buscarPorMunicipio(valor_uf, res)
          .then((resultados) => res.json(resultados))
          .catch((erros) => res.status(400).json(erros));
    });
};