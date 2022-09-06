//Change first dice

var randomNumber1 = Math.floor(Math.random()*5)+1;

var img1 = document.querySelector(".img1");

img1.src = "images/dice" + randomNumber1 + ".png";
//

//Change second dice

var randomNumber2 = Math.floor(Math.random()*5)+1;

var img2 = document.querySelector(".img2");

img2.src = "images/dice" + randomNumber2 + ".png";
//

//If statement for changing h1
var h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
  h1.innerText = "Player 1 Won!";
} else if (randomNumber2 > randomNumber1){
  h1.innerText = "Player 2 Won!";
} else {
  h1.innerText = "Draw!";
}
