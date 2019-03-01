
// declare our global points
var playerPoints = 0;
var wins = 0;
var losses = 0;
var isWon = false;  
var min = 19;
var max = 120;
var compScore = getRandom(min, max);
console.log(compScore);

//create the array with the images
var images = ['assets/images/9.png', "assets/images/8.png", "assets/images/2.png", "assets/images/15.png"]

var crystalNumber = function(){
    var temp = Math.floor(Math.random() * 12);
    console.log("I picked " + temp);
    return temp;
   }   

   function getRandom(min, max){
     var temp = Math.floor(Math.random()*(max-min+1)+min)
      $("#computerScore").text(temp);
      return temp;
   }

function resetGame(){
   for(var i = 0; i < images.length; i++){
      $("#crystal" + [i]).empty();
   }
   generateGame();
   playerPoints = 0;
   $("#playerScore").text(playerPoints);
   compScore = getRandom(min, max);
   
}

function checkWin(){
   if (playerPoints === compScore){
      wins++;
      alert("You Win!");
      $("#wins").text("Wins: " + wins);
       resetGame();
   } else if (playerPoints > compScore){
      losses++;
      alert("You Lose");
      $("#losses").text("Losses: " + losses);
      resetGame();
   }
}

function generateGame(){
   for (var i = 0; i < 4; i++){
       var imgElement = $('<img/>');
       imgElement.attr('src', images[i]);
       imgElement.attr('data-points', crystalNumber());
       imgElement.on('click', function () {
          var tempNum = parseInt($(this).attr('data-points'));
          playerPoints += tempNum;
          $("#playerScore").text(playerPoints);
          checkWin();
       })
       $('#crystal' + [i]).append(imgElement);
   }

}

resetGame();







