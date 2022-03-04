// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2]);
// // -> True

function addToZero(array){
    let idx = []
    let indices = []
    for(let i=0; i<array.length; i++){
        if(array[i] === 0){
            idx = array.indexOf(0)
            while(idx !== -1){
                // console.log(idx)
                indices.push(idx)
                idx = array.indexOf(0, idx+1)
            }
            if(indices.length > 1){
                return console.log(true)
            }

        }
        else{
            idx = array.indexOf(0-array[i])
            if(idx !== -1){
                return console.log(true)
            }
        }
    }
    return console.log(false)
}
addToZero([0, 0, 1, 0, 2])
//-->True

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True