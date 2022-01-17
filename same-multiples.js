// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
// with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 
// 361 the square of 19, 25921 the square of 161, and so on. 

function comp(array1, array2){
    for(let i=0; i < array1.length; i++){


      
      if(array2.indexOf(Math.pow(array1[i], 2)) === -1){
        return false
      } else {
        array2[(array2.indexOf(Math.pow(array1[i], 2)))] = undefined
      }
  
      
    }
   
    if(array2.every(el => el === undefined)){
      return true
    }
  
     return false
  }




const a = [121, 333, 144, 19, 161, 19, 144, 19, 11]  
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(comp(a,b));
