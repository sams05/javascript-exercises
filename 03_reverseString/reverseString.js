const reverseString = function(str) {
    const char = str.split(""); // Split the string into an array individual characters
    const charReversed = [];

    for(let i = str.length - 1; i >= 0; i--) {
        charReversed.push(char[i]);
    }

    return charReversed.join("");

    /*
        Solution with built-in array function:
        return char.reverse().join("");
    */
};

// Do not edit below this line
module.exports = reverseString;
