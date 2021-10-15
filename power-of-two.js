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

// Best case: number = 13 => O(1)
// Worst Case: 1,000,000 => large number that can be divided several times by 2 but then eventually 
// can not be divided by 2 => O(log n) ; not O(n) b/c we don't have anywhere close to n operations b/c 
// the number is always divided by 2 and reduced significantly each iteration.
// 1,000,000 would only require 7 executions

//**** Actually the Worst case is not 1,000,000 it is a large number that is a power of 2 b/c 
// that will require operations until dividedNumber eventually is 1 and returns true  */
// Technically time complexity is O(2log n) => O(log n)

//Average case: O(log n)