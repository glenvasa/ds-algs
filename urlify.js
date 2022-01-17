const urlify = (str) => { 
    for(let char of str){
    if(char === ' '){
       str = str.replace(char, '%20')
    }
    }
    return str
}

console.log(urlify('You really are the best'));