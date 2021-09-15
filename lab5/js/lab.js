/*
* Author: Brooke Havens
* Created: Spetember 13, 2021
* License: Public Domain
*/

//Declare variables to hold the make, model, color, and year of your vehicle, example, var year = 2004//
var make = "Kia";
var model = "Sportage";
var color = "Black";
var year = 2012;
var currentYear = 2021;

//Declare a boolean variable ownIt for whether you own it or not.//
var ownIt = true;

//Create a new variable age that subtracts the year from the current year.//
var age = currentYear - year

//Use document.writeln() to print the value of age, example, console.log("Age: " + age)//
document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Current year: " + currentYear + "<br>");
document.writeln("Own it: " + ownIt + "<br>");
document.writeln("Age: " + age + "<br>");
