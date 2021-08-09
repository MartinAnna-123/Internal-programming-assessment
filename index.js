console.log('Welcome to the high, low card game')

// creating the variable choice options for all the values of cards you can get
const card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

play();
function play(){
const random = Math.floor(Math.random() * card.length);
console.log('guess higher or lower than: ' + card[random])

guess = prompt('enter guess')
if(guess == 'h' || 'higher'){
 console.log('lorem ipsum')
} else if (guess == 'l' || 'lower'){
  console.log('lorem ipsum')
} else {
  console.log('invalid answer')
  play();
}
}
