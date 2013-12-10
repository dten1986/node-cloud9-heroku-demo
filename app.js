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

app.use(express.cookieParser('secret'));
app.use(express.cookieSession());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//if ('development' == app.get('env')) {
  app.use(express.errorHandler());
//}

// Authorisation check
function checkAuth(req, res, next) {
    if (!req.session.user_id) {
        res.send('<span>You are not authorized to view this page</span>' +
                 '<p><a href="/">Back</a></p>');
    } else {
        next();
    }
};

// Routes
app.get('/', require('./controllers/home').index);
app.get('/edit', checkAuth, require('./controllers/edit').edit);
app.post('/login', require('./controllers/edit').login);
app.post('/logout', require('./controllers/edit').logout);
app.post('/items/add', require('./controllers/items').add);
app.post('/items/remove/', require('./controllers/items').remove);
app.post('/items/done/', require('./controllers/items').done);
app.get('/items/list', require('./controllers/items').list);

// Starting server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
