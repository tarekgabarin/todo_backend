const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const Todo = require('../models/Todo');

router.get(('/'), (req, res, next) => {

    Todo.find({done: false})

        .then((todos) => {

            res.send(todos)
        })

});


module.exports = router;


