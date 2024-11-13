const removeFromArray = function(Array,item) {
    let NewArray = [];
    for (let i = 0;i < Array.length;i++) {
        if (Array[i] === item) {
            continue;
        }
        else {
            NewArray.push(Array[i]);
        }
    }
    return NewArray;
};
console.log(removeFromArray([1, 2, 3, 4], 3));
// Do not edit below this line
module.exports = removeFromArray;
