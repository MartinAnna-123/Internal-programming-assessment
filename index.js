
console.log('Welcome to the high, low card game')
console.log('This is a two player game. You both have three lives to get as many points as possible, and the player with the most points at the end wins')
console.log('Every answer you get correct you get a point')




const card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

const player2card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const player2card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
 
let pointsPlayer1 = 0
let pointsPlayer2 = 0
let lives = 0
let lives2 = 0


play1();
function play1(){
// getting the program to choose a random value from the list of 'card'
const random = Math.floor(Math.random() * card.length);
const random2 = Math.floor(Math.random() * card2.length);


// ask the user to guess higher or lower
console.log(' player 1 guess higher or lower than: ' + card[random])



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
guess1 = prompt('player 1, enter guess')
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
   if (lives < 3){
  play1();
  } else if (lives >= 3) {
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
  if (lives < 3){
  play1();
  } else if (lives >= 3) {
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
console.log(' player 2 guess higher or lower than: ' + player2card[player2random])

playerGuess2();
function playerGuess2(){
  guess2 = prompt('player 2, enter guess')
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
  if (lives2 < 3){
    play2();
  } else if (lives2 >= 3){
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
    
  }  if (lives2 < 3){
    play2();
  } else if (lives2 >= 3){
    ending2();
  } }

  
}
  
  function ending1(){
    console.log('player 1, you ran out of lives');
    console.log('it is now player 2s turn')
    play2();
  }
  function ending2(){
    console.log('player 2, you ran out of lives');
    console.log('points: ' + pointsPlayer2);
    if(pointsPlayer1 > pointsPlayer2){
      console.log('player 1 wins!, they had ' + pointsPlayer1 + ' points and player 2 had ' + pointsPlayer2 + ' points')
    
    } else if (pointsPlayer1 < pointsPlayer2){
      console.log('player 2 wins!, they had ' + pointsPlayer2 + ' and player 1 had ' + pointsPlayer1 + ' points')
    }
  }





