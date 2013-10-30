'use strict';

// Firebase Schema

// Local Schema (defined in keys.js)

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#search').click(searchFlickr);
  $('#clear').click(clearImages);
  $('#delete').click(deleteImage);
  $('#save').click(saveImage);
  $('#results').on('click', '.photo' ,photoWasClicked);
  $('#results').on('dblclick','.photo', removeImage)
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function searchFlickr() {
	console.log('Search is Running');
	var API_KEY = '4c6e1f137bbeb666a1c0a884b609e286';
	var PER_PAGE = 50;
	var page = 1;

	var query = $('#query').val();
	var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&text=' + query + '&per_page=' + PER_PAGE + '&page=' + page + '&format=json&jsoncallback=?';
	$.getJSON(url, results);
}

function results(data){
	console.log('looking for results')
	for(var i = 0; i < data.photos.photo.length; i++){
		createImage(data.photos.photo[i]);
	}
}

function createImage(image){
	console.log('Creating an image');
  var url = 'url(http://farm'+ image.farm +'.static.flickr.com/'+ image.server +'/'+ image.id +'_'+ image.secret +'_m.jpg)';
  var $div = $('<div>');
  $div.addClass('photo');
  $div.css('background-image',url);
  $('#results').prepend($div);
}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function photoWasClicked(){
	$(this).addClass('selected');
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clearImages(){
	$('#results').empty();
}

function removeImage(){
	$('.selected').remove();
}

function deleteImage(){
	$('.selected').fadeOut().remove();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function saveImage(){
	var $savedImage = $('.selected');
	$savedImage.removeClass('selected');
	$('#saved').prepend($savedImage);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function getValue(selector, fn){
  var value = $(selector).val();
  value = value.trim();
  $(selector).val('');

  if(fn){
    value = fn(value);
  }

  return value;
}

function parseUpperCase(string){
  return string.toUpperCase();
}

function parseLowerCase(string){
  return string.toLowerCase();
}

function formatCurrency(number){
  return '$' + number.toFixed(2);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
