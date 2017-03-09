var express = require('express');
var router = express.Router();//método do express

var index = require('./routes/index');//chama o index
router.use(index);//usa o index na router

var users = require('./routes/list-users');
router.use(users);

var products = require('./routes/products');
router.use(products);

module.exports = router;//retorna o router para o servidor