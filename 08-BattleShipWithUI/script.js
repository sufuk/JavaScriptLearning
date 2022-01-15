// var model = {
//     boardSize: 7,
//     numShips: 3,
//     shipLength: 3,
//     shipsSunk: 0,
//
//     ships: [
//         { locations: [0, 0, 0], hits: ["", "", ""] },
//         { locations: [0, 0, 0], hits: ["", "", ""] },
//         { locations: [0, 0, 0], hits: ["", "", ""] }
//     ],
//
// // original hard-coded values for ship locations
//     /*
//         ships: [
//             { locations: ["06", "16", "26"], hits: ["", "", ""] },
//             { locations: ["24", "34", "44"], hits: ["", "", ""] },
//             { locations: ["10", "11", "12"], hits: ["", "", ""] }
//         ],
//     */
//
//     fire: function(guess) {
//         for (var i = 0; i < this.numShips; i++) {
//             var ship = this.ships[i];
//             var index = ship.locations.indexOf(guess);
//
//             // here's an improvement! Check to see if the ship
//             // has already been hit, message the user, and return true.
//             if (ship.hits[index] === "hit") {
//                 view.displayMessage("Oops, you already hit that location!");
//                 return true;
//             } else if (index >= 0) {
//                 ship.hits[index] = "hit";
//                 view.displayHit(guess);
//                 view.displayMessage("HIT!");
//
//                 if (this.isSunk(ship)) {
//                     view.displayMessage("You sank my battleship!");
//                     this.shipsSunk++;
//                 }
//                 return true;
//             }
//         }
//         view.displayMiss(guess);
//         view.displayMessage("You missed.");
//         return false;
//     },
//
//     isSunk: function(ship) {
//         for (var i = 0; i < this.shipLength; i++)  {
//             if (ship.hits[i] !== "hit") {
//                 return false;
//             }
//         }
//         return true;
//     },
//
//     generateShipLocations: function() {
//         var locations;
//         for (var i = 0; i < this.numShips; i++) {
//             do {
//                 locations = this.generateShip();
//             } while (this.collision(locations));
//             this.ships[i].locations = locations;
//         }
//         console.log("Ships array: ");
//         console.log(this.ships);
//     },
//
//     generateShip: function() {
//         var direction = Math.floor(Math.random() * 2);
//         var row, col;
//
//         if (direction === 1) { // horizontal
//             row = Math.floor(Math.random() * this.boardSize);
//             col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
//         } else { // vertical
//             row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
//             col = Math.floor(Math.random() * this.boardSize);
//         }
//
//         var newShipLocations = [];
//         for (var i = 0; i < this.shipLength; i++) {
//             if (direction === 1) {
//                 newShipLocations.push(row + "" + (col + i));
//             } else {
//                 newShipLocations.push((row + i) + "" + col);
//             }
//         }
//         return newShipLocations;
//     },
//
//     collision: function(locations) {
//         for (var i = 0; i < this.numShips; i++) {
//             var ship = this.ships[i];
//             for (var j = 0; j < locations.length; j++) {
//                 if (ship.locations.indexOf(locations[j]) >= 0) {
//                     return true;
//                 }
//             }
//         }
//         return false;
//     }
//
// };
//
//
// var view = {
//     displayMessage: function(msg) {
//         var messageArea = document.getElementById("messageArea");
//         messageArea.innerHTML = msg;
//     },
//
//     displayHit: function(location) {
//         var cell = document.getElementById(location);
//         cell.setAttribute("class", "hit");
//     },
//
//     displayMiss: function(location) {
//         var cell = document.getElementById(location);
//         cell.setAttribute("class", "miss");
//     }
//
// };
//
// var controller = {
//     guesses: 0,
//
//     processGuess: function(guess) {
//         var location = parseGuess(guess);
//         if (location) {
//             this.guesses++;
//             var hit = model.fire(location);
//             if (hit && model.shipsSunk === model.numShips) {
//                 view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
//             }
//         }
//     }
// }
//
//
// // helper function to parse a guess from the user
//
// function parseGuess(guess) {
//     var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
//
//     if (guess === null || guess.length !== 2) {
//         alert("Oops, please enter a letter and a number on the board.");
//     } else {
//         var firstChar = guess.charAt(0);
//         var row = alphabet.indexOf(firstChar);
//         var column = guess.charAt(1);
//
//         if (isNaN(row) || isNaN(column)) {
//             alert("Oops, that isn't on the board.");
//         } else if (row < 0 || row >= model.boardSize ||
//             column < 0 || column >= model.boardSize) {
//             alert("Oops, that's off the board!");
//         } else {
//             return row + column;
//         }
//     }
//     return null;
// }
//
//
// // event handlers
//
// function handleFireButton() {
//     var guessInput = document.getElementById("guessInput");
//     var guess = guessInput.value.toUpperCase();
//
//     controller.processGuess(guess);
//
//     guessInput.value = "";
// }
//
//
// // init - called when the page has completed loading
//
// window.onload = init;
//
// function init() {
//     // Fire! button onclick handler
//     var fireButton = document.getElementById("fireButton");
//     fireButton.onclick = handleFireButton;
//
//     // // handle "return" key press
//     // var guessInput = document.getElementById("guessInput");
//
//     // place the ships on the game board
//     model.generateShipLocations();
// }
//
//
//
//
//

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [ { locations: ["06", "16", "26"], hits: ["", "", ""] },
        { locations: ["24", "34", "44"], hits: ["", "", ""] },
        { locations: ["10", "11", "12"], hits: ["", "", ""] } ],
    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var locations = ship.locations;

            // The indexOf method searches an array for a matching
            // value and returns its index, or -1 if it can't find it
            var index = locations.indexOf(guess);
            if (index >= 0) {
                // We have a hit!
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false; //miss
     },
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
};

var view = {

    // this method takes a string message and displays it
    // in the message display area
    displayMessage: function (msg) {
        document.getElementById("messageArea").innerHTML = msg;
    },
    displayHit: function (location) {
        document.getElementById(location).setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        document.getElementById(location).setAttribute("class", "miss");
    }
};

var controller = {
    guesses: 0,
    processGuess: function(guess) {
        var location = this.parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " +
                    this.guesses + " guesses");
            }
        }
    },
    parseGuess: function (guess){
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board.");
        } else{
            var row = alphabet.indexOf(guess.charAt(0));
            var column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board.");
            } else if (row < 0 || row >= model.boardSize ||
                column < 0 || column >= model.boardSize) {
                alert("Oops, that's off the board!");
            } else {
                return row + column;
            }
        }
        return null;
    }
};

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    controller.processGuess(guess);
    guessInput.value = "";
}
var alphabet = ["A", "B", "C", "D", "E", "F", "G"];


// document.querySelectorAll("tr td:nth-of-type(1)", ':before').forEach(element => element.style.backgroundColor = "red" );
//     // element.setAttribute("style", "content: 'A';\n" +
//     //     "color: #fff;\n" +
//     //     "position: absolute;\n" +
//     //     "left: -30px;\n" +
//     //     "top: 30px;\n" +
//     //     "font-size: 30px;");
//     // // element.
//     // document.styleSheets.
//     // var element = document.getElementById("00");
//     // element.style.""
// // )

function init() {
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
}

window.onload = init;

