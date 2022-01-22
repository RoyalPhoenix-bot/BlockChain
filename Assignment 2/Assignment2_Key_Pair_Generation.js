//Including crypto, fs and path modules.
var crypto = require('crypto');
var fs = require('fs');
const path = require('path');

function generateKeyFiles(){
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength:520,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: ' '
        }
    });
    fs.writeFileSync("public_key",keyPair.publicKey);
    fs.writeFileSync("private_key",keyPair.privateKey);

}

generateKeyFiles();

var PRIVATEKEY = fs.readFileSync(path.join(__dirname, 'private_key'), 'utf8');
var PUBLICKEY = fs.readFileSync(path.join(__dirname,'public_key'),'utf8');

console.log("This is the Private Key: ", PRIVATEKEY);
console.log("This is the Public Key: ", PUBLICKEY);