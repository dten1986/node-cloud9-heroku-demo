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

    model.saveData(data);
    res.end();
};

exports.remove = function(req, res) {
    var data = model.loadData();
    
    for (var i=0; i<data.length; i++) {
        if (data[i].id == req.body.id) {
            data.splice(i, 1);
        }  
    };
    
    model.saveData(data);
    
    res.end();
};

exports.list = function(req, res) {
    res.json(model.loadData());
};

exports.done = function(req, res) {
    var data = model.loadData();
    
    for (var i=0; i<data.length; i++) {
        if (data[i].id == req.body.id) {
            data[i].done = !data[i].done;
        }  
    };
    
    model.saveData(data);
    
    res.end();
};