'use strict';

$(document).ready(initialize);

function initialize()
{
	$("#colorstring").focus();
	$("#colorbutton").click(makeColorBoxes);
	$("#clearinput").click(clearinput);
	$("#clearboxes").click(clearboxes);
	$("h1").hover(getBig)
}


function getBig()
{
	var $h1 = $("<h1>"); 

 	$h1.animate({"height":"150px", "width":"150px"}, .1500);
}


function clearboxes()
{
	$("#boxes").empty();
	clearinput();
}


function clearinput() {

	$("#colorstring").val('');
	$("#colorstring").focus();

}

function makeColorBoxes() 
{
	var colorstring = $("#colorstring").val();
	var colors = colorstring.split(", ");

	for(var i = 0; i < colors.length; i++)
	{
		$div = $("<div>");


		$div.addClass("box");

		$div.text(colors[i]);

		$div.css("background-color", colors[i]);

		$("#boxes").append($div);
	}

}