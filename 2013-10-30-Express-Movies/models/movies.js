var mm = require('money-math');





var Movie = function(genericMovie){
	var save = this;
	this.title = genericMovie.title;
	this.image = genericMovie.image;
	this.color = genericMovie.color;
	this.rated = genericMovie.rated;
	this.studio = genericMovie.studio;
	this.gross = genericMovie.gross;
	this.numTheatres = genericMovie.numTheatres;
	this.grossPerTheater = function(){
		return this.gross / this.numTheatres;
	};
	this.grossUSD = function(){
		return "$" + mm.format('USD', mm.floatToAmount(this.gross));
	};
	this.grossPerTheaterUSD = function(){
		return "$" + mm.format('USD', mm.floatToAmount(this.grossPerTheater()));		
	};
};

module.exports = Movie; 