const readline = require('readline-sync');

function countBs(wordUp) {
    return countChar(wordUp,"B");
}
function countChar(wordUp, char) {
    let c = 0;
    // count the number of char's and return 
    for (let i = 0; i< wordUp.length; i++) {
        if (wordUp[i].toUpperCase()==char.toUpperCase()) {
            c++;
        }
    }
    return c;
}

let theWord = readline.question("What's the B word, Bird? ");
console.log(countBs(theWord));
let theWord2 = readline.question("What's another word?");
let char = readline.question("Character?");
console.log(countChar(theWord2, char));

