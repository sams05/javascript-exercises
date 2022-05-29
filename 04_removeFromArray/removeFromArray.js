const removeFromArray = function(arr, ...elems) {
    // Search for each element in arr and remove it
    for(const elem of elems) {
        for(let i = 0; i < arr.length; i++) {
            if(elem === arr[i]) {
                arr.splice(i, 1);
                break;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
