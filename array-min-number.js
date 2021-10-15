// Input => array of numbers
// Output => the minimum value (smallest number)

// I: [7, 9, 4, 44, 13]
// O: 4

// Time Complexity is O(n) b/c operations increase linearly with increase in n

// Best Case: [1,2,3] => n
// Worst Case: [3,2,1] => n
// Average Case: [2, 3, 1] => n

const minValue = (arr) => {
    let min = arr[0]
    for(const num of arr){ // n
       num < min ? min = num : null // 0 (best case), 2 (worst case), 1 (avg case) 
    }
    return min
    // arr.sort((a, b) => a-b)
    // return arr[0]
}

console.log(minValue([7, 9, 4, 44, 13]))
console.log(minValue([17, 91, 433, 14, 113]))



// I: Number
// O => True if even, False for odd

// I: 13
// O: False

// Time complexity is O(1) because constant # of operations (1) no matter what the number is.

const isEven = (num) => {
    return num % 2 === 0 
}

console.log(isEven(13));
console.log(isEven(141));
console.log(isEven(76));
