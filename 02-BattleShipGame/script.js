// Ship coordinates
var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location1 + 2;

// User input
var guess;

// Number of hits
var hits = 0;

// Number of guesses
var guesses = 0;

var isSunk = false;

while (!isSunk) {
    // Get user guess
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

    if (guess == null) { // User pressed cancel button
        alert("Goodbye");
        break;
    } else {
        if (guess < 0 || guess > 6) { // User pressed invalid input
            alert("Please enter a valid cell number!");
        } else {
            guesses++;

            if (guess == location1 || guess == location2 || guess == location3) {
                hits++;

                if (hits === 3) {
                    isSunk = true;
                    alert("You sank my battleship!");
                    break;
                } else {
                    alert("You hit my battleship!");
                }
            } else {
                alert("Your input is invalid!");
            }

        }
    }

}
var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses);
alert(stats);