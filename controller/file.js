var fs = require('fs');

module.exports = {
	read: function(callback){//callback é executado depois que a função terminar
		fs.readFile(__dirname + '/../'+'db/users.json', 'utf8', function(err, data){
			if(err)
				return console.log(err);
			data = JSON.parse(data);//transforma o json em um objeto js manipulável
			callback(data);
		});
	},
	write: function(dataJson, res){
		fs.writeFile(__dirname + '/../'+'db/users.json', dataJson, function(err){
			if(err)
				return console.log(err);
			
			res.end('Usuário inserido com sucesso!');
		});
	},
	check: function(params, data){

		var checaNome=0;

		for (i in data) {
    		if(data[i].nome == params.nome){
    			checaNome = 1;
    		}
    		else if(data[i].id == params.id){
    			params.id++;
    		}
		}
		return checaNome;
	}
}