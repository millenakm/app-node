var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('<h2>blabla</h2>');
	// res.json({'blabla': 'balla'})
});

module.exports = router;