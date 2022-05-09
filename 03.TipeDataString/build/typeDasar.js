"use strict";
//  Jadi Typescript adalah static typing. misal buat variable
// STRING
let nama = "AjiTio";
// nama = 20; 
// maka muncul error, karena strict, setelah di inisialisasi dengan string maka tidak bisa diubah menjadi type lain seperti number atau boolean.
// atau penulisan bisa seperti Java
let namaBaru = "Bagus Putra";
// NUMBER 
let umur = 25;
// umur = 'string';
// maka muncul error seperti di line 7, bahkan array atau object akan menjadi error
// BOOLEAN
let isMarried;
isMarried = true; // tidak error
isMarried = false; // tidak error
// isMarried = "false"  //  X error
