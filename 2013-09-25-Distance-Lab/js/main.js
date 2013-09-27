// var points = [],
//     distance = 0;
// for(var i = 0; i < 2; i++)
// {
// 	var point = {};
// 	point.x = parseFloat(prompt('X Coordinate?'));
// 	point.y = parseFloat(prompt('Y Coordinate?'));
// 	points.push(point);
// }
// console.log(distance = ( Math.pow(points[0].y - points[1].y, 2) ) + ( Math.pow(points[0].x - points[1].x,2) ));

// function findThePerimeter(){
// 	var  sidesOfShape = [],
// 		 perimeter = 0,
// 		 n = parseInt(prompt("How many sides does your shape have?"));
	

// 	for(var i = 0; i < n; i++)
// 	{

// 		var side = 0;
// 		side = parseInt(prompt("What is the length of the " + (i + 1) + " side?"));
// 		sidesOfShape.push(side);	
		
// 	};

// 	for(i = 0; i < sidesOfShape.length; i++)
// 	{
// 		perimeter += sidesOfShape[i];
// 	}

	
// 	return perimeter;
// }

var  rooms = [];

var n = parseInt(prompt("How many rooms do you want?"));

for(var i = 0; i < n; i++)
{
	var room = {}; 

		room.name = prompt("What is the name of this room?");
		room.length = parseFloat(prompt("What is the length of " + room.name + " room?"));
		room.width = parseFloat(prompt("What is the width of the " + room.name + "room?"));
		room.window = parseInt(prompt("How many windows does this " + room.name + "room have?"));
		rooms.push(room);
}

var windows_number = 0;
var total_sqr = 0;


for(i=0; i < n; i++)
{

	total_sqr += (rooms[i].length * rooms[i].width);
	windows_number += rooms[i].window;

}

var total_room_cost = total_sqr * 200; 
var window_cost = windows_number * 250;
var total_house_cost = total_room_cost + window_cost;

console.log("You have " + n + " rooms.");
console.log("With a total square footage of " + total_sqr + "ft. Which cost $" + total_room_cost +".");
console.log("In total, you have " + windows_number + " windows. Which will cost $" + window_cost + ".");
console.log("Your overall total is $" + total_house_cost + ".");

// var panel = document.getElementById('test');

// panel.innerHTML() = total_house_cost;


