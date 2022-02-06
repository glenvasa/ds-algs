// Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

// For example: 
// solve("abc") = True, because it contains a,b,c
// solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
// solve("dabc") = True, because it contains a, b, c, d
// solve("abbc") = False, because b does not occur once.
// solve("v") = True

const adj = (str) => {
    let newStr = str.split('').sort()
    // console.log(newStr);
    // checks if any letters appear more than once
    for(let i=0; i< newStr.length; i++){
        if (newStr[i] === newStr[i + 1]){
            return false
        }
    }

    // need to check if letters are all adajcent/consecutive


    return true
}



console.log(adj('bcba')); //false b/c b appears twice
// console.log(adj('abd')) // false;
// console.log(adj('dabc')); // true
// console.log(adj('abbc')); // false
// console.log(adj('v')); // true