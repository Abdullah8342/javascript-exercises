const reverseString = function(string) {
    let reverse = '';
    for (let i = string.length - 1;i >= 0;i--) {
        reverse = reverse + string[i];
    }
    return reverse;
};
reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;
