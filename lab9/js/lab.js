//Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");
console.log("outputEl: ", outputEl);

//Create two new elements with document.createElement("button") and assign them to variables oneEl and twoEl, respectively.
var oneEl = document.createElement("button");
var twoEl = document.createElement("button");

//Append them to your outputEl with appendChild()
outputEl.appendChild(oneEl);
outputEl.appendChild(twoEl);

//Give them a unique ID
oneEl.id = "Element One"
twoEl.id = "Element Two"

//Change the button text to something
oneEl.innerHTML = "This";
oneEl.innerHTML = "That";

//Change the color or background-color
oneEl.style.backgroundcolor = "purple";
twoEl.style.backgroundcolor = "purple";

//Change other CSS attributes with your JavaScript
