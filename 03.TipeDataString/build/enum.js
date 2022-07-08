"use strict";
// VIDEO 07/ TYPE DATA ENUM
// ENUM adalah sebuah tipe data yang menyimpan sekumpulan data constans seperti pada .env seperti username, api.
// klo .env itu data constans yang berada di level konfigurasi, sedangkan enum menyimpan data di level aplikasi.
// NUMERIC ENUMS
var Months;
(function (Months) {
    Months[Months["JAN"] = 0] = "JAN";
    Months[Months["FEB"] = 1] = "FEB";
    Months[Months["MAR"] = 2] = "MAR";
    Months[Months["APR"] = 3] = "APR";
    Months[Months["MAY"] = 4] = "MAY";
})(Months || (Months = {}));
console.log(Months);
/**
 * {
  '0': 'JAN',
  '1': 'FEB',
  '2': 'MAR',
  '3': 'APR',
  '4': 'MAY',
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4
}
 */
console.log(Months.FEB); // 1
console.log(Months.MAR); // 2
// ada fitur terbaru enum , kita bisa menentukan indexnya 
// misal 
var MontsHujan;
(function (MontsHujan) {
    MontsHujan[MontsHujan["OKT"] = 0] = "OKT";
    MontsHujan[MontsHujan["NOV"] = 11] = "NOV";
    MontsHujan[MontsHujan["DES"] = 12] = "DES";
})(MontsHujan || (MontsHujan = {}));
console.log(MontsHujan.OKT); // 0
console.log(MontsHujan.NOV); // 11
console.log(MontsHujan.DES); // 12
// STRING ENUMS
var Bulan;
(function (Bulan) {
    Bulan["JAN"] = "Januari";
    Bulan["FEB"] = "Februari";
    Bulan["MAR"] = "Maret";
})(Bulan || (Bulan = {}));
console.log(Bulan.JAN); // Januari
// error
// enum Bulan2 {
//   JAN = "Januari",
//   FEB = 'Februari',
//   MAR
// } 
// ini akan error karena asigment awal berupa string, dan selanjutnya adalah increment dari sebelumnya dan ketika string di increment maka terjadi error
