const leapYears = function(year) {
    const isDivisibleBy4 = year % 4 === 0;
    const isDivisibleBy100 = year % 100 === 0;
    const isDivisibleBy400 = year % 400 === 0;
    let isLeapYear;

    if(isDivisibleBy4) {
        isLeapYear = true;
        if(isDivisibleBy100) {
            isLeapYear = false;
            if(isDivisibleBy400) {
                isLeapYear = true;
            }
        }
    } else {
        isLeapYear = false;
    }

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
