const fibonacci = function(number) {
   let Array = [1,1]
   for (let x = 0;x <= number;x++){
    A = Array[x] + Array[x + 1];
    Array.push(A);
   }
   // console.log(Array.length);
   return Array[number - 1];
};
// fibonacci(6)
console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(10));
// Do not edit below this line
module.exports = fibonacci;
