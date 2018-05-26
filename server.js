const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
//const knex = require('./db/knex');
//var kladrJson = require('./kladr.json');

const index = require('./routes/indexRoutes');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/', index);

app.use('/', express.static(__dirname + '/public-static-html/'));

app.listen(port, function() {
  console.log("listening on port: ", port);
})
