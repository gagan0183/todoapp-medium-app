var TodoService = require('../services/todo.service');

exports.getTodos =  async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 9;

    try {
        var todos = await TodoService.getTodos({}, page, limit);
        return res.status(200).json({status: 200, data: todos, message: 'Successfully todos retrieved'});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.saveTodo = async function(req, res, next) {
    var todo = req.body;

    try {
        var createtodo = await TodoService.createTodo(todo);
        return res.status(200).json({status: 200, message: "Todo created successfully"});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.updateTodo = async function(req, res, next) {
    if(!req.body._id) {
        return res.status(400).json({status: 400, message: 'Id must be there'});
    }
    try {
        var updateTodo = await TodoService.updateTodo(req.body);
        return res.status(200).json({status: 200, data: updateTodo, message: "Todo updated successfully"});
    }
    catch(e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.removeTodo = async function(req, res, next){
    var id = req.params.id;
    try{
        var deleted = await TodoService.deleteTodo(id)
        return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }
}