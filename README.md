# BlockChain
Learnt and Implemented the concepts of BlockChain, through various assignments, primarily in JavaScript.

## [Assignment 1](./Assignment%201)
**Aim:** Finding the nonce for a string.

Given some data as string input, we had to find a _key_ `x`, such that when `x` is appended to the data, the SHA-256 hash of the string is less than a target value.
The target value in the [code](./Assignment%201/Assignment1.js) is `0x0000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`.

## [Assignment 2](./Assignment%202)
**Aim:** Understanding the Asymmetric Encryption security system used in BlockChain.

Verifying if the Public Key can decrypt a text encrypted with its complementary Private Key, thereby **verifying signatures**.

+ **Code** - [KeyPairGeneration](./Assignment%202/Assignment2_Key_Pair_Generation.js) Generates a Public and Private Key Pair.
+ **Code** - [PrivateEncrypt](./Assignment%202/PrivateKey_Encrypt.js) Signs(Encrypts) given data(input) with the Private Key.
+ **Code** - [PublicDecrypt](./Assignment%202/Public_Decrypt.js) Decrypts the encrypted data and verifies if the decrypted string is same as the given input.

## [Assignment 3](./Assignment%203)
**Aim:** Creating a binary data file `.dat` of a block transaction data.
* **Code** - [CreateBinaryFile](./Assignment%203/Create%20_Binary_file.js)
  1. Takes the Transaction Data as input.
  2. Creates a Binary File `.dat`.
  3. Calculates the SHA-256 hash of the binary data and saves the file as `'hash'.dat`.

## [Assignment 4](./Assignment%204)
**Aim:** Getting back the transaction data from a binary data file `.dat`.
**Code** - [ReadData](./Assignment%204/read_data.js)  Reads a binary data file `.dat` and gives back the Transaction Data.

(Complementary Code of Assignment 3).

## [Assignment 5](./Assignment%205)
**Aim:** Calculating block header and suitable nonce.

**Code** - [blockHeader](./Assignment%205/blockHeader.js)
  * Calculates the block header from given block index, hash of parent block and block body(`.dat`).
  * Finds a suitable nonce with a certain _pseudo-randomness_ in the loop. The hash depends(varies) on `2` factors: The Nonce value tried and the Timestamp at which it is tried.

The _pseudo-randomness_ introduced ensures that the fastest system mining doesn't win the race everytime.
The faster computer will have an upper-hand, but won't win every time.

## [Assignment 6](./Assignment%206)
**Aim:** Creating a local server, which listens on port 8787 which calculates the SHA-256 hash of given input.

**Code** - [index](./Assignment%206/index.js) takes some data, calculates its SHA-256 hash, converts it to hexadecimal and outputs it as JSON encoded data.
  * [Readme](./Assignment%206) gives instruction on running the code.

**Web Broswer Implementation**
Implemented the same code which runs on a local web broswer, using JavaScript and HTML.
**Folder** - [Trial Code With Browser](./Assignment%206/Trial%20code%20with%20Browser) contains the codes and instructions on how to run it.