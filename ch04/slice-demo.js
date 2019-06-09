let arr = [2,4,6,8,10];
console.log(arr);
// remove first element
arr.shift();
console.log(arr);

// add a first element
arr.unshift(1);
console.log("arr",arr);

let arr2 = arr.slice(2);
console.log("arr",arr);
console.log("arr2",arr2);

let arr3 = arr.slice(1,3);
console.log("arr3",arr3);

// out of bounds?
let arr4 = arr.slice(250);
console.log(arr4);
let arr5 = arr.slice(3,250);
console.log(arr5);