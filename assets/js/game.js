
// declare our global points
var playerPoints = 0;
var wins = 0;
var losses = 0;

//create the array with the images
var images = ["assets/images/9.png", "assets/images/8.png", "assets/images/2.png", "assets/images/15.png"]

var crystalNumber = function(){
    var temp = Math.floor(Math.random() * 12);
    console.log("I picked " + temp);
    return temp;
   }

for (var i = 0; i < images.length; i++){
    var tempNum = crystalNumber();
    $("#crystal" + [i]).html("<img src= " + images[i] + " width='100px' height='100px' value=" + tempNum + " >");
    console.log("I assigned " + [i] + " my value is " + tempNum);

    $("#crystal" + [i]).on("click", function(){
       var points = parseInt($(this).val());
       console.log("This is " + this);
       console.log("points = " + points);
       playerPoints += points; 
       console.log(playerPoints + " " + points);
    });
}