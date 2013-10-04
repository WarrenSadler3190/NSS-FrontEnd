"use strict";

$(document).ready(initialize);

function initialize() {


	$("#addcolor").click(addColor);
	$("#colors").on("mouseover", ".box", boxClicked);
	$("#add_box").click(addBox);
	$("#canvas").on("mouseover",".panels",paint);


	function paint() {

		var color = $("#brush").css("background-color");
		var $panel = $(this);
		$panel.css("background-color", color);

	}

	function boxClicked(){
		var $boxColor = $(this);
		var color = $boxColor.css("background-color");
		function changeBrush() {

			$("#brush").css("background-color", color);
		}
		changeBrush();
	}


	function addColor() {

		var color = $("#color").val();
		var $div = $("<div>");
		$div.addClass("box");
		$div.css("background-color",color).attr("alt", color);

		$("#colors").append($div);

		$("#color").val(" ").focus();

	}

	function addBox()
	{
		var amount = $("#amount").val();
			amount = parseInt(amount);

		for(var i=0; i < amount; i++ ){
			var $div = $("<div>");
			$div.addClass("panels");
			$("#canvas").append($div);
		}
	}

}