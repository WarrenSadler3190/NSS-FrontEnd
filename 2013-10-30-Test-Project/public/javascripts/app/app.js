$(document).ready(initialize);

function initialize(){
  $(document).foundation();
	$('.color').on('click',changeMe);
}

function changeMe(){
	$(this).css('background-color','white');
	// $('th').text('White');
}