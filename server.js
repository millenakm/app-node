var express = require('express');
var app = express();
var port = 5000;

app.listen(port);
console.log("Servidor iniciado na porta "+port+". Acesso em localhost:"+port);