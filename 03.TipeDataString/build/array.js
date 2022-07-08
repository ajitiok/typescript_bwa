"use strict";
// VIDEO 05/ TYPE DATA ARRAY
// array
let array = [1, 2, 3];
// array = ['string']; array ini akan error karena diatas sudah diassign dengan tipe data number sehingga seakan array diatas ditulis dengan let array:number[] = [1,2,3]
let array2;
array2 = ['string1', 'string2'];
let array3;
array3 = [1, 'string1', true, {}];
// VIDEO 06/ TYPE DATA ARRAY TUPLES
// Tuples adalah sebuah array yang isinya berbagai macam tipe data tapi nilainya atau itemnya terbatas
let biodata;
biodata = ['surabaya', 123];
// biodata = ['surabaya', true]; muncul error karena harus berupa number
// biodata = ['surabaya', 100, 1000]; muncul error karena biodata hanya memiliki 2 data tapi di assign menjadi 3
