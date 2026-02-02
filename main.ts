// The function returns a value to help the player make a better guess
function check (guess: number, answer: number) {
    // Goes through the checking process, to see if the guess is correct
    if (guess == answer) {
        // If the answer is correct, then it displays correct
        return "correct"
    } else if (guess < answer) {
        // If it isn't correct than it sees if it is more than the answer
        return "more"
    } else {
        // Says less if the answer is less than the guess
        return "less"
    }
}
let tries = 0
// Sets the "guess" variable to the question "What is your guess from 1-1000?
let guess = game.askForNumber("What is your guess from 1 - 1000?", 4)
// Sets the "answer" variable to a random number between 0 and 1000.
let answer = randint(0, 1000)
// Sets result to call check
let result = check(guess, answer)
// Adds the total number of tries by one
tries += 1
// Says if the answer is less or more and displays the number of tries
if (result == "less") {
    // Displays the hint to help guess with the number of tries
    game.splash("The answer is less! ", "You have used " + tries + " tries")
} else if (result == "more") {
    // Displays the hint to help guess with the number of tries
    game.splash("The answer is more! ", "You have used " + tries + " tries")
}
// Keeps repeating this loop until the answer is correct
while (result != "correct") {
    // Sets the variable guess to your guess
    guess = game.askForNumber("What is your guess?")
    // Sets results to call check
    result = check(guess, answer)
    // Adds the total number of tries by one
    tries += 1
    // Says if the answer is less or more and displays the number of tries
    if (result == "less") {
        // Displays the hint to help guess with the number of tries
        game.splash("The answer is less! ", "You have used " + tries + " tries")
    } else if (result == "more") {
        // Displays the hint to help guess with the number of tries
        game.splash("The answer is more! ", "You have used " + tries + " tries")
    }
    // Creates a minimum number of tries to 10
    if (tries > 10) {
        // Says you lose
        game.splash("You lose!")
        // Stops the loop early
        break;
    }
}
// If you guess within 10 tries then you win
if (tries <= 10) {
    // The program says you win 
    game.splash("You win!")
}
