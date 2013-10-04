$(document).ready(function(){

	function change_green(){
		$("#green-div").css("background-color",'green');
	}

	function name_count(){
		var name = $("#name_txt").val();


		$("#name_div").text((name.length));
	}

	$("#button").click(change_green);


	$("#name_btn").click(name_count);
});