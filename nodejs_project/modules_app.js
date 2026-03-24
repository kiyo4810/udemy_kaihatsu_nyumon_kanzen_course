const my_module = require('./my_modules');
const sum = my_module.arithmetic.add(100, 54);
console.log(`足し算結果→ ${sum}`);
const difference = my_module.arithmetic.subtract(600, 94);
console.log(`引き算結果→ ${difference}`);
const concat = my_module.string_concat.concat('ラーメン', '大学');
console.log(`最高の大学→ ${concat}`);
