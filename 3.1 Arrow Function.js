// 1. Function Expression
// const tampilNama = function (nama) {
//     return `Halo ${nama}`;
// }

// tampilNama('andra')


// 2. Arrow Function
// const tampilNama = (nama)=>{
//     return `Halo ${nama}`;
// }

// Implisit return
// dengan parameter
// const tampilNama = nama=>`Halo ${nama}`;
// console.log(tampilNama('andra'))

// tanpa parameter
// const tampilNama = ()=>`Halo Dunia`;
// console.log(tampilNama())

// Parameter lebih dari satu
// const tampilNama = (nama, waktu)=>{
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('andra', 'malam'))


let mahasiswa = ['andra', 'ristiano'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);

// mengembalikan array
// let jumlahHuruf = mahasiswa.map(nama=>nama.length)
// console.log(jumlahHuruf);

// mengembalikan object
// let jumlahHuruf = mahasiswa.map(nama=>({nama: nama, jmlHuruf: nama.length}))
let jumlahHuruf = mahasiswa.map(nama=>({nama, jmlHuruf: nama.length}))
console.table(jumlahHuruf);