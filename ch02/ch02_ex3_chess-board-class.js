const readline = require('readline-sync');

let lines = "";

let gs = readline.questionInt("grid size: ");

// outter loop - rows
for (let i = 1; i<=gs; i++) {
    // inner loop - a single row
    for (let n = 1; n<= gs; n++) {
        if ((i+n)%2==0) {
            // even row
            lines+="#";
        }
        else {
            // odd row
            lines+=" ";
        }
    }
    lines+="\n";
}
console.log(lines);