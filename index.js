//Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDb @27017');
});

mongoose.connection.on('error', (error) => {
    console.log(`Error : ${error}`);
});
//port no
const port = 3000;

//Adding middleware so that we can parse our data and use cors.
app.use(cors());

//body-parser to parse our json data
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public'))); //__dirname will point to current directory and public will be joined with it.

//routes
app.use('/api', route)

// testing server
app.get('/', (req, res) => {
    res.send('Roushan');
});

app.listen(port,() => {
    console.log('Server started at port no '+port)
})