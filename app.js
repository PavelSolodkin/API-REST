const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cardsRoute = require('./routes/cards');
const usersRoute = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const noUrl = (req, res, next) => {
  if (!res.headersSent) {
    res.status(404).send({
      message: 'Запрашиваемый ресурс не найден',
    });
  }
  next();
};

app.use((req, res, next) => {
  req.user = {
    _id: '5ef89aecef312335b8da1ba5',
  };

  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/cards', cardsRoute);
app.use('/users', usersRoute);
app.use(noUrl);
app.listen(PORT);
