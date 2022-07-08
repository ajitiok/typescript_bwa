"use strict";
// VIDEO 08/ TYPE DATA PADA BALIKAN (RETURN) FUNCTION
function getName() {
    return "hello my name is Aji";
    // return 123; // maka ini error karena return dari function getName adalah string
}
console.log(getName());
function getAge() {
    return 123;
    // return "string" // maka ini error 
}
console.log(getAge());
function printName() {
    console.log('print name');
    // return 123 // ini error karena jika type return nya adalah void maka tidak boleh mengembalikan nilai aka return
}
/////////////////
// VIDEO 09/ ARGUMENT FUNCTION TYPES
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(20, 3);
console.log(result);
let age = 20;
const Add = (val1, val2) => {
    return val1 + val2;
};
// pertama kali mendeklarasikan type, atau bahasanya sebuah peraturan untuk sebuah fungsi
