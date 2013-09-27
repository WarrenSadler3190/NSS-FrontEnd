var ages = [];

var sum = 0;

debugger;

for(var i = 0; i < 10; i++)
{

  var age = prompt('What is your age?'); 
      age = parseInt(age);
      ages.push(age);
      sum += ages;
}