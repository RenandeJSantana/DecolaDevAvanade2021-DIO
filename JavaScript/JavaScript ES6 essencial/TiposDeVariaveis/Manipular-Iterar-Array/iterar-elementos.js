// forEACH

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log('${index}: ${value}');
});


// MAP

const arr = [1, 2, 3, 4, 5];

arr.map(value => value * 2);
// [2, 4, 6, 8, 10]


// FLAT

const arr = [1, 2, [3, 4]];

arr.flat();
// [1, 2, 3, 4]


// flatMAP

const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]);
// [2, 4, 6, 8]

arr.flatMap(value => [
    [value * 2]
]);
// [[2], [4], [6], [8]]


// KEYS

const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next();
// {value: 0, done: false}

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
// {value: 2, done: false}

arrIterator.next();
// {value: 3, done: true}


// VALUES

const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
// {value: 2, done: false}

arrIterator.next();
// {value: 3, done: false}

arrIterator.next();
// {value: 4, done: true}


// ENTRIES

const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

arrIterator.next();
// {value: [0, 1], done: false}

arrIterator.next();
// {value: [1, 2], done: false}

arrIterator.next();
// {value: [2, 3], done: false}

arrIterator.next();
// {value: [3, 4], done: true}