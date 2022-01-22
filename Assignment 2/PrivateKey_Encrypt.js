var crypto = require('crypto'); 
var readline = require('readline-sync');
var fs = require('fs');
var path = require('path');
let directory = readline.question('Enter the Private Key Directory: ');
let  name = readline.question('Enter the Private Key file name: ');
var PRIVKEY = fs.readFileSync(path.join(directory, name), 'utf8');
//console.log("", PRIVKEY);

let inp = readline.question('Enter the input to be encrypted: ');
var encmsg = crypto.privateEncrypt({
    key: PRIVKEY.toString(),
    passphrase: ' ', 
}, Buffer.from(inp , 'utf8')).toString('base64');
console.log("Encrypted with private Key: ", encmsg);