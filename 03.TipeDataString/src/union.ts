// VIDEO 12/ UNION TYPE

// union adalah dimana kita menentukan sebuah variable mempunyai tipe variable lebih dari satu misal nomer hape


// 628187852 // tidak masalah
// 08187852381150 // masalah , karena 0 didepan angka akan dihapus oleh system, maka caranya diubah menjadi string "087852381150"

let phone: number | string;
phone = 6287852381150;
phone = "087852381150"

