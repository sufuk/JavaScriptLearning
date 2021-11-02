

// Basic array initialization
var naturals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var friends = ["chandler", "monica", "phoebe", "rachel", "ross"];

// In javascript its allowed to have different types in same array
var someArray = ["sufuk ", "is ", "the ", "number", 1];

//Empty array declaration
var emptyArray = [];


function phraseGenerator(){

    var rand1 = Math.floor((Math.random()) * naturals.length);
    var rand2 = Math.floor((Math.random()) * friends.length);
    var rand3 = Math.floor((Math.random()) * someArray.length);

    var phrase = naturals[rand1] + " " + friends[rand2] + " " + someArray[rand3];
    alert(phrase);

}
phraseGenerator();

// Iteration over arrays
var i = 0;
while (i < friends.length){
    console.log(friends[i]);
    i++;
}

for (var j = 0; j < someArray.length; j++){
    console.log(someArray[j]);
}