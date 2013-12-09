var model = require('../model/login');

exports.edit = function(req, res) {
	res.render('edit');
};

exports.login = function(req, res, next) {
    var data = model.getUser();
  
    console.log(req.session);
    
/*    data.findOne({username: req.body.user}, function(err, user) {
        if (user) {
            console.log('123!');
        }
    });
  */  
//    console.log(data);
    
/*    if (req.body.user == data[0].username && req.body.pass == data[0].password) {
        res.body.authorized = true;
    } else {
        //res.render('index');
        res.body.authorized = false;
    }*/
};