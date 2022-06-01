const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

const ENV = process.env.NODE_ENV;

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/",(_req, res) => {
    res.send("Bem-Vindo ao LAS-API");
  });

  consign().include("src/controllers").into(app);

  
  // eslint-disable-next-line no-unused-vars
  app.use((err, _req, res, _next) => {
    if (err) {
      if (ENV === "production") {
        res.status(500).send("erro em Produtaçao");
      } else {
        res.status(500).send("Erro em Desenvolvimento");
      }
      console.log(err);
    }
  });
  return app;
};
