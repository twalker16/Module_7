// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

// For example:

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

function hasUniqueChars(word){
    let testVar = true
    word = String(word)
    let wordArr = word.split('')
    // let letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for(let i = 0; i <= wordArr.length - 1; i++){
        for(j = 0; j <= wordArr.length - 1; j++){
            if(wordArr[i] === wordArr[j] && i !== j){
                testVar = false
            }
            }
        
        }
        console.log(testVar)
}
hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False