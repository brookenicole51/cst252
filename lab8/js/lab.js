//Create a named function that will take a single parameter, do a calculation on it (sqrt, sqr, addition, etc), and return the result.
function add5(x){
    var results = x + 5
    return results;
}

//test Function
console.log("What is 264+5? ", add5(264));
console.log("What is 44+5? ", add5(44));

// Use map on your array to apply your function to all the numbers in your array
array = [345, 97, 432, 8,43];
console.log("My Array", array);
var result = array.map(add5);
console.log("Array plus 5:", result);

//Now use a new anonymous function with map to do some new operation on each of the numbers in your array.
var result = array.map(function(x) {
    return x * 5;
})
console.log("Array times 5:", result);


//TASK X
//function to add text to given element
function main () {
  // get element by id
 outputElement = document.getElementById("output");
 // change contents of element
 outputElement.innerHTML = "What up wit it task X?";
}
