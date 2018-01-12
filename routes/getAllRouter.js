const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const Todo = require('../models/Todo');

router.get('/', (req, res) => {

    console.log('Is the basic route working');

    Todo.find({}).then((todos) => {

        console.log('is the then callback working?');

        console.log(todos);

        res.json(todos);

    })

        .catch((err) => {

            throw err;
        });

});

router.get('/test', (req, res, next) => {

    res.send('working?')

});


module.exports = router;