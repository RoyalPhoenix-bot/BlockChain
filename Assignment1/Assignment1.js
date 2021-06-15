const hash = require('crypto-js/sha256');
const prompt = require('prompt-sync')();
const string = prompt('Enter the string: ');
// console.log('The string is: ', string);
var key = 1;
var no = '0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF';
var checker = string + key;
while(hash(checker).toString()>=no){
    key++;
    checker = string + key;
}
console.log(key);



