function range(x1, x2) {
    let arr = [];
    for (let i=x1;i<=x2;i++) {
        console.log("pushing "+i)
        arr.push(i);
    }
    return arr;
}

function sum(array) {
    let sum = 0;
    for (let i=0; i<array.length; i++) {
        console.log("adding "+array[i])
        sum += array[i];
    }
    return sum;
}

console.log("hello");
console.log("sum = "+sum(range(1,10)));
console.log("bye");