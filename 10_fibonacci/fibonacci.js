const fibonacci = function(n) {
    n = +n; // Support strings as argument
    if(n < 1) return 'OOPS';

    if(n === 1 || n === 2) {
        return 1;
    }
    let [prevPrev, prev] = [1, 1];
    let curTerm;
    for(let i = 3; i <= n; i++) {
        curTerm = prevPrev + prev;

        prevPrev = prev;
        prev = curTerm;
    }
    return curTerm;
};

// Do not edit below this line
module.exports = fibonacci;
