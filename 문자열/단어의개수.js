const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');

console.log(input[0] === '' ? 0 : input.length)