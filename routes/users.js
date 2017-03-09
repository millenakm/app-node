var express = require('express');
var router = express.Router();

router.get('/users', function(req, res){//rota (localhost:porta/users)
	res.json({
		user1:{
			"name":"fulano",
			"idade":"19",
			"email":"fulano@fulano.com.br",
			"telefone":"99898-0059"
		},
		user2:{
			"name":"ciclano",
			"idade":"22",
			"email":"ciclano@ciclano.com.br",
			"telefone":"99899-2252"
		}
	});
});

module.exports = router;