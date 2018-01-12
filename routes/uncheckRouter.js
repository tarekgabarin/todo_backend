const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const Todo = require('../models/Todo');

router.put('/:id', (req, res, next) => {

    Todo.findByIdAndUpdate(req.params.id, {
        done: false
    })
        .then(() => {

            Todo.find({}).then((todos) => {

                res.json(todos);

            })
        })

});

module.exports = router;