// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//  })
 
//  let s = readline.question(`What's your name?`, (name) => {
//     return `${name}`;
//     readline.close()
//  });
//  console.log(s);
const readline = require('readline-sync');

let name = readline.question("What is your name?");

console.log("Hi " + name + ", nice to meet you.");

let nbrStr = readline.question("enter a #: ");
console.log(nbrStr*5);
let nbr = Number(nbrStr);
console.log(nbr*2);
let fl = readline.questionFloat("float: ");
console.log("float = "+fl);