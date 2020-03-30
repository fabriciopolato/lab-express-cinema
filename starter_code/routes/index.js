const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies page */
router.get('/movies', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    console.log('We are here!');
    res.render('movies', { movies });
  } catch (err) {
    console.log(err);
  }
});

/* GET movie page */
router.get('/movie/:id', async (req, res, next) => {
  const { id } = req.params;
  
  try {
    const movie = await Movie.findById(id)
    res.render('movie', movie) 
  } catch (err) {
    console.log(err);
  }

});

module.exports = router;
