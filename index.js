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
// guess = prompt('enter guess')
// console.log('the card you drew is:' + card2[random2])
let numberCard = parseInt (card[random])
let numberCard2 = parseInt (card2[random2]) 
console.log(numberCard + numberCard2 )
}

// if(guess == 'h' || 'higher'){
  
//   if(card[random] > card2[random2]){
//     console.log('correct')
//   }
//   else if (card[random] < card2[random2]){
//     console.log('incorrect')
//   } else {
//     console.log('incorrect')
//   }
 
// } else if (guess == 'l' || 'lower'){
//   console.log('lorem ipsum')
// } else {
//   console.log('invalid answer')
//   play();
// }
// }
