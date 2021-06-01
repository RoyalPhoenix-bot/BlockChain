var readline = require('readline-sync');
const hash = require('crypto-js/sha256');
var fs = require('fs');
var path = require('path');
const now = require('nano-time');
var currtime = BigInt(now());
//converting currtime to a 8 bytes long binary(that is 64 bits).
var timel = currtime.toString(2).length;
var bincurrtime='';
for(var i=timel;i<64;i++){
    bincurrtime+='0';
}
bincurrtime+=currtime.toString(2);


//All ints to be converted so that they are 32 bits long(4 bytes), so the extra zeroes are added in a for loop.

var counti = readline.question('Enter the number of inputs: ');
var bincounti='';
for(var i=parseInt(counti).toString(2).length;i<32;i++){
    bincounti+='0';
}
bincounti += parseInt(counti).toString(2);
var inp_data= bincounti;
// console.log(count);
for(var i=0;i<counti;i++){
    console.log("Enter Transaction ID(in hex format) for input #",i+1,":");
    var id = readline.question();
    console.log("Enter index of output for input #",i+1,":");
    var index = readline.question();
    var binindex='';
    for(var j=parseInt(index).toString(2).length;j<32;j++){
        binindex+='0';
    }
    binindex += parseInt(index).toString(2);//parseInt converts string into integers.
    var l_sign = readline.question("Enter the Length of signature ");
    var binl_sign='';
    for(var j=parseInt(l_sign).toString(2).length;j<32;j++){
        binl_sign+='0';
    }
    binl_sign += parseInt(l_sign).toString(2);
    var sign = readline.question("Enter the signature(in hex format) ");
    inp_data += id + binindex + binl_sign + sign;
}
// console.log(inp_data);
var counto= readline.question('Enter the number of outputs: ');
var bincounto='';
for(var i=parseInt(counto).toString(2).length;i<32;i++){
    bincounto+='0';
}
bincounto = parseInt(counto).toString(2);
var out_data = bincounto;
for(var i=0;i<counto;i++){
    console.log('Enter the number of coins for output #',i+1,':');
    var coins = readline.question();
    var bicoins='';
    for(var j=parseInt(bicoins).toString(2).length;j<32;j++){
        bicoins+='0';
    }
    bicoins += parseInt(coins).toString(2);
    var directory = readline.question('Enter the complete directory of the public key(.pem file): ');
    var PUBKEY = fs.readFileSync(directory,'utf8');
    var lkey = PUBKEY.length;
    var binlkey='';
    for(var j=parseInt(lkey).toString(2).length;j<32;j++){
        binlkey+='0';
    }
    binlkey += parseInt(lkey).toString(2);
    var binpubkey='';
    for(var j=0;j<lkey;j++){
        binpubkey+= PUBKEY[j].charCodeAt(0).toString(2);
    }
    out_data += bicoins + binlkey + binpubkey;
}
//Concatenating the strings into a buffer.
const transaction_data = Buffer.from(bincurrtime + inp_data + out_data);  

var transaction_id = hash(transaction_data).toString();
transaction_id+='.dat';
fs.writeFileSync(transaction_id,transaction_data);
// console.log(transaction_id,' ',transaction_data);