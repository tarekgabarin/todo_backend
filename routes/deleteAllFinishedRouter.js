const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const Todo = require('../models/Todo');


router.delete('/', (req, res) => {

    Todo.remove({done: true})

        .then(() => {

            Todo.find({})

                .then(todos => {

                    console.log('todos, in the delete router promise is....' + todos);

                    res.json(todos)

                })

        })

});




module.exports = router;