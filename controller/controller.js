var express = require('express');
var router = express.Router();
var path = require('path');
var apiKey = require('./config.js').api



router.get('*', function(req,res) {
  console.log('key:', apiKey);
  console.log('controller.js.7');
  res.sendFile(path.join(__dirname + "/../public/index.html"));
  console.log('controller.js.9');
});


// DOCS https://developers.themoviedb.org/3/getting-started
// -------SPECIFIC MOVIE INFO-----------
// IMAGE SOURCE:
// COVER https://image.tmdb.org/t/p/w640/{"poster_path" from moviedb}
// BACKDROP https://image.tmdb.org/t/p/w640/{"backdrop_path" from moviedb}
// APIKEY: c469214d41e7f2dd346083b577e86f36
// GET: https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// Query search for movie titles----------
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&query={string}
//^^result of this request is an object which contains a "results" array that contains "id" to use on specific movie.
module.exports = router;
