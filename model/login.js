var fs = require('fs');
var path = './base/login.json';

exports.getUser = function() {
    var dataInString = fs.readFileSync(path, 'utf8');
    if (dataInString == '') {
        return [];
    } else {
        return JSON.parse(dataInString);
    }
};
