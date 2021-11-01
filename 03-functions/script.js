function bark(dogName, dogWeight) {
    if (dogWeight > 20) { //Scary dog
        console.log(dogName + " says WOOF WOOF");
    } else {
        console.log(dogName + " says woof woof");
    }
}


bark("riley", 21); //riley says WOOF WOOF
bark("juliet", 2); //juliet says woof woof
bark("max"); //max says woof woof
bark(); // undefined says woof woof
bark("lyla", 21, "test"); //lyla says WOOF WOOF


// JavaScript is pass-by-value. means arguments are just a copy of variables
var age = 21;

function increment(x) {
    x++;
    console.log("x: " + x);
}

increment(age);
console.log("age: " + age);


function refrigerator(degrees) {
    var message;
    if (degrees > 10) {
        message = "I'm not an oven!";
    } else {
        message = "That's a very comfortable temperature for me.";
    }
    return message;
}

var status = refrigerator(350);

console.log(status);