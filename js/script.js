$( document ).ready(function() {

var block = prompt("how wide you want this thing?");
//var block = 10;
var percent = 100/block;
var i = 0;
var y = 0;

while (y<block){
	$(".container").append("<div class='col-div'></div>");
	y=y+1;
};

while (i<block){
  $(".col-div").append("<div class='row-div'></div>");
  i = i+1;
};

$(".row-div").css("width", percent+"%");
$(".col-div").css("height", percent+"%");
$(".row-div").css("height", "100%");


$(".row-div").mouseenter(function() {
  $(this).css("background-color", "red");
});

$("button").click(function(){
	$(".row-div").css("background-color", "green");
});
    
});