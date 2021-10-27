/**
 * Author: Brooke Havens
 * Created:10/20/2021
 * License: Public Domain
 **/

//Loop through numbers 1 to 200, listing them as you go
for (i=1; i <= 200; i++) {
  var outputEl = document.getElementById("output") ;
  var writeNumber = document.createElement("p");

  if (i%105 == 0) {
    writeNumber.innerHTML = "FizzBuzzBoom";
    outputEl.appendChild(writeNumber)
    console.log("FizzBuzzBoom");
  } else if (i%35 == 0) {
    writeNumber.innerHTML = "BuzzBoom";
    outputEl.appendChild(writeNumber)
    console.log("BuzzBoom");
  } else if (i%21 == 0) {
    writeNumber.innerHTML="FizzBoom";
    outputEl.appendChild(writeNumber)
    console.log ("FizzBoom");
  } else if (i%15 == 0) {
    writeNumber.innerHTML="FizzBuzz"
    outputEl.appendChild(writeNumber)
    console.log ("FizzBuzz");
//If the number is a multiple of 3, if should print "Fizz!"
  } else if (i%3 == 0) {
    writeNumber.innerHTML = "FizzBuzz";
    outputEl.appendChild(writeNumber)
    console.log("Fizz");
//If the number is a multiple of 5, it should print "Buzz!"
  } else if (i%5 == 0) {
    writeNumber.innerHTML = "Buzz";
    outputEl.appendChild(writeNumber)
    console.log("Buzz");
//If the number is a multiple of 7, it should print "Boom!"
  } else if (i%7 == 0) {
    writeNumber.innerHTML = "Boom";
    outputEl.appendChild(writeNumber)
    console.log("Boom");
  } else {
    writeNumber.innerHTML = i;
    outputEl.appendChild(writeNumber)
    console.log(i);
  }
}
