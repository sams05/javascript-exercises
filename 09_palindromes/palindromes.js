const palindromes = function (str) {
    str = str.toLowerCase();
    // Make into an array and filter out non-alphabetical characters
    const lettersArr = str.split('').filter(char => char.match(/[a-z]/));

    const letters = lettersArr.join('');
    const lettersReversed = lettersArr.reverse().join('');
    return letters === lettersReversed;
};

// Do not edit below this line
module.exports = palindromes;
