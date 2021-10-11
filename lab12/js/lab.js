$("#btn-red").click(function (){
  $("#textbox1").removeClass("green-text");
	$("#textbox1").toggleClass("red-text");
});

$("#btn-green").click(function (){
	$("#textbox1").removeClass("red-text");
	$("#textbox1").toggleClass("green-text");
});
