const leapYears = function(year) {
    if (year % 4 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else {
        return false;
    }
};

console.log(leapYears(2000)) // is a leap year: returns true
console.log(leapYears(1985)) // is not a leap year: returns false
console.log(leapYears(2024))
// Do not edit below this line
module.exports = leapYears;
