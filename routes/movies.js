const express = require('express');
const router = express.Router();
const axios = require("axios");
const mongoose = require('mongoose');
const Movie = require("../models/movie");
const Genre = require("../models/genre");
const dbConnection = require("../db.config");
const apiConfig = require("../api.config");
mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true});


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('movies', { searchResult: {title: ""}, movie: {}, info: {mode: "", action: "/movie"}, error: {}});
});

router.post("/search", async (req, res, next) => {
  const searchTitle = req.body.inputSearchTitle;
  let movieInDb = await Movie.findOne({ title: searchTitle});
  if(movieInDb){
    const movie = {
      id: movieInDb._id,
      title: movieInDb.title,
      genreIds: JSON.stringify(movieInDb.genreIds),
      year: movieInDb.year,
      runtime: movieInDb.runtime,
      plot: movieInDb.plot,
      posterUrl: movieInDb.posterUrl,
      movieUrl: movieInDb.movieUrl
    };
    res.render('movies', { searchResult: {title: searchTitle}, movie: movie, info: {mode: "Edit", action: `/movies/${movieInDb._id}`}, error: {}});
  }
  else{
    axios.get(`${apiConfig.OMDB_API_BASE_URL}?apikey=${apiConfig.OMDB_API_KEY}&t=${searchTitle}`)
    .then(async (response) => {
      // handle success
      if(response && response.data){
        //console.log(response.data);
        const genres = response.data.Genre.split(", ");
        const genreIds = [];
        for(let i=0; i < genres.length; i++){
          let x = genres[i];
          let genre = await Genre.findOne({ name: x});
          //console.log(genre);
          if(genre)
            genreIds.push(genre._id);
          else{
            genre = new Genre({name: x});
            genre = await genre.save();
            genreIds.push(genre._id);
          }
        };
        const movie = {
          title: response.data.Title,
          genreIds: JSON.stringify(genreIds),
          year: response.data.Year,
          runtime: response.data.Runtime,
          plot: response.data.Plot,
          posterUrl: response.data.Poster,
          movieUrl: ""
        };
        res.render('movies', { searchResult: {title: searchTitle}, movie: movie, info: {mode: "Add", action: "/movies/new"}, error: {message: "Movie not found in DB!"}});
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    //console.log(x);
    
  }
});

router.post("/new", async (req, res, next) => {
  const movie = new Movie({
    title: req.body.title,
    genreIds: JSON.parse(req.body.hidGenres),
    year: req.body.hidYear,
    runtime: req.body.hidRuntime,
    plot: req.body.hidPlot,
    posterUrl: req.body.hidPosterUrl,
    movieUrl: req.body.movieUrl
  });
  movie.save().then(() => {
    res.redirect("/");
  });
});

router.post("/:id", async (req, res, next) => {
  const movie = await Movie.findOne({ _id: req.params.id });
  if(movie){
    movie.overwrite({
      title: req.body.title,
      genreIds: JSON.parse(req.body.hidGenres),
      year: req.body.hidYear,
      runtime: req.body.hidRuntime,
      plot: req.body.hidPlot,
      posterUrl: req.body.hidPosterUrl,
      movieUrl: req.body.movieUrl,
      createdOn: movie.createdOn
    });
    //console.log(movie);
    movie.save().then(() => {
      res.redirect("/");
    });
  }
  
});

router.delete('/:id', async (req, res) => {
  console.log(req.params.id);
  Movie.findByIdAndDelete(req.params.id).then(() => {
    res.redirect("/");
  });
})

module.exports = router;