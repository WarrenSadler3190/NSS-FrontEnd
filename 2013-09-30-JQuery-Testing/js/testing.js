// test( "<name of the function>", function() {
//   deepEqual(<actual_value>, <expected_value>, "What this test is doing" );
//   deepEqual(<actual_value>, <expected_value>, "Testing with different arguements" );
// });


test( "1 + 1", function() {
  deepEqual( 1 + 1, 2, "Adding 1 and 1" );
});

test( "nashville[0]", function() {
  deepEqual("nashville"[2], "s", "Finds first value to be 's'" );
});

test( "Add 3", function() {
  deepEqual(add_three(5), 8, "adding 3 to 5");
  deepEqual(add_three(7), 10, "adding 3 to 7");
  deepEqual(add_three(179), 182, "adding 3 to 179");


});

test( "square", function() {
  deepEqual(square(3),  9, "squaring 3" );
  deepEqual(square(5),  25, "squaring 5" );

});

test( "area", function() {
  deepEqual(area(3,5),  15, "area of  3 and 5" );
  deepEqual(area(12,12),  144, "area of 12 and 12" );

});

test('perimeter of a rectangle', function(){
	deepEqual(rectangle_perimeter(4,2), 12, "Perimeter of a Rectangle");
});

test("power", function(){
	deepEqual(power(2,0), 1, 'power of 2 to the 1st power');
	deepEqual(power(2,1), 2, 'power of 2 to the 2st power');
	deepEqual(power(2,2), 4, 'power of 2 to the 3st power');
	deepEqual(power(2,3), 8, 'power of 2 to the 4st power');
})

test("Greetings Human!", function(){
	deepEqual(greetings("hola", "warren"), "hola, warren!", "Said Hello to Warren");
});

test("Pig Latin Function", function(){

	deepEqual(pig_latin("hello"), "elloha", "Converted to pig latin");
})

test("Pig Greeting!", function(){
	deepEqual(pig_greetings("hello", "warren"), "elloha, arrenwa!", "Said ElloHa to Warren");
});

test("Pig Sentence!", function(){
	var sentence = "four scour and seven years ago";
	var expected = "ourfa coursa ndaa evensa earsya goaa";
	deepEqual(pig_sentence(sentence), expected, "Coverted sentence to Pig Latin");
});