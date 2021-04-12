//create secret number

//ask user for guess

//check guess

var secretNumber = 4;

var guess = Number(prompt("Guess a number"))
alert(guess);

//check if guessed correctly
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT!")
}
//check if guess is higher
else if(guess > secretNumber) {
    alert("Too high, guess it again");
} else {
    alert("Too low, guess it again");
}
//otherwise check if lower

