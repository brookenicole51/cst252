/*
 * Author Brooke Havens
 * Created 11/04/2021
 * License: Public Domain
 */

class Vehicle{
  constructor(make, model, year, color, extras) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
  }
  info() {
    return(this.make + " " +
      this.model + " " +
      this.year + " is " +
      this.color  + " and " +
      this.extras
      );
  }
}

class Driving extends Vehicle {
  constructor(make, model, year, color, extras,) {
  }
}


vehicles = [];
var Kia = new Vehicle("Kia", "sportage", "2012", "black", "this is the current car Brooke owns.");
vehicles.push(Kia);
var Bike = new Vehicle("Bike", "cruiser", "2000", "orange", "this is the current bike Brooke owns.");
vehicles.push(Bike);

for (i=0; i<vehicles.length;i++) {
  outputDiv.innerText += vehicles[i].info() + "\n"
}
