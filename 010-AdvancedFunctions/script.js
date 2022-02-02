var passengers = [
    { name: "Sufuk Guler", paid: true, nationality: "TR"},
    { name: "Cigdem Dogan", paid: true, nationality: "DE"},
    { name: "John Doe", paid: false, nationality: "US"},
    { name: "Elizabeth Windsor", paid: true, nationality: "UK"}];



window.onload = init;
function init(){



}


function isPaid(passenger){

    return passenger.paid;

}
function sayIt(translator) {
    var phrase = translator("Hello");
    alert(phrase);
}
function hawaiianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Aloha";
}
sayIt(hawaiianTranslator);