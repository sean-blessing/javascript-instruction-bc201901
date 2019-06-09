let lines = "";

// outter loop - rows
for (let i = 1; i<=8; i++) {
    // inner loop - a single row
    for (let n = 1; n<= 4; n++) {
        if (i%2==0) {
            // even row
            lines+="# ";
        }
        else {
            // odd row
            lines+=" #";
        }
    }
    lines+="\n";
}
console.log(lines);