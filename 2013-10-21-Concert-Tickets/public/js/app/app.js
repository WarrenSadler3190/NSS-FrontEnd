'use strict';

// Firebase Schema


// Local Schema (defined in keys.js)
var venue = {};
	venue.gaCost = 0;
	venue.gaCostTotal = 0; 
	venue.gaSeatCost = 0;
	venue.gaTotalSeats = 0;
	venue.gaPeople = 0;

	venue.vipCost = 0;
	venue.vipCostTotal = 0;
	venue.vipSeatCost = 0;
	venue.vipTotalSeats = 0;
	venue.vipPeople = 0;

	venue.totalPeople = 0;
	venue.totalCost = 0;


$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  $('#createSeats').click(getValues);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function getValues() {
	var section = $('#selectSection').val();
	var numOfSeats = $('#numOfSeats').val();
		numOfSeats = parseInt(numOfSeats);
	var seatCost = $('#costPerSeat').val();
		seatCost = parseInt(seatCost);

	createSeats(section, numOfSeats, seatCost);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function createSeats(section, numOfSeats, seatCost){
	console.log('Section is: ' + section + ' Number Of Seats: ' + numOfSeats + ' Seat Cost: ' + seatCost);
	if(section === 'General Admission'){
		venue.gaSeatCost = seatCost;
	}
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
