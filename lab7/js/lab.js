//Create a new function and declare a variable userName and use window.prompt()
function sortUserName() {
  var userName = window.prompt("Please type your name here:");
  console.log ("userName =", userName);

//Sort the letters of the user's name and return those from the function.
  var nameArray = userName.split ('');
  console.log ("nameArray =", nameArray)

  var nameArraySort = nameArray.sort();
  console.log ("nameArraySort =", nameArraySort)

  var nameSorted = nameArraySort.join('');
  console.log ("nameSorted =", nameSorted)

  return nameSorted;
}

//call the function and output the results with document.write()

document.writeln (
  sortUserName(),"</br");
