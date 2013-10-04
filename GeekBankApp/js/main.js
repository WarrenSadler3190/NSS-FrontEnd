"use strict";

$(document).ready(initialize);

function initialize() {


	// $("#wrapper").fadeIn("slow");

	$("#image_button").click(setImage);

	$("#balance_button").click(setBalance);

	$("#deposit").click(makeDeposit);

	$("#withdraw").click(makeWithdraw);

	$("ul").on("click","li",undoTransaction);


	function setImage() {

			var imageSrc = $("#image_src").val();

			$(".logo").attr("src" , imageSrc);

			$("#img_field").fadeOut("slow");

		}

	function setBalance() {

		var balance = $("#balance_text").val();

		var accountBalance = parseFloat(balance, 10);

			$(".balance_amount").text(accountBalance);

			$("#balance_input").fadeOut("slow");

	}

	function makeDeposit()
	{
		var balance = $(".balance_amount").text();

		var currentBalance = parseFloat(balance);

		var depositInput = $("#deposit_withdraw_input").val();

		var	depositAmount = parseFloat(depositInput);

			currentBalance += depositAmount;

			$(".balance_amount").text(currentBalance.toFixed(2));

			addDeposit(depositAmount);

	}


	function makeWithdraw(){

		var balance = $(".balance_amount").text();

		var currentBalance = parseFloat(balance);

		var withdrawInput = $("#deposit_withdraw_input").val();

		var withdrawAmount = parseFloat(withdrawInput);

			currentBalance -= withdrawAmount

			$(".balance_amount").text(currentBalance.toFixed(2));

			addWithdraw(withdrawAmount);

	}





	function makeCurrency(amount) {

		return "$" + amount ;
	}

	function addDeposit(deposit) {

		var $item = $("<li>");

			$item.text("$" + deposit).addClass("deposit");

			$("#deposit_history").append($item);
	}

	function addWithdraw(withdraw) {

		var $item = $("<li>");

			$item.text("$" + withdraw).addClass("withdraw");

			$("#withdraw_history").append($item);
	}


	function undoTransaction() {

		var transaction = $(this);
		var balance = $(".balance_amount").text()

			balance = parseFloat(balance);

		if(transaction.hasClass('deposit')){

			var amount = transaction.text().slice(1);

				amount = parseFloat(amount);

			var projectedBalance = balance - amount;

			$(".balance_amount").text(projectedBalance);

			transaction.fadeOut("slow").remove();

		}else {

			var amount = transaction.text().slice(1);

				amount = parseFloat(amount);

			var projectedBalance = balance + amount;

			$(".balance_amount").text(projectedBalance);

			transaction.fadeOut("slow").remove();


		}
	
	}
}
