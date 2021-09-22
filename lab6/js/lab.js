/*
 * Author: Brooke Havens
 * Created: 21 September
 * License: Public Domain
 */

// Declare an array//
myTransport = [" Car", " bike", " walking", " Uber", " train"];


// Declare an object//
myMainRide = {
    make : "Kia",
    model : "Sportage",
    color : "Black",
    year : 2012,
}

// Output Variables
document.writeln("My Transportation: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
