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
twoEl.innerHTML = "That";

//Change the color or background-color
oneEl.style.backgroundColor = "blue";
twoEl.style.backgroundColor = "blue";

//Change other CSS attributes with your JavaScript
oneEl.style.textAlign = "center";
twoEl.style.textAlign = "center";
oneEl.style.fontFamily = "helvetica";
twoEl.style.fontFamily = "helvetica";
oneEl.style.borderRadius = "10px";
twoEl.style.borderRadius = "10px";
oneEl.style.fontSize = "20px";
twoEl.style.fontSize = "20px";
oneEl.style.margin = "30px";
