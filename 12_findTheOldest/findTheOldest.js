const findTheOldest = function(Array) {
    let lenghtOfArray = Array.length;
    let Age = [];
    for (let x = 0;x < lenghtOfArray;x++) {
        let A = Array[x].deathYear - Array[x].birthYear
        Age.push(A);
    }
    let oldest = Age[0];
    let index = 0;
    for (let x = 0;x < lenghtOfArray;x++) {
        if (Age[x] > oldest) {
            oldest = Age[x];
            index = x;
        }
    }
    return (Array[index].name);
};


const people = [
    { name: "Alice", birthYear: 1940, deathYear: 2020 },
    { name: "Bob", birthYear: 1920, deathYear: 2010 },
    { name: "Charlie", birthYear: 1930, deathYear: 2021 }
];

console.log(findTheOldest(people)); // Output: "Alice"

// Do not edit below this line
module.exports = findTheOldest;
