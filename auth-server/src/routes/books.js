'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../middleware.js');

router.get('/books', auth, handleGetAll);
router.get('/books/:id', auth, handleGetOne);

// authRouter.post('/signin', auth, (req, res, next) => {
//   console.log('hello');
//   res.cookie('auth', req.token);
//   res.send(req.token);
// });

// Route Handlers
function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };

  res.cookie('auth', req.token);
  //res.send(req.token);          //added send line with token
  res.send(req.token).status(200).json(books); //original send line
}

function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };

  res.cookie('auth', req.token);
  //res.send(req.token);
  res.send(req.token).status(200).json(book);
}

module.exports = router;
