console.log('Welcome to the high, low card game')

// creating the variable choice options for all the values of cards you can get
const card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

play();
function play(){
const random = Math.floor(Math.random() * card.length);
console.log('guess higher or lower than: ' + card[random])
const random2 = Math.floor(Math.random() * card2.length);

// ask the user to guess higher or lower
guess = prompt('enter guess')
// console.log('the card you drew is:' + card2[random2])
let numberCard = parseInt (card[random])
let numberCard2 = parseInt (card2[random2]) 
// console.log(numberCard)
// console.log(numberCard2)

while (isNaN(numberCard2)){
  // console.log(card2[random2])
  if (card2[random2] == 'ace'){
    numberCard2 = 1
  } else if (card2[random2] == 'jack'){
    numberCard2 = 11
  } else if (card2[random2] == 'queen'){
    numberCard2 = 12
  } else if (card2[random2] == 'King'){
    numberCard2 = 13
  }
} 
// console.log(numberCard2)



if(guess == 'h' || 'higher'){
  
  if(numberCard < numberCard2){
    console.log('correct')
    console.log('your card was: ' + numberCard2)
  }
  else if (numberCard > numberCard2){
    console.log('incorrect')
    console.log('your card was: ' + numberCard2)
  } else {
    console.log('incorrect')
    console.log('your card was: ' + numberCard2)
  }
 
} else if (guess == 'l' || 'lower'){
  if(numberCard > numberCard2){
    console.log('correct')
    console.log('your card was: ' + numberCard2)
  }
  else if (numberCard < numberCard2){
    console.log('incorrect')
    console.log('your card was: ' + numberCard2)
  } else {
    console.log('loremipsum')
    console.log('your card was: ' + numberCard2)
  }
} else {
  console.log('invalid answer')
  play();
}
}
