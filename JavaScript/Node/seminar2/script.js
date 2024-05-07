const { calculateResultSum } = require('./calculateResultSum');
const color = require('colors');


const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log(total > 50 ? `${total}`.red : `${total}`.green);