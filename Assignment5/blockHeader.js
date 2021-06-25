var readline = require('readline-sync');
var crypto = require('crypto');
var fs = require('fs');
const now = require('nano-time');
var hash = require('crypto-js/sha256');

let path = readline.question('Enter the body block data file path:');
var data = fs.readFileSync(path);
var bodyHash = crypto.createHash('sha256').update(data).digest('hex');
var index = readline.question('Enter the index: ');
var parentHash = readline.question('Enter the hash of the parent block: ');
var target = readline.question('Enter the target value: ');
var header = index + parentHash + bodyHash + target;
var nonce = 1;
var timestamp = BigInt(now());
var initial_timestamp = timestamp;
var toHash = header +timestamp+ nonce;
while(hash(toHash).toString()>=target){
    //console.log(hash(toHash).toString());
    nonce++;
    timestamp = BigInt(now());
    toHash = header+timestamp+nonce;
}
var end_timestamp = BigInt(now());
console.log(nonce);
console.log(hash(toHash).toString());
var time = BigInt(end_timestamp-initial_timestamp).toString();
console.log(time);
