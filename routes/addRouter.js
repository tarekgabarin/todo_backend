const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const mongoose = require('mongoose');

const Todo = require('../models/Todo');

router.post('/', (req, res) => {

    console.log(req.body);

   // Todo.create({
   //
   //     text: req.body.text,
   //
   // }).then((todo) => {
   //
   //     console.log('then statement running');
   //
   //     res.json(todo);
   //
   // });

    let newTodo = new Todo({text: req.body.text});

    newTodo.save(function (err) {
        if (err) throw err;

        })
        .then(() => {

            Todo.find({}).then((todos) => {

                res.json(todos);

            })


        })
        .catch(err => {

            if (err) throw err;
        })

});

module.exports = router;