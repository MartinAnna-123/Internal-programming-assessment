
// console.log('Welcome to the high, low card game')
// console.log('You have three lives to get as many points as possible')
// console.log('Every answer you get correct you get a point')

// // creating the variable choice options for all the values of cards you can get
// const card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
// const card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
 
// let pointsPlayer1 = 0
// let lives = 0


// play();
// function play(){
// // getting the program to choose a random value from the list of 'card'
// const random = Math.floor(Math.random() * card.length);
// const random2 = Math.floor(Math.random() * card2.length);

// // ask the user to guess higher or lower
// console.log('guess higher or lower than: ' + card[random])



// // console.log('the card you drew is:' + card2[random2])
// let numberCard = parseInt (card[random])
// let numberCard2 = parseInt (card2[random2]) 
// // console.log(numberCard)

// if (isNaN(numberCard)){
//   // console.log(card2[random2])
//   if (card[random] == 'Ace'){
//     numberCard = 1
//   } else if (card[random] == 'Jack'){
//     numberCard = 11
//   } else if (card[random] == 'Queen'){
//     numberCard = 12
//   } else if (card[random] == 'King'){
//     numberCard = 13
//   }
// } 
// if (isNaN(numberCard2)){
//   // console.log(card2[random2])
//   if (card2[random2] == 'Ace'){
//     numberCard2 = 1
//   } else if (card2[random2] == 'Jack'){
//     numberCard2 = 11
//   } else if (card2[random2] == 'Queen'){
//     numberCard2 = 12
//   } else if (card2[random2] == 'King'){
//     numberCard2 = 13
//   }
// } 
// // console.log(numberCard2)


// playerGuess();
// function playerGuess(){
// guess = prompt('enter guess')
// if (guess == 'higher'){
//   higherGuess();
//   } else if (guess == 'lower') {
//   lowerGuess();
// } else {
//   console.log('incorrect imput please try again with higher or lower.')
//   playerGuess();
// }
// }

// function higherGuess(){
//   if (numberCard2 > numberCard){
//     console.log('correct')
//     console.log('the card was: ' + card2[random2])
//     pointsPlayer1 ++
    
//   } else if (numberCard2 < numberCard){
//     console.log('incorrect')
//     console.log('the card was: ' + card2[random2])
//     lives ++
    
//     } else {
//     console.log('you got the same card you now lose a point')
//     console.log('the card was: ' + card2[random2])
//     pointsPlayer1 --
    
//   }
//   if (lives < 3){
//   play();} else {
//     ending();
//   }
// }
// function lowerGuess(){
//   if (numberCard2 < numberCard){
//     console.log('correct')
//     console.log('the card was: ' + card2[random2])
//     pointsPlayer1 ++
    
//   } else if(numberCard2 > numberCard){
//      console.log('incorrect')
//     console.log('the card was: ' + card2[random2])
//     lives ++
    
//   } else {
//     console.log('you got the same card you now lose a point')
//     console.log('the card was: ' + card2[random2])
//     pointsPlayer1 --
    
//   }
//   if (lives < 3){
//   play();
//   } else {
//     ending();
//   }
//   }
// }
  

//   function ending(){
//     console.log('you ran out of lives');
//     console.log('points: ' + pointsPlayer1);
//   }



const card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

const player2card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const player2card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
 
let pointsPlayer1 = 0
let pointsPlayer2 = 0
let lives = 0
let lives2 = 0


play();
function play(){
// getting the program to choose a random value from the list of 'card'
const random = Math.floor(Math.random() * card.length);
const random2 = Math.floor(Math.random() * card2.length);
const player2random = Math.floor(Math.random() * player2card.length);
const player2random2 = Math.floor(Math.random() * player2card2.length);

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
guess1 = prompt('enter guess')
if (gues1 == 'higher'){
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
  play();} else {
    ending();
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
  play();
  } else if (lives >= 3) {
    ending1();
  } else if (lives2 < 3){
    play();
  } else if (lives2 >= 3){
    ending2();
  }
  }
}
  

  function ending1(){
    console.log('player 1, you ran out of lives');
    console.log('points: ' + pointsPlayer1);
  }
  function ending2(){
    console.log('player 2, you ran out of lives');
    console.log('points: ' + pointsPlayer2);
  }





