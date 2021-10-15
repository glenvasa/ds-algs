// determine whether input is a power of two
// I: 8 => true
// I: 5 => false

// Alg needs to do one thing:
// Divide number and future division results by 2, until 1 is reached
// and check if the remainder is always 0

// If any division operations result in a remainder other then 0, 
// false should be immediately returned

// If remainders are always 0 and current number ultimately reduced to 1
// by division operations, then true should be returned

const isPowerOfTwo = (num) => {
    if (num < 1){
        return false
    }
    let dividedNumber = num
    while(dividedNumber !== 1){
        if(dividedNumber % 2 !== 0){
            return false
        }
        dividedNumber = dividedNumber / 2
    }
   return true
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));