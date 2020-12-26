// PUSH

const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.push('acerola');

console.log(arrLength);
// 4

console.log(arr);


// POP

const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.pop();

console.log(removedItem);
// 'abacate'

console.log(arr);


// UNSHIFT

const arr = ['banana', 'melancia', 'abacate'];
const arrLength = arr.unshift('acerola');

console.log(arrLength);
// 4

console.log(arr);
// ['acerola', 'banana', 'melancia', 'abacate'];


// SHIFT

const arr = ['banana', 'melancia', 'abacate'];
const removedItem = arr.shift();

console.log(removedItem);
// 'banana'

console.log(arr);
// ['melancia', 'abacate'];


// CONCAT

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const novoArr = arr.concat(arr2);

console.log(arr);
// (3) [1, 2, 3]

console.log(arr2);
// (3) [4, 5, 6]

console.log(novoArr);
// (6) [1, 2, 3, 4, 5, 6]


// SLICE

const arr = [1, 2, 3, 4, 5];

arr.slice(0, 2);
// [1, 2]

arr.slice(2);
// [3, 4, 5]

arr.slice(-1);
// [5]

arr.slice(-3);
// [3, 4, 5]


// SPLICE

const arr = [1, 2, 3, 4, 5];

arr.splice(2);
//[3, 4, 5]

console.log(arr);
// [1, 2]

arr.splice(0, 0, 'first');
// []

console.log(arr);
// ['first', 1, 2]