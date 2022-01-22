var crypto = require('crypto'); 
var readline = require('readline-sync');
var fs = require('fs');
var path = require('path');
let directory = readline.question('Enter the Public Key Directory: ');
let  name = readline.question('Enter the Public Key file name: ');
var PUBKEY = fs.readFileSync(path.join(directory, name), 'utf8');
let unentext = readline.question('Enter the Unencrypted text: ');
let entext = readline.question('Enter the Encrypted text: ');
var msg = crypto.publicDecrypt(PUBKEY, Buffer.from(entext, 'base64'));
if(msg == unentext){
    console.log("Signature Verified!");
}else console.log("Verification Failed");