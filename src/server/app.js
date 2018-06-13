const express = require('express');

const testRouter = require('./routes/test');

const app = express();

app.use(express.json());
app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/
app.use('/test', testRouter);

module.exports = app;