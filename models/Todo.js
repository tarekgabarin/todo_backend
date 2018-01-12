const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let Todo = new Schema({


        done: {
            type: Boolean,
            default: false
        },

        text: {
            type: String,
            required: true
        }

});


TodoModel = mongoose.model('Todo', Todo);

module.exports = TodoModel;