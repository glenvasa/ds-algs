const isPrime = (n) => {
  for(let i = 2; i < n; i++ ){ // 1
     if(n % i === 0){  // 1 - line doesn't run if n = 1; otherwise runs n times -1 
        return false;  // 1 - at most 1
      }
  }
  return true // 1 - line doesn't run if n is not prime
}

console.log(isPrime(9));
console.log(isPrime(5));

// Big O - Best, wost, averaqge cases

// Example "Sort numbers in array from small to big"
// Best case - array nums already sorted    nums = [1,2,3] => O(n)
// Worst case - inverse order   nums = [3,2,1] => O(n^2)
// Average case - random order: nums = [2,3,1] => O(n^2) as well 
// often times the average case and worst case will have same time complexityy