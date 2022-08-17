

// create random number between 1 and 100 -> calculate math algorithm
let randomNumber = Math.floor(Math.random() * 100) + 1;
//console.log(randomNumber);

// DOM manipulating the p classes on html under div class=resultParas
const guesses = document.querySelector('.guesses'); 
const lastResult = document.querySelector('.lastResult');
const low_or_Hi = document.querySelector('.low_or_Hi');
// DOM manipulating form label/form
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    //console.log('I am a placeholder');
    //declare userGuess variable set to current value
    const userGuess = Number(guessField.value);
    // print previous guesses to the screen
    if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
    }
    // there's a space `userGuess  `
    // because we do not want the numbers to be close to each other 
    guesses.textContent += `${userGuess} ` ;

    // #1 test condition - if user guess is equal to the randomNumber
    // player guess correclt and the game is won
    // show player message = "Congrulations"
    if (userGuess === randomNumber){
        lastResult.textContent = 'Congrulations! You got it right! 🤗';
        lastResult.getElementsByClassName.backgroundColor = 'green';
        low_or_Hi.textContent = '';
        setGameOver(); //end game if guessed right on first try

    // #2nd test condition - if this is the user last turn
    // print out message game over
    } else if (guessCount === 10){
        lastResult.textContent = '!!!GAME OVER!!! 😔';
        low_or_Hi.textContent = '';
        setGameOver();

// #3rd this condition will run if neither the first/second one is true
// if player still have more turns then we run this code
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.getElementsByClassName.backgroundColor = 'red';
        if(userGuess < randomNumber){
            low_or_Hi.textContent = 'Last guess was too low!'
        } else if (userGuess > randomNumber){
            low_or_Hi.textContent = 'Last guess was too high!'
        }
    }
// increment guesses +1 so player can use their turn
    guessCount++;
    guessField.value = '';
    //empty the value of the form text field and focus it again, 
    // ready for the next guess to be entered
    guessField.focus(); //note research focus()

  }
  // event listener checks for the event=click and the code 
  // we want to run when the event occurs
  guessSubmit.addEventListener('click',checkGuess);


  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
  }
 