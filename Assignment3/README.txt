Add Assignment 3 solution.

Solution details:
1. Getting the timestamp using the nano-time library(in BigInt format) and then converting it into binary(8 bytes long).
2. Getting the input data and concantenating it into a single variable after converting it into binary. (Extra zeroes are appended to the beginning of integers to make them exactly 4/8 bytes long).
3. Getting the output data(no. of coins and directory of public key) and converting it into binary. (Extra zeroes are appended to the beginning of integers to make them exactly 4/8 bytes long).
4. Concantenating all these 3 strings into a buffer and calculating the SHA-256 hash of it.
5. Storing the data in a binary file(.dat)format with the hash as it's name.     