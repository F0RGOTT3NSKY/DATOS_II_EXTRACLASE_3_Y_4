const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');

//middleware
app.use(cors());
app.use(bodyParser.json());

//Import routes
const postsRoute = require('./Rotues/posts');

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) =>{
    res.send('We are on home');
});

//Conecto to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,
useUnifiedTopology: true},
console.log("Connected to db"))

//Listener
app.listen(3000)