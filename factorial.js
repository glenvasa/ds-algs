// calc the factorial of a number
// fact(3) 3*2*1=6
// fact(5) 5*4*3*2*1= 120

const factorial = (num) => {
    if(num === 1){
        return 1
    }
    return num * factorial(num-1)
}

console.log(factorial(3));
console.log(factorial(5));