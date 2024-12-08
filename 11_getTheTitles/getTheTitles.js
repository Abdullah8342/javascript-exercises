const getTheTitles = function(Array) {
    let lengthOfArray = Array.length
    let Ary = [];
    for (let x = 0; x < lengthOfArray;x++){
        let A = Array[x].title;
        Ary.push(A);
    }
    return Ary;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
