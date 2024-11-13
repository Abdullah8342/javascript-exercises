const repeatString = function(string,num) {
    let str = '';
    for (let i = 0;i < num;i++) {
        str = str + string;
    }
    return str;
};
repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
