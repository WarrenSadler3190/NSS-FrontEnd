
/*
 * GET /colors
 */

exports.index = function(req, res){
	var colors = ['red','orange','yellow','green','blue','purple'];
  res.render('colors/index', {title: 'Colors', colors:colors});
};
