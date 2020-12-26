// JOIN

const arr = [1, 2, 3, 4, 5];

arr.join('-');
// "1-2-3-4-5"


// REDUCE

const arr = [1, 2, 3, 4, 5];

arr.reduce((total, value) => total += value, 0);
// 15