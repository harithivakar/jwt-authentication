const dotenv = require('dotenv');
dotenv.config();
const router = require('./routes/auth.js');

require('./config/database.js').connect();

const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(router);

module.exports = app;