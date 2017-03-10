var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = require('./../controller/file');

router.post('/add-users', function(req, res){//rota (localhost:porta/list-users)
	file.read(function(data){//arquivo.função
		var params = req.query;//req.query são os parâmetros que são enviados para o json
		data.push(params);
		var dataJson = JSON.stringfy(data);		

		file.write(dataJson, res);
	});
});

module.exports = router;