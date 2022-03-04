// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

// For example:

// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

function isPangram(str){
    str = String(str)
    str = str.toLowerCase()
    str = str.split('')
    let alphabet="abcdefghijklmnopqurstuvwxyz"
    alphabet = alphabet.split('')
    for(let i=0; i<alphabet.length; i++){
        if(str.indexOf(alphabet[i])===-1){
            return console.log(false)
        }
    }
    return console.log(true)


}
isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False