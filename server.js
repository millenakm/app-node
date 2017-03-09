var express = require('express');
var app = express();//contem os métodos do pacote express
var port = 5000;

var application = require('./app');//faz a chamada da aplicação
app.use(application);//usa o app.js

app.listen(port);//seta isso no servidor
console.log("Servidor iniciado na porta "+port+". Acesso em localhost:"+port);