var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;



app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('alguien se conecto!');
	socket.on('chat message', function(mensaje){
		console.log('recibi' + mensaje);
	    io.emit('recibido', {
	    	date: new Date(),
	    	txt: mensaje
	    });
	});
});

http.listen(port, function(){
	console.log("Servidor corriendo");
})