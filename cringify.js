var personas = ["an Internet troll", "an annoying Xbox Live kid", 
                "a troublesome CS:GO player", "a YouTube commenter",
                "someone pretending to be a troll",
                "you're trying to troll too hard", "a fifth grader",
                "a tween Call of Duty player",
                "you're 14 and this is funny"];

var cringeDb = {
    "!": ["!", "1"],
    "a": ["a", "A", "@", "4"],
    "b": ["b", "B", "6", "8"],
    "c": ["c", "C"],
    "d": ["d", "D"],
    "e": ["e", "E", "3", "€"],
    "f": ["f", "F"],
    "g": ["g", "G", "6", "9"],
    "h": ["h", "H"],
    "i": ["i", "I", "1"],
    "j": ["j", "J"],
    "k": ["k", "K"],
    "l": ["l", "L", "1"],
    "m": ["m", "M"],
    "n": ["n", "N"],
    "o": ["o", "O", "0"],
    "p": ["p", "P"],
    "q": ["q", "Q"],
    "r": ["r", "R"],
    "s": ["s", "S", "5", "$"],
    "t": ["t", "T"],
    "u": ["u", "U"],
    "v": ["v", "V"],
    "w": ["w", "W"],
    "x": ["x", "X"],
    "y": ["y", "Y"],
    "z": ["z", "Z"]
}

function pickSubtitle() {
    $("#dynamic-subtitle").text(personas[Math.floor((Math.random() * personas.length) + 0)]);
}

function convertChar(input) {
    input = input.toLowerCase();
    if (cringeDb[input] == undefined)
        return input;
    else {
        return cringeDb[input][Math.floor((Math.random() * cringeDb[input].length) + 0)];
    }
}

function convertString(input) {
    return input.split("").map(convertChar).join("");
}

$(document).ready(function() {
    pickSubtitle();
    
     $("#convert-input").on("input", function() {
         console.log("ad")
         $("#convert-result").text(convertString($("#convert-input").val()));
     });
     
     $("#convert-input").focus();
});