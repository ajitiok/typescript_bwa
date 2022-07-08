// VIDEO 08/ TYPE DATA PADA BALIKAN (RETURN) FUNCTION

function getName(): string {
  return "hello my name is Aji";
  // return 123; // maka ini error karena return dari function getName adalah string
}

console.log(getName())


function getAge() : number {
  return 123
  // return "string" // maka ini error 
}

console.log(getAge())

function printName(): void {
  console.log('print name')
  // return 123 // ini error karena jika type return nya adalah void maka tidak boleh mengembalikan nilai aka return
}


/////////////////
// VIDEO 09/ ARGUMENT FUNCTION TYPES

function multiply(val1: number, val2: number) :number {
  return val1 * val2
}

const result = multiply(20,3)
console.log(result)


// VIDEO 10/ FUNCTION AS TYPE

// static type nya bisa dideklrasikan dengan type
type Age = number;
let age: Age = 20;



type Tambah = (val1: number , val2: number) => number;

const Add: Tambah = (val1:number,val2:number) : number => {
  return val1 + val2;
}

// pertama kali mendeklarasikan type, atau bahasanya sebuah peraturan untuk sebuah fungsi