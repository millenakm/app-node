var express = require('express');
var router = express.Router();

router.get('/products', function(req, res){//rota (localhost:porta/users)
	res.json({
		products:[
			{
				"id": 1,
				"product":"feijão",
				"value": 2.5,
				"status": "A"
			},
			{
				"id": 2,
				"product":"batata",
				"value": 4,
				"status": "I"
			}
		]
	});
});

module.exports = router;