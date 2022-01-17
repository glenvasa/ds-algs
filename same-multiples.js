// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
// with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 
// 361 the square of 19, 25921 the square of 161, and so on. 

// function comp(array1, array2){
//   if(array1.length !== array2.length){
//     return false
//   }
  // first check to make sure the square of each number in array1 exists in array2; if not return false 
    // for(let i=0; i < array1.length; i++){      
    //   if(array2.indexOf(Math.pow(array1[i], 2)) === -1){
    //     return false
      // once it is confirmed that the square of array[i] exists in array2, change the value in array2 to undefined
      // so that for example since we have 19 3x in array1 we make sure we have 361 3x in array2.  
    //   } else {
    //     array2[(array2.indexOf(Math.pow(array1[i], 2)))] = undefined     
    // }
   // if all values are not changed to undefined in array2 by this point, that means we have a number
  //   if(array2.every(el => el === undefined)){
  //     return true
  //   }  
  //    return false
  // }




// const a = [121, 333, 144, 19, 161, 19, 144, 19, 11]  
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

const c = [2, 3, 4, 5, 3]
const d = [9, 4, 25, 16, 9]

//more concise version

function comp(array1, array2){
  if(array1.length !== array2.length){
    return false
  }
  // first check to make sure the square of each number in array1 exists in array2; if not return false 
    for(let i=0; i < array1.length; i++){      
      if(array2.indexOf(Math.pow(array1[i], 2)) === -1){
        return false
      // once it is confirmed that the square of array[i] exists in array2, change the value in array2 to undefined
      // this will ensure that when i = 3 the 2nd time (index 4) that we return false above because there aren't two 9's  
      } else {
        array2[(array2.indexOf(Math.pow(array1[i], 2)))] = null   
    }
  }
  return true
}

console.log(comp(c,d));


