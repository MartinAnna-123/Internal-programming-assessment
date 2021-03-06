// high low card game by Anna Martin. 03/09/21
// this is the explanation to the players about how the game wos and what to do 
console.log('Welcome to the high, low card game')
console.log('This is a two player game. You both have 1 life to get as many points as possible.')
console.log('The player with the most points at the end wins!')
console.log('Every answer you get correct you win a point.')
console.log('However, if you draw the same card you will lose a point.')

// this is the list of variables that the code will randomly pick out of when the player plays the game.
const card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

const player2card = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const player2card2 = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];


// this loop will keep going until the player enters a whole number that can be used for how many rounds they want to play
roundLoop = 0
do {
  rounds = prompt('how many rounds do you want to play?');
  if (isNaN(rounds)) {
    console.log('that is not a number please enter an integer')
  } else if (rounds < 1) {
    console.log('please enter a number bigger than 0')
  } else if (rounds != Math.floor(rounds)) {
    console.log('this is a decimal number, please enter a whole number')
  } else if (rounds > 10){
    console.log('enter a number that is 10, or smaller because 10 is the maximum rounds')
  } else {
    roundLoop++
  }
} while (roundLoop < 1)

// asking the player to enter a name that will be used throughout the game
player1Name = prompt('Player 1 please enter your name')
player2Name = prompt('Player 2 please enter your name')

// setting all the variables to the values they need to be for the game to fun effectively (points and lives systems)
let pointsPlayer1 = 0
let pointsPlayer2 = 0
let lives = 0
let lives2 = 0
let round = 0


// this is the start of the game. it is functions  in a loop and it will break out of the loop when it has completed the amount of rounds the player entered in the beginning.

play1();
function play1() {

  // getting the program to choose a random value from the list of const 'card'
  const random = Math.floor(Math.random() * card.length);
  const random2 = Math.floor(Math.random() * card2.length);
  
  // this is spacing out the text so the program is easier to read
  console.log('---------------------')

  // asking the user to guess higher or lower than the randomly picked variable
  console.log(player1Name + ' guess higher or lower than: ' + card[random])


  //  this section of code will change the strings from the list of variables to numbers. If the string is a word it will change its value to a number. For example 'king' will become 13
  let numberCard = parseInt(card[random])
  let numberCard2 = parseInt(card2[random2])

  if (isNaN(numberCard)) {
    if (card[random] == 'Ace') {
      numberCard = 1
    } else if (card[random] == 'Jack') {
      numberCard = 11
    } else if (card[random] == 'Queen') {
      numberCard = 12
    } else if (card[random] == 'King') {
      numberCard = 13
    }
  }
  if (isNaN(numberCard2)) {
    if (card2[random2] == 'Ace') {
      numberCard2 = 1
    } else if (card2[random2] == 'Jack') {
      numberCard2 = 11
    } else if (card2[random2] == 'Queen') {
      numberCard2 = 12
    } else if (card2[random2] == 'King') {
      numberCard2 = 13
    }
  }


  // this function will process the higher or lower answer and determine if it was right or wrong 
  playerGuess1();

  function playerGuess1() {
    guess1 = prompt(player1Name + ', enter guess')
    if (guess1 == 'higher') {
      higherGuess1();
    } else if (guess1 == 'lower') {
      lowerGuess1();
    } else {
      console.log('incorrect imput please try again with higher or lower.')
      playerGuess1();
    }
  }
  // this function processes the higher answer and decides if it was right or wrong in relation to the second drawn card
  function higherGuess1() {
    if (numberCard2 > numberCard) {
      console.log('correct')
      console.log('the card was: ' + card2[random2])
      pointsPlayer1++
      if (lives < 1) {
      play1();
    }

    } else if (numberCard2 < numberCard) {
      console.log('incorrect')
      console.log('the card was: ' + card2[random2])
      lives++

    } else if(numberCard2 == numberCard) {
      console.log('you got the same card you now lose a point')
      console.log('the card was: ' + card2[random2])
      pointsPlayer1--
      play1();
    } else {
      console.log('error')
    }

  }
  // this function processes the lower answer and decides if it was right or wrong in relation to the second drawn card
  function lowerGuess1() {
    if (numberCard2 < numberCard) {
      console.log('correct')
      console.log('the card was: ' + card2[random2])
      pointsPlayer1++
      if (lives < 1) {
      play1();
    }

    } else if (numberCard2 > numberCard) {
      console.log('incorrect')
      console.log('the card was: ' + card2[random2])
      lives++

    } else if (numberCard2 == numberCard){
      console.log('you got the same card you now lose a point')
      console.log('the card was: ' + card2[random2])
      pointsPlayer1--
      play1();
    } else {
      console.log('error')
    }
    // if the player got it wrong they will run out of lives so it will be the next players turn. This 'if' statement determines whether they guess agin or if its the next players turn.
    // if (lives < 1) {
    //   play1();
    // } else 
    if (lives >= 1) {
      console.log(player1Name + ', you ran out of lives');
      console.log('it is now ' + player2Name + 's turn');
      play2();
    }
  }
}


  // the second function with player two. Almost identical to play1(); 
 play2();
 function play2() {

    // getting the program to choose a random value from the list of const 'card2'
    const player2random = Math.floor(Math.random() * player2card.length);
    const player2random2 = Math.floor(Math.random() * player2card2.length);


    //  this section of code will change the strings from the list of variables to numbers. If the string is a word it will change its value to a number. For example 'king' will become 13
    let player2numberCard = parseInt(player2card[player2random])
    let player2numberCard2 = parseInt(player2card2[player2random2])


    if (isNaN(player2numberCard)) {
      if (player2card[player2random] == 'Ace') {
        player2numberCard = 1
      } else if (player2card[player2random] == 'Jack') {
        player2numberCard = 11
      } else if (player2card[player2random] == 'Queen') {
        player2numberCard = 12
      } else if (player2card[player2random] == 'King') {
        player2numberCard = 13
      }
    }
    if (isNaN(player2numberCard2)) {
      if (player2card2[player2random2] == 'Ace') {
        numberCard2 = 1
      } else if (player2card2[player2random2] == 'Jack') {
        player2numberCard2 = 11
      } else if (player2card2[player2random2] == 'Queen') {
        player2numberCard2 = 12
      } else if (player2card2[player2random2] == 'King') {
        player2numberCard2 = 13
      }
    }
    
    // this is spacing out the text so the program is easier to read
    console.log('---------------------')

    // asking the player to pick higher or lower than the randonly selected card from const 'card2'
    console.log(player2Name + ' guess higher or lower than: ' + player2card[player2random])

    // this function processes the guess that. the player entered and then refers it to the correct function depending on whether they picked higher or lower.
    playerGuess2();
    function playerGuess2() {
      guess2 = prompt(player2Name + ', enter guess')
      if (guess2 == 'higher') {
        higherGuess2();
      } else if (guess2 == 'lower') {
        lowerGuess2();
      } else {
        console.log('incorrect imput please try again with higher or lower.')
        playerGuess2();
      }
    }

    function higherGuess2() {
      if (player2numberCard2 > player2numberCard) {
        console.log('correct')
        console.log('the card was: ' + player2card2[player2random2])
        pointsPlayer2++

      } else if (player2numberCard2 < player2numberCard) {
        console.log('incorrect')
        console.log('the card was: ' + player2card2[player2random2])
        lives2++

      } else if (player2numberCard2 == player2numberCard) {
        console.log('you got the same card you now lose a point')
        console.log('the card was: ' + player2card2[player2random2])
        pointsPlayer2--

      } else {
        console.log('error')
      }
      
    }
    
    function lowerGuess2() {
      if (player2numberCard2 < player2numberCard) {
        console.log('correct')
        console.log('the card was: ' + player2card2[player2random2])
        pointsPlayer2++

      } else if (player2numberCard2 > player2numberCard) {
        console.log('incorrect')
        console.log('the card was: ' + player2card2[player2random2])
        lives2++

      } else if(player2numberCard2 == player2numberCard){
        console.log('you got the same card you now lose a point')
        console.log('the card was: ' + player2card2[player2random2])
        pointsPlayer2--
      } else {
        console.log('error')
      }
    }

    if (lives2 < 1) {
      lives2 = 0
      play2();
    } else if (lives2 >= 1) {
      round++
      endOfRounds();
    }

    function endOfRounds() {
      if (round < rounds) {
        lives = 0
        lives2 = 0
         console.log(player2Name + ', you ran out of lives');
         console.log('it is now ' + player1Name + 's turn');
        play1();
      } else if(round >= rounds) {
        console.log('----------------')
        if (pointsPlayer1 > pointsPlayer2) {
          console.log(player1Name + ' wins!, they had ' + pointsPlayer1 + ' points and ' + player2Name + ' had ' + pointsPlayer2 + ' points');
          // exitFunction();
return;

        } else if (pointsPlayer1 < pointsPlayer2) {
          console.log(player2Name + ' wins!, they had ' + pointsPlayer2 + ' points and ' + player1Name + ' had ' + pointsPlayer1 + ' points');
          // exitFunction();
return;
        } else {
          console.log('it is a draw. no-one wins');
          // exitFunction();
return;
          
        }
return;
       
      
      }
return;
      
    }
return
    
  }


// function exitFunction() {
//   console.log('the end')
//   return
// }
console.log('the end')


















