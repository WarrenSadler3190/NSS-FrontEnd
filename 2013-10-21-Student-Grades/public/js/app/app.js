'use strict';

// Firebase Schema

// Local Schema (defined in keys.js)
var schools = [];


$(document).ready(initialize);

function initialize(fn, flag){
if(!canRun(flag)) {return;}

  $(document).foundation();
  $('#addSchool').click(clickAddSchool);
  $('#addStudent').click(clickAddStudent)
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function clickAddSchool() {
 var name = getValue('#school');
 var length = getValue('#length', parseInt);
 var width = getValue('#width', parseInt);

 var school = new School(name, length, width);
 schools.push(school)
 htmlDisplaySchoolToSelect(school);
}

function clickAddStudent() {
	var name = getValue('#student');
	var gpa = getValue('#gpa',parseFloat);
	var schoolName = $('#pick-school').val();
	var school = _.find(schools, function(s){
		return s.name === schoolName;
	});

	var student = new Student(name, gpa);
	school.students.push(student);
}

function clickAddSubject(){
	var subjectName = getValue('#subject');
	var studentName = $('#pick-student').val();
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //


// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

//CLASSES DEFINED HERE//


function School(name, length, width) {
	this.name = name;
	this.established = '1930';
	this.length = length;
	this.width = width;
	this.area = function(){return (this.length) * (this.width)};
	this.students = [];
	this.gpa = function() {
		var sum = _.reduce(this.students, function(memo, student){return memo + student.gpa;}, 0);
		var total = this.students.length;
		return sum / total;
	}
}

function Student(name, gpa){
	this.name = name;
	this.gpa = parseFloat(gpa);
	this.subjects = [];
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //

function htmlDisplaySchoolToSelect(school) {
	var $option = $('<option>');
		$option.text(school.name);
		$option.val(school.name);
		$('#pick-school').append($option);


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

function canRun(flag){
	var isQunit = $('#qunit').length > 0;
	var isFlag = flag !== undefined;
	var value = isQunit && isFlag || !isQunit;
	return value;
}

// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
// -------------------------------------------------------------------- //
