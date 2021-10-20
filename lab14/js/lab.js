/**
 * Author: Brooke Havens
 * Created:10/20/2021
 * License: Public Domain
 **/

//Loop through numbers 1 to 200, listing them as you go
for (var num=1; num <= 200; num++) {
  var outputStr = ""
//If the number is a multiple of 3, if should print "Fizz!"
  if (num % 3 == 0) {
    outputStr += "Fizz"
  }
//If the number is a multiple of 5, it should print "Buzz!"
  if (num % 5 == 0) {
    outputStr += "Buzz"
  }
//If the number is a multiple of 7, it should print "Boom!"
  if (num % 7 == 0) {
    outputStr += "Boom"
  }
  if (outputStr == "") {
    console.log(num);
  }
  else {
    console.log(outputStr + '!');
  }
}
