var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'tpl'));
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));
//app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//if ('development' == app.get('env')) {
  app.use(express.errorHandler());
//}

// Routes
app.get('/', require('./controllers/home').index);
app.post('/items/add', require('./controllers/items').add);
app.get('/items/remove/:id', require('./controllers/items').remove);

// Starting server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
