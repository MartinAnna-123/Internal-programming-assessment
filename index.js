
console.log('Welcome to the high, low card game')
console.log('This is a two player game. You both have 1 life to get as many points as possible. You can choose to play more rounds when you are both out of lives, and the player with the most points at the end wins')
console.log('Every answer you get correct you get a point but if you draw the same card you will lose a point')

roundLoop = 0
do{
rounds = prompt('how many rounds do you want to play?');

if (isNaN(rounds)){
  console.log('that is not a number please enter a whole integer')
} else if (rounds < 1){
  math.abs(rounds)
} else {
  roundLoop ++
}
} while (roundLoop < 1)





player1Name = prompt('Player 1 please enter your name')
player2Name = prompt('Player 2 please enter your name')




const card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

const player2card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const player2card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
 
let pointsPlayer1 = 0
let pointsPlayer2 = 0
let lives = 0
let lives2 = 0

do{
play1();
function play1(){
// getting the program to choose a random value from the list of 'card'
const random = Math.floor(Math.random() * card.length);
const random2 = Math.floor(Math.random() * card2.length);


// ask the user to guess higher or lower
console.log( player1Name + ' guess higher or lower than: ' + card[random])



// console.log('the card you drew is:' + card2[random2])
let numberCard = parseInt (card[random])
let numberCard2 = parseInt (card2[random2]) 
// console.log(numberCard)

if (isNaN(numberCard)){
  // console.log(card2[random2])
  if (card[random] == 'Ace'){
    numberCard = 1
  } else if (card[random] == 'Jack'){
    numberCard = 11
  } else if (card[random] == 'Queen'){
    numberCard = 12
  } else if (card[random] == 'King'){
    numberCard = 13
  }
} 
if (isNaN(numberCard2)){
  // console.log(card2[random2])
  if (card2[random2] == 'Ace'){
    numberCard2 = 1
  } else if (card2[random2] == 'Jack'){
    numberCard2 = 11
  } else if (card2[random2] == 'Queen'){
    numberCard2 = 12
  } else if (card2[random2] == 'King'){
    numberCard2 = 13
  }
} 
// console.log(numberCard2)


playerGuess1();
function playerGuess1(){
guess1 = prompt(player1Name + ', enter guess')
if (guess1 == 'higher'){
  higherGuess1();
  } else if (guess1 == 'lower') {
  lowerGuess1();
} else {
  console.log('incorrect imput please try again with higher or lower.')
  playerGuess1();
}
}
function higherGuess1(){
  if (numberCard2 > numberCard){
    console.log('correct')
    console.log('the card was: ' + card2[random2])
    pointsPlayer1 ++
    
  } else if (numberCard2 < numberCard){
    console.log('incorrect')
    console.log('the card was: ' + card2[random2])
    lives ++
    
    } else {
    console.log('you got the same card you now lose a point')
    console.log('the card was: ' + card2[random2])
    pointsPlayer1 --
    
  }
   if (lives < 1){
  play1();
  } else if (lives >= 1) {
    ending1();
  }
}
function lowerGuess1(){
  if (numberCard2 < numberCard){
    console.log('correct')
    console.log('the card was: ' + card2[random2])
    pointsPlayer1 ++
    
  } else if(numberCard2 > numberCard){
     console.log('incorrect')
    console.log('the card was: ' + card2[random2])
    lives ++
    
  } else {
    console.log('you got the same card you now lose a point')
    console.log('the card was: ' + card2[random2])
    pointsPlayer1 --
    
  }
  if (lives < 1){
  play1();
  } else if (lives >= 1) {
    ending1();
  }
}
}


play2();
function play2(){

const player2random = Math.floor(Math.random() * player2card.length);
const player2random2 = Math.floor(Math.random() * player2card2.length);

let player2numberCard = parseInt (player2card[player2random])
let player2numberCard2 = parseInt (player2card2[player2random2]) 
// console.log(numberCard)

if (isNaN(player2numberCard)){
  // console.log(card2[random2])
  if (player2card[player2random] == 'Ace'){
    player2numberCard = 1
  } else if (player2card[player2random] == 'Jack'){
    player2numberCard = 11
  } else if (player2card[player2random] == 'Queen'){
    player2numberCard = 12
  } else if (player2card[player2random] == 'King'){
    player2numberCard = 13
  }
} 
if (isNaN(player2numberCard2)){
  // console.log(card2[random2])
  if (player2card2[player2random2] == 'Ace'){
    numberCard2 = 1
  } else if (player2card2[player2random2] == 'Jack'){
    player2numberCard2 = 11
  } else if (player2card2[player2random2] == 'Queen'){
    player2numberCard2 = 12
  } else if (player2card2[player2random2] == 'King'){
    player2numberCard2 = 13
  }
} 
console.log( player2Name + ' guess higher or lower than: ' + player2card[player2random])

playerGuess2();
function playerGuess2(){
  guess2 = prompt(player2Name + ', enter guess')
if (guess2 == 'higher'){
  higherGuess2();
  } else if (guess2 == 'lower') {
  lowerGuess2();
} else {
  console.log('incorrect imput please try again with higher or lower.')
  playerGuess2();
}
}

function higherGuess2(){
  if (player2numberCard2 > player2numberCard){
    console.log('correct')
    console.log('the card was: ' + player2card2[player2random2])
    pointsPlayer2 ++
    
  } else if (player2numberCard2 < player2numberCard){
    console.log('incorrect')
    console.log('the card was: ' + player2card2[player2random2])
    lives2 ++
    
    } else {
    console.log('you got the same card you now lose a point')
    console.log('the card was: ' + player2card2[player2random2])
    pointsPlayer2 --
    
  }
  if (lives2 < 1){
    play2();
  } else if (lives2 >= 1){
    ending2();
  }
}
function lowerGuess2(){
  if (player2numberCard2 < player2numberCard){
    console.log('correct')
    console.log('the card was: ' + player2card2[player2random2])
    pointsPlayer2 ++
    
  } else if(player2numberCard2 > player2numberCard){
     console.log('incorrect')
    console.log('the card was: ' + player2card2[player2random2])
    lives2 ++
    
  } else {
    console.log('you got the same card you now lose a point')
    console.log('the card was: ' + player2card2[player2random2])
    pointsPlayer2 --
    
  }  if (lives2 < 1){
    play2();
  } else if (lives2 >= 1){
    ending2();
  } }
}
  
  function ending1(){
    console.log(player1Name + ', you ran out of lives');
    console.log('it is now ' + player2Name + 's turn')
    play2();
  }
  function ending2(playAgain){
    console.log(player2Name + ', you ran out of lives');
    console.log('points: ' + pointsPlayer2);
    playAgain = prompt('do you want to play another round?');
    if(playAgain == 'yes' || playAgain == 'y'){
      let lives = 0;
      let lives2 = 0;
      play1();
    } else if(playAgain == 'no' || playAgain == 'n'){
      endOfRounds();
      }}

    function endOfRounds(){
     if(pointsPlayer1 > pointsPlayer2){
      console.log(player1Name + ' wins!, they had ' + pointsPlayer1 + ' points and player 2 had ' + pointsPlayer2 + ' points')
    
     }else if (pointsPlayer1 < pointsPlayer2){
      console.log(player2Name + ' wins!, they had ' + pointsPlayer2 + ' and player 1 had ' + pointsPlayer1 + ' points')
    } else {
      console.log('it is a draw. no-one wins')
    }
    
     console.log('the end')
    }
    
  
    





