var fs = require('fs');

exports.loadData = function() {
    var dataInString = fs.readFileSync('./base/list.json', {encoding: 'utf8'});
    return JSON.parse(dataInString);
};

exports.saveData = function(data) {
    var newData = JSON.stringify(data);
    console.log(newData);
    fs.writeFileSync('./base/list.json', JSON.stringify(data));
};