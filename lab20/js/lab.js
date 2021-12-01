/*
 * Author: Brooke Havens
 * Created November 30
 * License: Public
 */

//url for the api
 URL = "https://api.thecatapi.com/v1/images/{image_id}"

 //click to button
 $('#activate').click(getimg);

 function getimg() {
   $.ajax({
     //ENDPOINT
     url: URL,
     //type
     type: "GET",
   })
   //if succeeds
   .done(function(data) {
     console.log(data);
     var imageUrl = data.image;
     var imageHtml = "<img src='" + imageUrl + "'>";
     console.log(imageUrl);
     $("#output").html(imageHtml);
   })
 }

 getimg()
