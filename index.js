const repeats = arr => arr.filter(n => arr.lastIndexOf(n) === arr.indexOf(n)).reduce((a,b) => a + b, 0);

console.log(repeats([2,4,2,5,7,6,6,8,9,1]))

const getAverage = arr => arr.reduce((a,b) => a + b, 0)/ arr.length;

console.log(getAverage([2, 2, 2, 20]))

const sumMix = arr => arr.reduce((a,b) => Number(a) + Number(b), 0);

console.log(sumMix([9, '3', '7', 3]))