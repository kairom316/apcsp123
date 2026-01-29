function check (guess: number, answer: number) {
    if (guess == answer) {
        return "correct"
    } else if (guess < answer) {
        return "more"
    } else {
        return "less"
    }
}
info.setLife(10)
let guess = game.askForNumber("What is your guess from 1 - 1000?")
let answer = randint(0, 1000)
let result = check(guess, answer)
if (result == "less") {
    game.splash("The answer is less!")
} else if (result == "more") {
    game.splash("The answer is more!")
}
while (result != "correct") {
    guess = game.askForNumber("What is your guess?")
    result = check(guess, answer)
    if (result == "less") {
        game.splash("The answer is less!")
    } else if (result == "more") {
        game.splash("The answer is more!")
    }
}
game.splash("You win!")
game.onUpdate(function () {
    if (guess != answer) {
        info.changeLifeBy(-1)
    } else {
        info.changeScoreBy(info.life())
    }
})
