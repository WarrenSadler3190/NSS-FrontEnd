$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('.moviePoster').on('click',clickMoviePoster);
  $('#delete').on('click',clickDelete);
}

function clickDelete() {
	$('.clicked').parent().parent().remove();
}

function clickMoviePoster() {
	$(this).toggleClass('clicked');
}
