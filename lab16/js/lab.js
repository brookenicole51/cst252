/**
 * Author: Brooke Havens
 * Created:10/27/2021
 * License: Public Domain
 **/

 //Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
 function Vehicle(make, model, year, color, extras) {
   this.myMake = make;
   this.myModel = model;
   this.myYear = year;
   this.myColor = color;
   this.myExtras = extras;
   this.info = function() {
     return (this.myMake +
     " "+ this.myModel +
     " " + this.myYear + 
     " is " + this.myColor +
     " and " + this.myExtras);
   };
 }
 var outputDiv = document.getElementById("output");

 //
 vehicles = [];
 var Kia = new Vehicle("Kia", "sportage", "2012 car", "black", "this is the current car Brooke owns.");
 vehicles.push(Kia);
 var Bike = new Vehicle("Bike", "cruiser", "2000 bike", "orange", "this is the current bike Brooke owns.");
 vehicles.push(Bike);

 for (i=0; i<vehicles.length;i++) {
   outputDiv.innerText += vehicles[i].info() + "\n"
 }
