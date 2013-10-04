$(document).ready(function(){



	$('#makeBoxes').click(makingBoxes);




	function makingBoxes(){

		var numberOfBoxes = $("#amount").val();

		numberOfBoxes = parseInt(numberOfBoxes);

		for(var i = 0; i < numberOfBoxes; i++){

			$div = $("<div>");

			$div.addClass("box");

			$div.text(i);

			$("#boxes").append($div);

		}

	}

});