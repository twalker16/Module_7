// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// For example:

// findLongestWord(["hi", "hello"]);
// // -> 5


function findLongestWord(array){
    let countContainer = []
    let letterCounter = 0
    for(let i = 0; i<array.length; i++){
        letterCounter = array[i].split('').length
        countContainer.push(letterCounter)
    }
    let max = Math.max(...countContainer)
    return console.log(max)

}

findLongestWord(["hi", "hello"]);
// -> 5