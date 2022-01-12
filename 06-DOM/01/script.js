var access =
    document.getElementById("code9");
var code = access.innerHTML;
code = code + " midnight";
console.log(code);

access.innerHTML = "Testing";

document.getElementById("code4").setAttribute("class", "redtext");

console.log(document.getElementById("code4").getAttribute("class"));

console.log(document.getElementById("code8").getAttributeNames());


