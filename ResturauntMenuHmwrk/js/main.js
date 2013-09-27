var menu = [];

var answer = confirm("Do you want to add an item to the menu?");

if(answer)
{

	var n = parseInt(prompt('How many items would you like to add?'));

	for(var i = 0; i < n; i++)
	{
		var food_item = {};
			food_item.ingredients = [];

		food_item.name = prompt("What is name of dish: "+  (i + 1 ));
		food_item.cost = parseFloat(prompt("How much does " + food_item.name + " cost?"));
		food_item.calories = parseFloat(prompt("How many calories does " + food_item.name + " have?"));
			
		var ingredients_prompt = confirm("Does " + food_item.name + " have ingredients?");

		if(ingredients_prompt)
			{	

				var ingredients = [],

					ingredients_iterator = 0; 

				 	ingredients_iterator = parseInt(prompt("How many ingredients does your " + food_item.name + " have?"));

				for (l = 0; l < ingredients_iterator; l++) {
					
					var ingredient = prompt("What is ingredient " + (l +1)  +"?");

					food_item.ingredients.push(ingredient);

			};


		}


		menu.push(food_item);




	}

	var  cost_total = 0,
		 calories_sum = 0,
		 calories_average = 0; 


	for(var j = 0; j < n; j++)
	{
		cost_total += menu[j].cost; 
		calories_sum += menu[j].calories;
		for(var k = 0; k < menu[j].ingredients.length; k++)
		{
			console.log(menu[j].ingredients[k]);
		};
	}	



	calories_average = (calories_sum / menu.length); 

	// for (k = 0; k < n; k++)
	// {
	// 	console.log(menu[k].ingredients[k]);
	// }
	console.log("The total cost of items found on menu come to $" + cost_total + "." );
	console.log("The average amount of calories is: " + calories_average + ".");

}