const arithmetic = require('./arithmetic.js');
const string_concat = require('./string_concat.js');

const sum = arithmetic.add(4, 6);
console.log(`加算結果； ${sum}`);
const difference = arithmetic.subtract(4, 6);
console.log(`加算結果； ${difference}`);

const concat = string_concat.concat('いちご', 'ミルク');
console.log(`合体飲料； ${concat}`);
