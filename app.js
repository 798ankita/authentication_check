require("dotenv").config();
const express = require('express');
const connection = require('./src/config/db');
const router = require('./src/routes/login_route')
const app = express();
app.use(express.json());

app.use('/', router);

app.listen(process.env.PORT, () =>console.log('server running on port'));


