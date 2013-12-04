var fs = require('fs');

exports.loadData = function() {
    var dataInString = fs.readFileSync('./base/list.json', 'utf8');
    //console.log(dataInString);
    if (dataInString == '') {
        dataInString = [];
        return dataInString;
    } else {
        return JSON.parse(dataInString);
    }
};

exports.saveData = function(data) {
    var newData = JSON.stringify(data);
//    console.log(newData);
    fs.writeFileSync('./base/list.json', JSON.stringify(data));
};