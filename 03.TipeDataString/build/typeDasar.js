"use strict";
// VIDEO 02/ TYPE STRING
//  Jadi Typescript adalah static typing. misal buat variable
// STRING
let nama = "AjiTio";
// nama = 20; maka muncul error, karena strict, setelah di inisialisasi dengan string maka tidak bisa diubah menjadi type lain seperti number atau boolean.
// nama = true; maka muncul error, karena strict, setelah di inisialisasi dengan string maka tidak bisa diubah menjadi type lain seperti number atau boolean.
nama = 'stringLain'; /*tidak muncul error , karena sebelumnya string hanya berganti value */
// atau penulisan bisa seperti Java
let namaBaru = "Bagus Putra";
// VIDEO 03/ TYPE NUMBER DAN BOOLEAN
// NUMBER 
let umur = 25;
// umur = 'string'; maka muncul error seperti di line 7, bahkan array atau object akan menjadi error
// umur = true ; maka muncul error seperti di line 7, bahkan array atau object akan menjadi error
// umur = [] ; maka muncul error seperti di line 7, bahkan array atau object akan menjadi error
// BOOLEAN
let isMarried;
isMarried = true; // tidak error
isMarried = false; // tidak error
// isMarried = "false"  //  X error
// VIDEO 04/ TYPE DATA ANY
// termasuk tipe data yg curang di type script
let heroes = "Iron man";
heroes = 20;
heroes = [];
heroes = {};
heroes = true;
heroes = false;
// variable heroes dengan tipe any bisa dimasukkan segala tipe data, dan disini tidak terjadi error sama sekali ketika diubah ke tipe data apapun
