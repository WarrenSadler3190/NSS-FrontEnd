"use strict";

$(document).ready(initialize);

function initialize(){
	$("#add").click(addRow);
	$("table").on("click",".rsvp",rsvp)
	$("table").on("click",".removeButton",remove)
}

function remove(){
	var $button = $(this);

	 $button.parent().parent().remove();
}


function rsvp(){
	var $button = $(this);
	var $textbox = $button.prev();
	var text = $textbox.val();
	var	items = text.split(", ");
	var name = items[0];
	var food = items[1];
	var $nameTD = $button.parent().prev().prev();
	var $foodTD = $button.parent().siblings('.food');

	$nameTD.text(name);
	$foodTD.text(food);
}

function addRow(){
		var $tr = $("<tr>");
		var $name = $("<td>");
		$name.addClass("name");
		var $food = $("<td>");
		$food.addClass("food");
		var $ctrl = $("<td>");
		$ctrl.addClass("ctrl");
		var $remove = $("<td>");
		$remove.addClass("remove");

		var $input = $("<input>");
		$input.attr("type","text");

		var $button = $("<input>");
			$button.attr("type","button").val("RSVP!");
			$button.addClass("rsvp");

		var $removeButton = $("<input>");
			$removeButton.attr("type","button").val("X");
			$removeButton.addClass("removeButton");


		$ctrl.append($input,$button);
		$remove.append($removeButton);
		$tr.append([$name,$food,$ctrl,$remove]);
		$('table').append($tr);

		$input.focus();

		
}