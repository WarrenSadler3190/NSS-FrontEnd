$(document).ready(function(){


	// var selector = prompt("Which div do you want to select?");
	// var cls = prompt("Class to add");
	// var new_text = prompt("What would you like to say?");
	// $(selector).addClass(cls);
	// $(selector).text(new_text);

	// var selector_to_hide = prompt("What shall we hide?");

	// $(selector_to_hide).hide();



	function change_div_text(){

		var name = $("#texter").val();
		var color = $("#color_texter").val();


		$("#b").text(name);
		$("#b").css("background-color", color);

	}

	function age_verification()
	{
		var age = $("#age").val(); 

		age = parseInt(age);


		if(age >= 21)
		{
			$("#age_div").text("Drink Away!").css("background-color","green");
		}else if(age <= 12)
		{
			$("#age_div").text("OMG YOU'RE WAY TOO YOUNG!").css("background-color","red").clone().add("<h2>Hey Man</h2>").appendTo(document.body);

		}
		else{
			$("#age_div").text("Too young bro..").css("background-color","yellow");
		}
	}



	$("#button").click(change_div_text);

	$("#age_check").click(age_verification);



});