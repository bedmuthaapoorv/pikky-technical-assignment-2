// function: to populate routes with api endpoints / map path to corresponding business logic

"use strict";

let services = require("../services/Services");
exports.routes = (app) => {
  app.route("/").get((req, res) => {
    res.send("App is working");
  });
};
