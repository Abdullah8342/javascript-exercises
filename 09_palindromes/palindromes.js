const palindromes = function (word) {
    let wordLength = word.length - 1;
    let reverseTheWord = '';
    while (wordLength >= 0) {
        reverseTheWord += word[wordLength];
        wordLength--;
    }
    if (word === reverseTheWord) {
        return true;
    }
    else {
        return false;
    }
};

console.log(palindromes('tacos'));
console.log(palindromes('racecar'))
// Do not edit below this line
module.exports = palindromes;
