'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');

// FLAG
authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token); //remove?
      res.send(req.token); //remove?
    }).catch(next);
});

authRouter.post('/signin', auth, (req, res, next) => {
  console.log('hello');
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = authRouter;
