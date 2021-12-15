function balance(left,right){
    let ltotal = 0
    let rtotal = 0
    let weight = ''

    for (const char of left) {
        char === "!" ? ltotal += 2 : ltotal += 3
    }

    for (const char of right) {
        char === "!" ? rtotal += 2 : rtotal += 3
    }
    
    if (ltotal > rtotal) {
        return "Left"
    } else if (rtotal > ltotal) {
        return "Right"
    }

    return "Balance"
    
  }



 // Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

 // If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
  
 // Examples
 // "!!", "??"     -->  "Right"
 // "!??", "?!!"   -->  "Left"
//  "!?!!", "?!?"  -->  "Left"
//  "!!???!????", "??!!?!!!!!!!"  -->  "Balance"


 console.log(balance("!!", "??"))  //   -->  "Right"
 console.log(balance("!??", "?!!"))  // -->  "Left"
 console.log(balance("!?!!", "?!?")) // -->  "Left"
console.log(balance("!!???!????", "??!!?!!!!!!!")) // -->  "Balance"