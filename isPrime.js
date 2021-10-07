const isPrime = (n) => {
  for(let i = 2; i < n; i++ ){
     if(n % i === 0){
        return false;  
      }
  }
  return true
}

console.log(isPrime(9));
console.log(isPrime(5));