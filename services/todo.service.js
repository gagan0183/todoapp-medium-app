var ToDo = require('../models/todo.model');

exports.getTodos = async function(query, page, limit) {
    var options = {
        page,
        limit
    }

    try {
        var todos = await ToDo.paginate(query, options);
        return todos;
    }
    catch(e) {
        throw Error('Error while Paginating');
    }
}

exports.createTodo = async function(todo) {
    var newTodo = new ToDo({
        title: todo.title,
        category: todo.category,
        description: todo.description,
        startDate: todo.startDate,
        completeDate: todo.completeDate,
        status: todo.status
    });

    try {
        var saveTodo = await newTodo.save();
        return saveTodo;
    }
    catch(e) {
        throw Error('Error in that');
    }
}

exports.updateTodo =  async function(todo) {
    var id = todo.id;

    try {
        var oldTodo = ToDo.findById(id);
    }
    catch(e) {
        throw Error('Error occurred while finding todo');
    }

    if(!oldTodo) {
        return false;
    }
    console.log(oldTodo);

    oldTodo.title = todo.title;
    oldTodo.category = todo.category;
    oldTodo.description = todo.description;
    oldTodo.startDate = todo.startDate;
    oldTodo.completeDate = todo.completeDate;
    oldTodo.startDate = todo.status;

    try {
        var saveTodo = await oldTodo.save();
        return saveTodo;
    }
    catch(e) {
        throw Error('Error is that');
    }
}

exports.removeTodo = async function(id) {
    try {
        var deleted = await ToDo.remove({_id: id});
        if(deleted.result.n === 0) {
            throw Error('Todo could not be deleted');
        }
        return deleted;
    }
    catch(e) {
        throw Error('Error occurred while deleting the todo');
    }
} 