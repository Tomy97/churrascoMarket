const express = require('express');
const cors = require('cors');
const userAuth = require('./routes/users');

const app = express();
app.use(cors());

const port = 3000;

// Routes
app.use(require('./routes/index'));
app.use('/users', userAuth);