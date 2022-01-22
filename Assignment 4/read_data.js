/*SOLUTION DETAILS:
Reading the transaction data file by iterating through it, pausing at intervals to get convert the binary data to decimal/hex/char.
1. First 8 bytes correspond to the time stamp.
2. Next 4 bytes give the Number of inputs.
3. For each input:
    a)First 4 bytes give transaction id.
    b)Next 4 bytes give the index of the output.
    c)Next 4 bytes give the length of the signature: 'l'.
    d)Last 'l' bytes give the signature.
4. Next 4 bytes give the Number of outputs.
5. For each output:
    a)First 8 bytes give the number of coins.
    b)Next 4 bytes give the length of the Public Key: 'l'.
    c)Last 'l' bytes give the public key.*/

var readline = require('readline-sync');
var fs = require('fs');
var crypto = require('crypto');

function readInt(str, i , length){
    if(length==4){
        var int = 0;
        for(var j=0;j<length;j++){
            int = int <<8;
            int += str[i+j];
        }
        return int;
    }else{
        var int = 0n;
        for(var j=0;j<length;j++){
            int*=256n;
            int+= BigInt(str[i+j]);
        }
    }
}
var i=0;
let path = readline.question('Enter the Transaction data file directory: ');
var str = fs.readFileSync(path);
//calculating hash again
let hash = crypto.createHash('sha256').update(str).digest('hex');
hash = hash.toString();
var timestamp = readInt(str,i,8);
i+=8;
console.log('Timestamp: ',timestamp);
console.log('Transaction ID: ',hash);
var ninputs = readInt(str,i,4);
i+=4;
for(var j=0;j<ninputs;j++){
    var id = str.toString('hex',i,i+32);
    i+=32;
    var index = readInt(str,i,4);
    i+=4;
    var slen = readInt(str,i,4);
    i+=4;
    var sign = str.toString('hex',i,i+slen);
    i+=slen;
    console.log('Input: ',j+1);
    console.log('Transaction ID: ',id);
    console.log('Index of the output: ',index);
    console.log('Length of the Signature: ',slen);
    console.log('Signature: ',sign);
}

var noutputs = readInt(str,i,4);
i+=4;
for(var j=0;j<noutputs;j++){
    var coins = readInt(str,i,8);
    i+=8;
    var pubkeylen = readInt(str,i,4);
    i+=4;
    var PUBKEY = str.toString("utf-8",i,i+pubkeylen);
    i+=pubkeylen;
    console.log('Output:',j+1);
    console.log('Number of coins: ',coins);
    console.log('Public Key length: ',pubkeylen);
    console.log('Public Key: ',PUBKEY);
}

