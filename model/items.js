var fs = require('fs');
var path = './base/list.json';

exports.loadData = function() {
    var dataInString = fs.readFileSync(path, 'utf8');
    if (dataInString == '') {
        return [];
    } else {
        return JSON.parse(dataInString);
    }
};

exports.saveData = function(data) {
    fs.writeFileSync(path, JSON.stringify(data));
};