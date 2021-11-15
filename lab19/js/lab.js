/**
 * Author:    Brooke Havens
 * Created:   11.15.2021
 * License:   Public Domain
 **/

 // Add a click event to the button
 $("#button").click(doAjaxStuff)

 // When a user clicks the button, use a jQuery AJAX call to fetch output from your API
var targetUrl = "http://numbersapi.com/random/trivia";

function doAjaxStuff() {
  $.ajax({
      url: targetUrl,
      type: "GET",
  })

  // If the request succeeds
  .done(function( data ) {
      alert("Success!");
      $("#output").html(data);
  })

  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
      alert("Failure");
  });
}
