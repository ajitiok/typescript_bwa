// VIDEO 11/ OBJECT

let user = {
  name: "Aji",
  age: 15
}

// user = {
//   // alamat 
//   // terjadi error karena let user diatas dianggap sebagai type , yg dimana type user diatas tidak ada variable alamat
// }


// ada cara yg lebih baik dalam mendeklarasikan object pada typescript


// yaitu dengan 
type User = {
  name: string,
  age: number
}

let user1: User = {
  name : 'aji',
  age: 21
}


