var express = require('express');
var app = express();//contem os métodos do pacote express
var port = 5000;

var application = require('');//seleciona o arquivo da aplicação
app.use(application);

app.listen(port);
console.log("Servidor iniciado na porta "+port+". Acesso em localhost:"+port);