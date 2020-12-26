// FIND

const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo);
// 3


// findINDEX

const arr = [1, 2, 3, 4];

const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(firstIndexGreaterThanTwo);
// 2


// FILTER

const arr = [1, 2, 3, 4];

const allValuesGreaterThanTwo = arr.filter(value => value > 2);

console.log(allValuesGreaterThanTwo);
// [3, 4]


// indexOF

const arr = [1, 3, 3, 4, 3];

const firstIndexOfItem = arr.indexOf(3);

console.log(firstIndexOfItem);
// 1


// lastINDEXof

const arr = [1, 3, 3, 4, 3];

const lastIndexOfItem = arr.lastIndexOf(3);

console.log(lastIndexOfItem);
// 4


// INCLUDES

const arr = [1, 3, 3, 4, 3];

const hasItemOne = arr.includes(1);
// true

const hasItemTwo = arr.includes(2);
// false


// SOME

const arr = [1, 3, 3, 4, 3];

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);
// true


// EVERY

const arr = [1, 3, 3, 4, 3];

const allEvenNumbers = arr.every(value => value % 2 === 0);
// false