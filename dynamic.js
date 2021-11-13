


function fib(n, memo) {
    let result
    console.log(memo);
    if (memo[n]) {
        return memo[n]
    }
    if (n === 0 || n === 1) {
        result = 1
    } else {
        result = fib(n-1, memo) + fib(n-2, memo)
    }
    
    memo[n] = result
    return result
}

// fib seq [1,1,2,3,5,8,13,21]

//console.log(fib(4, {})); // 5
console.log(fib(7, {})); // 21