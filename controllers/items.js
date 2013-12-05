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

  //  console.log(data);

    model.saveData(data);
    
    res.end();
};

exports.remove = function(req, res) {
    
  //  console.log(req.body.id);
    var data = model.loadData();
    for (var i=0; i<data.length; i++) {
        if (data[i].id == req.body.id) {
            data.splice(i, 1);
           // delete data[i];
            console.log(data);
        }  
    };
    
    model.saveData(data);
    
    res.end();
};

exports.list = function(req, res) {
    res.json(model.loadData());
};