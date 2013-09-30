function add_three(x)
{
	return x + 3;
}

function square(n)
{
	return n * n;
}

function area(l, w)
{	
	return l * w;
}

function rectangle_perimeter(l,w)
{
	return (l * 2) + (w * 2);
}

function volume(l, w, h)
{
	return area( l * w) * h;
}

function power(base, exp)
{

	var sum = 1;


	for(var i = 0; i < exp; i++)
	{
		 sum *= base;

	}

	return sum;

}

function greetings(greeting, name)
{
	return greeting + ", " + name + "!";
}


function pig_latin(word)
{
	return word.slice(1) + word[0] + "a";
}

function pig_greetings(greeting, name)
{
	return pig_latin(greeting) + ", " + pig_latin(name) + "!";
}

function pig_sentence(sentence)
{
	var pig_latin_array = sentence.split(" ");
	var compiled_array = [];
	
	for(var i = 0; i < pig_latin_array.length; i++)
	{
	   compiled_array.push(pig_latin(pig_latin_array[i]));
	}

	return compiled_array.join(" ");

}

