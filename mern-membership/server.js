const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const members = require('./routes/api/members');
const app = express();

//BodyParser middleware

app.use(bodyParser.json());

// DB config

const db = require('./config/keys').mongoURI;

// Connect to Mongo 
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(error));

// Use Routes
app.use('/api/members', members)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
