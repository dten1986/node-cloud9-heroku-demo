var model = require('../model/login');
var uuid = require('node-uuid');

exports.edit = function(req, res) {
	res.render('edit');
};

exports.login = function(req, res) {
    var data = model.getUser();

    var sessionId = uuid.v4();
    
    if (req.body.user == data[0].username && req.body.pass == data[0].password) {
        req.session.user_id = sessionId;
    } 
    
    res.end();
};

exports.logout = function(req, res) {
    req.session.user_id = '';
    
    res.end();
};