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
var path = require('path');

var transaction_id = readline.question('Enter the transaction id: ');
var directory = readline.question('Enter the file directory: ');
console.log('Transaction ID: ',transaction_id);

transaction_id+='.dat';


var data = fs.readFileSync(path.join(directory,transaction_id), 'utf8');
var i = 0;
var timestamp = '';
for(;i<64;i++){
    timestamp+=data[i];
}
var timestamp_dec = BigInt(parseInt(timestamp,2)).toString();

console.log('Timestamp: ', timestamp_dec);
var ninputs = '';
for(var j=0;j<32;j++){
    ninputs+=data[i+j];
}
i+=j;
var ninputs_dec = parseInt(ninputs,2);
console.log('Number of inputs: ',ninputs_dec);
for(var j=0;j<ninputs_dec;j++){
    console.log("  Input ",j+1,": ");
    var id='';
    for(var k=0;k<32;k++){
        id+=data[i+k];
    }
    i+=k;
    var hex_id = parseInt(id,2).toString(16);
    console.log('    Transaction ID: ',hex_id);
    var index ='';
    for(var k=0;k<32;k++){
        index+=data[i+k];
    }
    i+=k;
    var index_dec = parseInt(index,2);
    console.log('    Index: ',index_dec);
    var slen ='';
    for(var k=0;k<32;k++){
        slen+=data[i+k];
    }
    i+=k;
    var slen_dec = parseInt(slen,2);
    console.log('    Length of Signature: ',slen_dec);
    var sign ='';
    for(var k=0;k<(slen_dec*8);k++){
        sign+=data[i+k];
    }
    i+=k;
    var sign_hex = parseInt(sign,2).toString(16);
    var sign_hex_f='';
    for(var q=sign_hex.length;q<slen_dec;q++){
        sign_hex_f+='0';
    }
    sign_hex_f+=sign_hex;
    console.log('    Signature: ',sign_hex_f);
}

var noutput ='';
for(var k=0;k<32;k++){
    noutput+=data[i+k];
}
i+=k;
var noutput_dec = parseInt(noutput,2);
console.log('Number of outputs: ',noutput_dec);
for(var j=0;j<noutput_dec;j++){
    console.log('  Output ',j+1,": ");
    var ncoin ='';
    for(var k=0;k<64;k++){
        ncoin+=data[i+k];
    }
    i+=k;
    var ncoin_dec = parseInt(ncoin,2);
    console.log('    Number of coins: ',ncoin_dec);
    var pkey_l ='';
    for(var k=0;k<32;k++){
        pkey_l+=data[i+k];
    }
    i+=k;
    var pkey_l_dec = parseInt(pkey_l,2);
    console.log('    Length of the public key: ',pkey_l_dec);
    var PUBKEY = '';
    for(var k=0;k<pkey_l_dec;k++){
        var char='';
        for(var q=0;q<8;q++){
            char+=data[i+q];
        }
        i+=q;
        var ascii = parseInt(char,2);
        PUBKEY += String.fromCharCode(ascii);
    }
    console.log('    Public Key: ',PUBKEY);
}

