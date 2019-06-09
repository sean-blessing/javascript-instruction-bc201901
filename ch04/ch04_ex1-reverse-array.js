// need to validate with both even and odd # in array
let arr1 = [2,4,6,8];
//let arr1 = [2,4,6,8,10];
let arr2 = [];

for  (let i = (arr1.length-1); i >= 0; i--) {
    arr2.push(arr1[i]);
}
console.log("arr1 = "+arr1);
console.log("arr2 = "+arr2);

console.log("\nreverseArrayInPlace...");
for (let i = 0; i < arr1.length/2 ; i++) {
    let a = arr1[i];
    let end = arr1.length-1-i;
    let b = arr1[end];
    // swap 2 positions in the array
    arr1[i] = b;
    arr1[end] = a;
}
console.log("reversed arr1="+arr1);