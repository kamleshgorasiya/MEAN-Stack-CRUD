const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./connection.js');
const businessRoute = require('./controller/business.controller');
mongoose.Promise = global.Promise;
mongoose.connect(config.connection, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/business',businessRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});