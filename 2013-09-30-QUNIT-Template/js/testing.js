test( "Filter Even Numbers", function() {
	var numbers = _.range(10);
	var expected = _.range(0,10,2);
	deepEqual(filter_evens(numbers), expected, "Evens Evens Passed" );
});

test("Filter Odds Numbers", function(){
	var numbers = _.range(10);
	var expected = [1,3,5,7,9];
	deepEqual(filter_odds(numbers),expected, "Odds Passed")

})

test("Filter short Strings", function(){
	var strings = ['hello', 'there','a','the','cat','elephant', 'encyclopedia'];
	var expected = ['a', 'the', 'cat'];
	deepEqual(filter_short_strings(strings), expected, 'testing strings for short character count')
})	

test("Filter 'A' Strings", function(){
	var strings = ['hello', 'there','a','the','cat','elephant', 'encyclopedia', 'apple', 'Aardvark'];
	var expected = ['a', 'apple', 'Aardvark'];
	deepEqual(filter_a_strings(strings), expected, 'Strings Should begin with letter a');
})	

test("Filter a String", function(){
	var strings = ['hello', 'there','a','the','cat','elephant', 'encyclopedia', 'apple', 'Aardvark'];
	deepEqual(find_string(strings, 'elephant'), 'elephant', "Look for elephant");
	deepEqual(find_string(strings, 'Aardvark'), 'Aardvark', "Looking for an Aardvark");
	deepEqual(find_string(strings, 'cat'), 'cat', "Look for cat");
	deepEqual(find_string(strings, 'not here'), undefined, "String not found.")
})	

test("Find a string ending in a particular letter", function(){
	var strings = ['hello', 'there','a','the','cats','elephants', 'encyclopedias', 'apples', 'Aardvark'];
	deepEqual(find_string_ending_letter(strings, "s"), 'cats', "Found cats");
	deepEqual(find_string_ending_letter(strings, "z"), undefined, "Should be undefined.")
})	


test("Find a string with the letter 'a'  in the second space", function (){
	var strings = ['hello', 'bake', 'steak', 'wait', 'weight'];
	var expected = ['bake', 'wait'];
	deepEqual(find_string_with_a_in_second_space(strings, 'a'),expected, "Found bake and wait");
})