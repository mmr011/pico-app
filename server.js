const express = require('express');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router/router');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(errorHandler());
app.use(morgan('tiny'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
