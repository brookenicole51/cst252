/*
 * Author: Brooke Havens
 * Created: 21 September
 * License: Public Domain
 */

 //find the button
 var button = document.getElementById('my-button');

//Borrow the sort() function or my anagram() function from Lab 7.
function sortText(text) {
  return text.split('').sort().reverse().join('');
}

//Attach an event listener to your button that does the following:
//Gets the value of your input field
//Runs that value through your sort() or anagram() function and saves the results.
//Replaces the html in <div id=output> with the results.

button.addEventListener('click', function() {
    var inputEl = document.getElementById('user-name');
    var userName = inputEl.value;
    var newName = sortText(userName);
    var newText = "Whats poppin, " + newName + "?";
    var heading = document.getElementById('greet');
    heading.innerHTML = newText;
    document.getElementById('output').innerHTML = newText;
});
