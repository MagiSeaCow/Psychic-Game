var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;

var loses = 0;

var guessLeft = 8;

var userGuess = [];

while (guessLeft < 8)
{
    var userInput = prompt("Guess my letter =) (lower case only)");
    userGuess.push(userInput);
    var compGuess = arr[Math.floor(Math.random() * arr.length)];
    
    if (userInput === compGuess)
    {
      wins++;
      console.log(wins);
    }
    else
    {
      loses++;
      console.log(loses);
    }
}