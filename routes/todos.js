var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://hamada:hamada@ds143071.mlab.com:43071/mean-todos-app', ['todos']);

router.get('/todos', function(req, res, next) {
    db.todos.find(function(err, todos) {
        if(err) {
            res.send(error);
        } else {
            res.json(todos);
        }
    });
});

module.exports = router;