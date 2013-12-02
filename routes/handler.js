var fs = require('fs');

exports.post = function(req, res, next) {
	var text = req.body.text;
	
	console.log(text);
	
	
	
	
/*	var username = req.body.username;
	var password = req.body.password;
	
	User.authorize(username, password, function(err, user) {
		if (err) {
			if (err instanceof AuthError) {
				return next(new HttpError(403, err.message));
			} else {
				return next(err);
			}
		}
		
		req.session.user = user._id;
		res.send({});
	});*/
};