var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ToDoSchema = new mongoose.Schema({
    title: String,
    category: String,
    description: String,
    startDate: Date,
    completeDate: Date,
    link: String,
    status: String
});

ToDoSchema.plugin(mongoosePaginate);
const ToDo = mongoose.model('ToDo', ToDoSchema);
module.exports = ToDo;