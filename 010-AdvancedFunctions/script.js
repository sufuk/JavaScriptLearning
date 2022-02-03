var passengers = [
    { name: "Sufuk Guler", paid: true, nationality: "TR"},
    { name: "Cigdem Dogan", paid: true, nationality: "DE"},
    { name: "John Doe", paid: false, nationality: "US"},
    { name: "Elizabeth Windsor", paid: true, nationality: "UK"}];



window.onload = init;
function init(){

    // Check if all passengers paid
    for (var i = 0; i < passengers.length; i++) {
        if (!isPaid(passengers[i])){
            // Remove passenger from flight
            passengers.splice(i, 1);
        }
    }

    for (var j = 0; j < passengers.length; j++) {
        console.log(passengers[j]);
        if (passengers[j].nationality === "US" || passengers[j].nationality === "UK"){
            sayIt(englishTranslator);
        }
        else if (passengers[j].nationality === "TR"){
            sayIt(turkishTranslator);
        }
        else if (passengers[j].nationality === "DE"){
            sayIt(germanTranslator);
        }

    }



}


function isPaid(passenger){

    return passenger.paid;

}
function sayIt(translator) {
    var phrase = translator("Hello");
    alert(phrase);
}

function englishTranslator(word) {
    if (word === "Hello") return "Hello";
    if (word === "Goodbye") return "Goodbye";
}

function turkishTranslator(word) {
    if (word === "Hello") return "Merhaba";
    if (word === "Goodbye") return "Gorusuruz";
}
function germanTranslator(word) {
    if (word === "Hello") return "Hallo";
    if (word === "Goodbye") return "Auf Wiedersehen";
}
