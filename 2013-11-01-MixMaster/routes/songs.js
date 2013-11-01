var mongoose = require('mongoose');
var Song = mongoose.model('Song');


/*
 * GET /
 */

exports.index = function(req, res){
	Song.find(function(err, songs){
  res.render('songs/index.jade', {title: 'MixMaster', songs: songs});
});
};

/*
 * GET /songs/new
 */

exports.new = function(req, res){
  res.render('songs/new.jade', {title: 'Make A New Song'});
};

/*
 * POST /songs
 */

exports.create = function(req, res){
	console.log('Before');
	console.log(req.body);
	req.body.genres = req.body.genres.split(', ');
	new Song(req.body).save(function(err, song, count){
			console.log('After');
			console.log(song);
		res.redirect('/songs');
	});
};