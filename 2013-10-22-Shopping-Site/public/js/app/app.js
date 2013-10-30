'use strict';

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

// Firebase Schema
var Δdb;
var Δproducts;

// Local Schema (defined in keys.js)
	
	db.products = [];

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

$(document).ready(initialize);

function initialize(fn, flag){
  $(document).foundation();
  initializeDatabase();
  turnHandlersOn();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function initializeDatabase(){
  Δdb = new Firebase(db.keys.firebase);
  Δproducts = Δdb.child('products');

  Δproducts.on('child_added', dbProductAdded);
}

function turnHandlersOn(){
  $('#add-product').on('click', addProduct);
}

function turnHandlersOff(){
  $('#add-product').off('click', functionName);
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function addProduct() {

console.log('addProduct is Running');
var name = $('#product-name').val(),
		img = $('#product-image').val(),
		price = parseFloat($('#product-price').val()),
		weight = parseFloat($('#product-weight').val()),
		off = parseFloat($('#product-off').val());

var product = new Product(name, img, weight, price, off);
delete product.salesPrice;
Δproducts.push(product);

}


// -------------------------------------------------------------------- //
// ------------------- DB EVENT RESPONSE   ---------------------------- //
// -------------------------------------------------------------------- //


function dbProductAdded(snapshot){
	var obj = snapshot.val()
	var product = new Product(obj.name, obj.img, obj.weight, obj.price, obj.off);
			product.id = snapshot.name();

	createProductRow(product);
	db.products.push(product);
}


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //




// -------------------------------------------------------------------- //
// -----------------------  HTML CHANGING   --------------------------- //
// -------------------------------------------------------------------- //


function createProductRow(product){

var row = '<tr><td class="image-td"><img class="img" /></td><td class="name"></td><td class="weight"></td><td class="price"></td><td class="off"></td><td class="sale"></td></tr>'
var $row  = $(row);
		$row.children('.image-td').children('.img').attr('src', "img/" + product.img);
		$row.children('.name').text(product.name);
		$row.children('.weight').text(product.weight);
		$row.children('.price').text('$' + product.price);
		$row.children('.off').text(product.off + '%');
		$row.children('.sale').text('$449.10');

$('#products').append($row);

}



// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //





// -------------------------------------------------------------------- //
// -----------------------    CONSTRUCTORS  --------------------------- //
// -------------------------------------------------------------------- //


function Product(name, img, weight, price, off){

	this.name = name;
	this.img = img;
	this.weight = weight;
	this.price = price;
	this.off = off;
	this.salesPrice = function(){

		return this.price * this.off;

	};


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
