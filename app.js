var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server)
  , load = require('express-load');

var error = require('./errors');

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.cookieParser('ntalk'));
  app.use(express.session());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(error.notFound);
});

load('models')
   .then('controllers')
   .then('helpers')
   .then('routes')
   .into(app);

server.listen(3000, function(){
  console.log("Ntalk no ar.");
});

io.sockets.on('connection', function (client) {
  client.on('toServer', function (data) {
    var msg = "<b>"+data.nome+":</b> "+data.msg+"<br>";
    client.emit('toClient', msg);
    client.broadcast.emit('toClient', msg);
}); });
