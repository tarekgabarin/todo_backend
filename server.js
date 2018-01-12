const express = require('express');
const config = require('./config');
let mongoose = require('mongoose');
const http = require('http');

const bodyParser = require('body-parser');

const assert = require('assert');

const app = express();

const addRouter = require('./routes/addRouter');

const checkRouter = require('./routes/checkRouter');

const uncheckRouter = require('./routes/uncheckRouter');

const deleteAllFinishedRouter = require('./routes/deleteAllFinishedRouter');

const getAllRouter = require('./routes/getAllRouter');

const getFinishedRouter = require('./routes/getFinishedRouter');

const getUnfinishedRouter = require('./routes/getUnfinishedRouter');

const cors = require('cors');



// let MongoClient = require('mongodb').MongoClient;
//
//
// MongoClient.connect(config.mongoUrl, function (err, db) {
//     assert.equal(null, err);
//     if (err)
//     {
//         console.log("connection error: ");
//     }
//     if (db) {
//         console.log("Connected correctly to server");
//     }
// });



db = mongoose.connection;


mongoose.connect(config.mongoUrl);
mongoose.Promise = global.Promise;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to db at /data/db/")
});


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});


app.use('/check', checkRouter);

app.use('/uncheck', uncheckRouter);

app.use('/empty', deleteAllFinishedRouter);

app.use('/finished', getFinishedRouter);

app.use('/incomplete', getUnfinishedRouter);

app.use('/todos', getAllRouter);

app.use('/add', addRouter);

//// I will put the routes here


const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);