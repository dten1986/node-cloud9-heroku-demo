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
    
};

exports.list = function(req, res) {
    res.json(model.loadData());
};