var moment = require('moment');
var mongoose = require('mongoose');
var _ = require('lodash');
var Post = mongoose.model('Post');

/*
 * GET /posts
 */

exports.index = function(req, res){
	Post.find(function(err, posts){
		console.log(err);
		console.log(posts);
		res.render('posts/index.jade', {title: 'Express-Blog', posts: posts});
	});
};



/*
 * GET /posts/new
 */

exports.new = function(req, res){
	var date = moment().format('MMM Do YYYY h:mm a');
  res.render('posts/new.jade', {title: 'Make A New Post', date: date});
};



/*
 * POST /posts/create
 */

exports.create = function(req, res){
	new Post(req.body).save(function(err,post,count){
  res.redirect('/posts');	
	});
};

/*
 * GET /posts/:id/edit
 */

exports.edit = function(req, res){
	Post.findById(req.params.id, function(err, post){
  res.render('posts/edit.jade', {title: 'View ' + req.params.title , post: post} );
	});
};

/*
 * PUT /posts/:id
 */

exports.update = function(req, res){
	Post.findByIdAndUpdate(req.body.id, function(err, post){
  res.redirect('/posts/');
	});
};

/*
 * GET /posts/:id
 */

exports.show = function(req, res){
	Post.findById(req.params.id, function(err, post){
  res.render('posts/show.jade', {title: 'View ' + req.params.title , post: post} );
	});
};


/*
 * DELETE /posts/:id
 */

exports.delete = function(req, res){
	Post.findByIdAndRemove(req.params.id, function(err, post){
  res.redirect('/posts');
	});
};