function init()
{

	var response = prompt("Enter a color or quit: ");
	var colors = [];
	var colors_total = 0;


		while(response != "quit")
		{
			colors.push(response);
			response =  prompt('Enter another color or quit:');
		}


	// for(color in colors)
	// {
	// 	document.write("<p>" + color  + ':' + colors[color] + ' </p> <br>');

	// }

	for(var count = 0; count < colors.length; count++)
	{
		console.log('You typed in color: ' + colors[count]);
	}

	for(var loop = colors.length - 1; loop >= 0; loop--)
	{
		console.log('You typed in color: ' + colors[loop]);
		colors_total += colors[loop].length;

		console.log(colors_total);
	}

	var avg = colors_total / colors.length;
	console.log(avg);
}

document.addEventListener("DOMContentLoaded",init,false);