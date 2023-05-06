let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Check human guess correct number
const humanGuessCheck = () => {
    if (humanGuess < 0 || humanGuess > 9) {
        return "You guess is out of range. Please enter a number betweeen 0 and 9."
    }
}

// Generate a random number
const generateTarget = () => {
    let randomNumber = Math.floor((Math.random() * 10));
    return randomNumber;
}

// Compare numbers and select winner
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    /* Check human guess correct number
    const humanGuessCheck = () => {
        if (humanGuess < 0 || humanGuess > 9) {
            return "You guess is out of range. Please enter a number betweeen 0 and 9."
        }
    }*/
    const humanDifference = Math.abs(humanGuess - targetGuess);
    const computerDifference = Math.abs(computerGuess - targetGuess);
    return humanDifference <= computerDifference;
    /* This is a more concise way to say:
        if (humanDifference <= computerDifference) {
            return true;
        } else {
            return false;
        }*/
}

// Update winner's score
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
        // Same as saying humanScore++; or humanScore = humanScore + 1;
    } else if (winner === 'computer') {
        computerScore += 1;
        // Same as saying copmputerScore++; or computerScore = computerScore + 1;
    }
}

// Advance round count
const advanceRound = () => {
    currentRoundNumber += 1;
    // Same as saying currentRoundNumber += 1; or currentRoundNumber = currentRoundNumber + 1;
}