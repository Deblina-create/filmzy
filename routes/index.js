var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Movie = require("../models/movie");
const Genre = require("../models/genre");
const dbConnection = require("../db.config");
mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true});

/* GET home page. */
router.get('/', async (req, res, next) => {
  const newReleases = await Movie.find().limit(6).sort("-createdOn");
  const genres = await Genre.find().sort("name");

  let genreWiseMovies = [];
  for(let i=0; i < genres.length; i++){
    let genreWiseMovie = {};
    let movies = await Movie.find({genreIds: genres[i]._id}).sort("title");
    genreWiseMovie.genre = genres[i];
    genreWiseMovie.movies = movies;
    genreWiseMovies.push(genreWiseMovie);
  }

  console.log(genreWiseMovies);
  res.render('index', { newReleases, genres, genreWiseMovies });
});

module.exports = router;
