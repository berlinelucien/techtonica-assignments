

// create random number between 1 and 100 -> calculate math algorithm
let randomNumber = Math.floor(Math.random() * 100) + 1;
//console.log(randomNumber);

// DOM manipulating the p classes on html under div class=resultParas
const guesses = document.querySelector('.guesses'); 
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

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

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right! 😊';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver(); //end game if guessed right on first try

    // #2nd test condition - if this is the user last turn
    // print out message game over
    } else if (guessCount === 10){
        lastResult.textContent = '!!!GAME OVER!!! 😵 ';
        lowOrHi.textContent = '';
        setGameOver();

// #3rd this condition will run if neither the first/second one is true
// if player still have more turns then we run this code
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.getElementsByClassName.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Last guess was too low! 😟'
        } else if (userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess was too high! 😟 '
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


// first two lines form text input and button set = disabled properties = true
// if we didnt the user could submit more guesses after the game is over
  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    // generate a new <button> element, add button to the bottom of HTML
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click',resetGame);
  }

 // reset the game back to 1 so the player can have another go
  function resetGame(){
    guessCount = 1;
// empties the text out of the information
// code below creats a variable containing a list of all paragraphs
// inside the <div class="resultParas"> using the querySelectorAll() 
// method, then it loops through each one, removing the text content of each.
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas){
        resetParas.textContent = '';
    }
   
// removes the reset button once we start over
    resetButton.parentNode.removeChild(resetButton);
// enable the form elements and empties and focuses the text field
// player ready to start a new guesses to be entered 
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

// removes the background color from the lastResult paragraphs
    lastResult.style.backgroundColor = 'white';
// generates a new random number so you are not guessing the same number again
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
