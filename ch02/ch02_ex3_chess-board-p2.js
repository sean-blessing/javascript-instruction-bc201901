const readline = require('readline-sync');

let lines = "";
let gs = readline.questionFloat("grid size: ");
// outter loop - rows
for (let i = 1; i<=gs; i++) {
    // inner loop - a single row
    for (let n = 1; n<= gs; n++) {
        if ((n+i)%2==0) {
            // even
            lines+="#";
        }
        else {
            // odd
            lines+=" ";
        }
    }
    lines+="\n";
}
console.log(lines);