const angka = [-1,8,9,1,4,-5,-4,3,2,9]

// Mencari angka >= 3
// const newAngka =[];
// for (let index = 0; index < angka.length; index++) {
//     if (angka[i]>=3) {
//         newAngka.push(angka[i]);
//     }
// }

// Menggunakan filter
// tanpa arrow function
// const newAngka = angka.filter(function(a) {
//     return a>=3;
// })

// menggunakan arrow function
// const newAngka = angka.filter(a => a >=3);



// Menggunakan Map
// const newAngka = angka.map(a => a*2);


// Menggunakan reduce
// accumulator = hasil dari prosesnya, misal accumulator secara default = 0 dan currentValue =-1. Kemudian 0 + (-1) maka accumulatornya = -1
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator+currentValue)



// Method Chaining
// Cari angka 5
// kalikan 3
// jumlahkan
const newAngka = angka.filter(a => a > 5).map(a => a*3).reduce((acc,cur)=>acc+cur)



console.log(newAngka);