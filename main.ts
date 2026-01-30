function check (guess: number, answer: number) {
    if (guess == answer) {
        return "correct"
    } else if (guess < answer) {
        return "more"
    } else {
        return "less"
    }
}
let guess = game.askForNumber("What is your guess from 1 - 1000?", 4)
let tries = 0
let answer = randint(0, 1000)
let result = check(guess, answer)
tries += 1
if (result == "less") {
    game.splash("The answer is less! ", "You have used " + tries + " tries")
} else if (result == "more") {
    game.splash("The answer is more! ", "You have used " + tries + " tries")
}
while (result != "correct") {
    guess = game.askForNumber("What is your guess?")
    result = check(guess, answer)
    tries += 1
    if (result == "less") {
        game.splash("The answer is less! ", "You have used " + tries + " tries")
    } else if (result == "more") {
        game.splash("The answer is more! ", "You have used " + tries + " tries")
    }
    if (tries >= 10) {
        game.splash("You lose!")
        effects.confetti.endScreenEffect()
    }
}
game.splash("You win!")
