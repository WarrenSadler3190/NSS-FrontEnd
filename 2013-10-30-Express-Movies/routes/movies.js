var db = require('../modules/database');
var file = __dirname + '/../db/movies.json';
var Movie = require('../models/movies');
var _ = require('lodash');

/*
 * GET /movies
 */

exports.index = function(req, res){
	var genericMovies = db.read(file);
	var movies = _.map(genericMovies, function(genericMovie){
		return new Movie(genericMovie);

	});

  res.render('movies/index', {title: 'Express', movies: movies});
};


/*
 * DELETE /movies/The Matrix
 */

 exports.delete = function(req, res){
 	var title = req.params.title;
 	var movies = db.read(file);
 	movies = _.reject(movies,function(movie){return movie.title === title;});
 	db.write(file, movies);
 	res.redirect('/movies');
 };

  exports.create = function(req, res){
  var movies = db.read(file);
  var movie = {};
  movie.title = req.body.title;
  movie.image = req.body.image;
  movie.color = req.body.color;
  movie.rated = req.body.rated;
  movie.studio = req.body.studio;
  movie.gross = req.body.gross;
  movie.numTheatres = req.body.numTheatres;
  movies.push(movie)
  db.write(file, movies);
  res.redirect('/movies');

 };