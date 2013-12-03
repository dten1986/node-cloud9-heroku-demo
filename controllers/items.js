var uuid = require('node-uuid');
var model = require('../model/items');

exports.add = function(req, res) {
    var data = model.loadData();

    data.push({
            id: uuid.v1(),
            text: req.body.input,
            date: new Date(),
            done: false
    });

   // console.log(data);

    model.saveData(data);

 /*       
    fs.appendFile('./public/base/list.json', JSON.stringify(dataArray, null, 4), function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Файл сохранен.');
        }
    }); 
    
  //READ SAVED FILE
    fs.readFile('./public/base/list.json', {encoding: 'utf8'}, function (err, data) {
        if (err) throw err;
        var array = new Array(data);
        console.log('part of data:' + array[0]);
    });
   
   */
   
    
};

exports.remove = function(req, res) {
    
};