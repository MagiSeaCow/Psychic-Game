//Set all variables and intial counters.

var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var playerWins = 0;

var compWins = 0;

var guessLeft = 10;

var userGuessLog = [];

var compRanGuess = "";

//Computer picks a letter from the array
//26 letter in the alphabet, randomly generated number will determine the letter the computer picks
function compLetter() 
{
  compRanGuess = arr[(Math.floor(Math.random() * arr.length))];
  console.log(compRanGuess);
}
//Store players input
//.onkeypress captures and stores input in variable userGuess
document.onkeypress = function (event) 
{
  var userGuess = event.key;

      // Correct Guess Condition: if userGuess is equal to comRanGuess, player has won and will gain 1 point. Number of guessLeft reset back to 10. userGuessLog array is reset to empty
      if (userGuess === compRanGuess) 
      {
        playerWins++;
        guessLeft = 10;
        userGuessLog = [];
      }
      compLetter();

      // Lose Condition: if the number of guessLeft is equal to 0, the player has lost to the computer and computer will gain 1 point. Number of guessLeft reset back to 10. userGuessLog array is reset to empty
      if (guessLeft === 0)
      {
        compWins++;
        guessLeft = 10;
        userGuessLog = [];
      }

      // Incorrect Guess Condition: if userGuess is not equal to comRanGuess, number of guessLeft is decreased by 1.
      if (userGuess !== compRanGuess)
      {
        guessLeft--;
      }

      // "Logging" incorrect guesses to the webpage.

      if (userGuessLog.indexOf(userGuess) < 0)
      {
        userGuessLog.push(userGuess);
        document.getElementById('userGuessLog').innerHTML = userGuessLog;
        console.log(userGuessLog);
      };

      //Passing values to front end HTML

      document.getElementById('playerWins').innerHTML = playerWins;
      document.getElementById('compWins').innerHTML = compWins;
      document.getElementById('guessLeft').innerHTML = guessLeft;

}