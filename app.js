const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middlewares
app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Routess
app.get('/', (req,res) => {
  res.send('we are on home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true }, () => {
  console.log('Connected to DB!');
});

// Server
app.listen(3000);