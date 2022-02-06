// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


const addUp = (num, total = 0, val = 1) => {
    if (val > num){
     return total
 }
    total += val
    return addUp(num, total, val+1)
}

// function addUp(num) {
//     if (num === 1) return 1;
//     return num + addUp(num - 1);
//   }

console.log(addUp(4))// ➞ 10
console.log(addUp(13))// ➞ 91
console.log(addUp(600))// ➞ 180300