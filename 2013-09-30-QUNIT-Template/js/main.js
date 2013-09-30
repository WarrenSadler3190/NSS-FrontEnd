function filter_evens(numbers)
{
	return _.filter(numbers,function(num){return (num % 2) == 0;});
}


function filter_odds(numbers)
{
	return _.filter(numbers, function(num){return (num % 2) == 1;});
}

function filter_short_strings(strings)
{
	return _.filter(['hello', 'there','a','the','cat','elephant', 'encyclopedia'], function(string){
		return string.length <= 3;
	});
}

function filter_a_strings(strings){

	return _.filter(strings, function(string){
		return string[0].toLowerCase() == 'a';
	})
}

function find_string(strings, word){

	return _.find(strings, function(string){
		return (string == word);
	})
}

function find_string_ending_letter(strings, letter){

	return _.find(strings, function(string){
		return ((string[(string.length -1)]) == letter);
	})
}

function find_string_with_a_in_second_space(strings, word){
	return _.filter(strings, function(string){
		return string[1] == 'a';
	})
}