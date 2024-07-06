// function: to build a server & relay the requests further
require("dotenv").config();
const express=require('express');
const app=express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }
);
app.use(express.json())
let generateNewFlights=require('../services/generateNewFlights')
generateNewFlights.generateNewFlights()
const port=3001;
const routes=require('./routes')
routes.routes(app)
app.listen(port, console.log("App is working at: "+port));
