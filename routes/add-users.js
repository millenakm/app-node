var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = require('./../controller/file');


router.post('/add-users', function(req, res){//rota (localhost:porta/list-users)
	file.read(function(data){//arquivo.função
		var params = req.query;//req.query são os parâmetros que são enviados para o json
	    params.id = (data[data.length-1].id)+1;;
		var checaNome = file.check(params, data);

		switch(checaNome){
			case 0:
				params.idade = Number(params.idade);
				data.push(params);
				var dataJson = JSON.stringify(data);			
				console.log(data);		
				file.write(dataJson, res);
				break;
			case 1:
				res.send("Usuário já cadastrado");
				break;			
		}
	});
});

module.exports = router;