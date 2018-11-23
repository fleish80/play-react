const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/accounts',
{
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

const port = process.env.PORT || 5000;

// app.use(bodyParser.urlencoded({
//   extended: true
// }))
app.use(bodyParser.json());

// initialize routes
app.use('./api', require('./routes/account'));

// errror handling middleware
app.use((err, req, res, next) => {
  res.status(422).send({error: err.message})
});

// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.get('/stam', (req, res, next) => {
  res.send({data: 'data'});
});
