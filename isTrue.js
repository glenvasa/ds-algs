// Create a function which returns the number of true values there are in an array.

// Examples
// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

const isTrue = (arr) => {
    let num = 0
    if(arr.length === 0){
        return 0
    } else {
        for (const el of arr){
            if(el === true){
                num += 1
            }
        }
    }
    return num
}

console.log(isTrue([false, true, false, true, true]));