var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Movie = require("../models/movie");
const Genre = require("../models/genre");
const dbConnection = require("../db.config");
const jwt = require("jsonwebtoken");
const genre = require("../models/genre");
const initGenres = require("../InitData/InitialGenres");
const initMovies = require("../InitData/InitialMovies");
mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true});

/* GET home page. */
router.get('/', async (req, res, next) => {
  try{
      const moviesExists = await Movie.find().limit(1).sort("-createdOn");
      if(moviesExists.length === 0){
        for (let i = 0; i < initGenres.length; i++){
          let genre = new Genre({
            name: initGenres[i].name
          });
          await genre.save();
        }

        for (let i = 0; i < initMovies.length; i++){
          let genreIds = [];
          for (let j=0; j < initMovies[i].genreNames.length; j++){
            let genre = await Genre.findOne({name: initMovies[i].genreNames[j]});
            genreIds.push(genre._id);
          }
          let movie = new Movie({
            title: initMovies[i].title,
            genreIds: genreIds,
            year: initMovies[i].year,
            runtime: initMovies[i].runtime,
            plot: initMovies[i].plot,
            posterUrl: initMovies[i].posterUrl,
            movieUrl: initMovies[i].movieUrl
          });
          await movie.save();
          
        }
      }
      /* mongoose.connection.db.listCollections({name: 'movies'}).next(async function(err, collinfo) {
        if (!collinfo) {
            // The collection exists
            for (let i = 0; i < initGenres.length; i++){
              let genre = new Genre({
                name: initGenres[i].name
              });
              await genre.save();
            }

            for (let i = 0; i < initMovies.length; i++){
              let genreIds = [];
              for (let j=0; j < initMovies[i].genreNames.length; j++){
                let genre = await Genre.findOne({name: initMovies[i].genreNames[j]});
                genreIds.push(genre._id);
              }
              let movie = new Movie({
                title: initMovies[i].title,
                genreIds: genreIds,
                year: initMovies[i].year,
                runtime: initMovies[i].runtime,
                plot: initMovies[i].plot,
                posterUrl: initMovies[i].posterUrl,
                movieUrl: initMovies[i].movieUrl
              });
              await movie.save();
              
            }
        }
    });*/
      let user = null;
      const token = req.cookies.jwtToken;
        if(token){
        
          //verifiera token 
          jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
              if(decoded && decoded.user){
                  user = decoded.user;
              }
          });
        }

      const newReleases = await Movie.find().limit(7).sort("-createdOn");
      const genres = await Genre.find().sort("name");

      const pageSize = 1;
      let pageNumber = 1;
      if(req.query.pageNumber)
      {
        pageNumber = Number.parseInt(req.query.pageNumber);
      }

      let genreWiseMovies = [];
      for(let i=0; i < pageNumber * pageSize; i++){
          if(i === genres.length)
            break;
        let genreWiseMovie = {};
        let movies = await Movie.find({genreIds: genres[i]._id}).sort("title");
        genreWiseMovie.genre = genres[i];
        genreWiseMovie.movies = movies;
        genreWiseMovies.push(genreWiseMovie);
      }

      res.render('index', { newReleases, genres, genreWiseMovies, user, pageNumber, pageSize });
  }
  catch(err){
    console.log(err);
  }
});

module.exports = router;
