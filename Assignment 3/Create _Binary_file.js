
/*SOLUTION DETAILS:
1. Getting the timestamp using the nano-time library(in BigInt format) and then converting it into binary(8 bytes long).
2. Getting the input data and concantenating it into a single variable after converting it into binary. (Extra zeroes are appended to the beginning of integers to make them exactly 4/8 bytes long).
3. Getting the output data(no. of coins and directory of public key) and converting it into binary. (Extra zeroes are appended to the beginning of integers/characters to make them exactly 4/8 bytes long).
4. Concantenating all these 3 strings into a buffer and calculating the SHA-256 hash of it.
5. Storing the data in a binary file(.dat)format with the hash as it's name.*/
 
var readline = require('readline-sync');
const crypto = require('crypto');
var fs = require('fs');
var path = require('path');
const now = require('nano-time');
const { addAbortSignal } = require('stream');

function addInt(num, length){
    let arr = new Uint8Array(length);
    if(length==4){
        num = parseInt(num);
        for(var i=0;i<length;i++){
            arr[length-1-i] = num%256;
            num=num>>8;
        }
    }else{
        num = BigInt(num);
        for(var i=0;i<length;i++){
            arr[length-1-i] = parseInt(num%256n);
            num/=256n;
        }
    }
    fs.appendFileSync("data.dat",arr);
    return;
}

function addhex(id){
    let arr = new Uint8Array(Buffer.from(id,'hex'));
    fs.appendFileSync("data.dat",arr);
    return;
}

function addSign(PUBKEY){
    let arr = new Uint8Array(Buffer.from(PUBKEY, 'utf-8'));
    fs.appendFileSync("data.dat",arr);
    return;
}
function finalHash(){
    let buf = fs.readFileSync("data.dat");
    let hash = crypto.createHash('sha256').update(buf).digest('hex');
    hash = hash.toString();
    let id = hash.concat('.dat');
    fs.renameSync("data.dat",id);
    return;
}
var currtime = BigInt(now());
let buf = Buffer.allocUnsafe(8);
buf.writeBigUInt64BE(currtime,0);
fs.appendFileSync('data.dat',buf);

var counti = readline.question('Enter the number of inputs: ');
addInt(counti,4);
for(var i=0;i<counti;i++){
    console.log("Enter Transaction ID(in hex format) for input #",i+1,":");
    var id = readline.question();
    addhex(id);
    console.log("Enter index of output for input #",i+1,":");
    var index = readline.question();
    addInt(index,4);
    var l_sign = readline.question("Enter the Length of signature: ");
    addInt(l_sign,4);
    var sign = readline.question("Enter the signature(in hex format): ");
    var sign_len = sign.length;
    var fsign='';
    for(var q=sign_len;q<l_sign;q++){
        fsign+='00';
    }
    fsign+=sign;
    addhex(fsign);
}
var counto= readline.question('Enter the number of outputs: ');
addInt(counto,4);
for(var i=0;i<counto;i++){
    console.log('Enter the number of coins for output #',i+1,':');
    var coins = readline.question();
    addInt(coins,8);
    var directory = readline.question('Enter the complete directory of the public key(.pem file): ');
    var PUBKEY = fs.readFileSync(directory,'utf8');
    var lkey = PUBKEY.length;
    addInt(lkey,4);
    addSign(PUBKEY);
}

finalHash();