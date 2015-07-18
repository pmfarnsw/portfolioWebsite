
exports.index = function(req, res){
    res.render('index');
};

exports.partials = function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
};

exports.projects = function(req, res){
    var path = require('path');
    var jsonFile = require(path.join(__dirname,'../','models/','projects.json'));

    res.send(jsonFile);
};







