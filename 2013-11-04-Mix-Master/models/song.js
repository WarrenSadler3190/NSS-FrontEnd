var mongoose = require('mongoose');

var Song = mongoose.Schema({
  title:   {type: String, 
  						required: [true, 'name is required.'], 
  						match:[/^[a-zA-Z]+[a-zA-Z ]*$/,'{VALUE} is an invalid name.']},
  duration:{type: Number,
  					required: [true, 'duration is required.'],
  					match:[/[1-9][0-9]*$/, '{VALUE} is an invalid name.']},
  genres:   [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
  art:      String,
  filename: String,
  lyrics:   String,
  createdAt: {type: Date, default: Date.now}
});

mongoose.model('Song', Song);
