// Array
// const perkenalan =['Halo', 'nama', 'saya', 'Totti Andra Ristiano'];
// // const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan; //bisa diskip


// // Swap item
// let a = 1;
// let b = 2;

// [a,b] = [b,a];


// // Return value pada function
// function coba() {
//     return [1,2];
// }

// const [a,b] = coba();


// // Rest Parameter
// const [a,...values] = [1,2,3,4,5,6];
// console.log(values);


// // Object
// const mhs = {
//     nama: 'Andra',
//     umur: 20
// }

// const {nama, mhs} = mhs;
// console.log(nama);


// // Assignment tanpa deklarasi object
// ({nama,umur} = {
//     nama: 'Andra',
//     umur: 20
// })
// console.log(nama);


// // Assign ke variable baru
// const mhs = {
//     nama: 'Andra',
//     umur: 20
// }

// const {nama: n, mhs: m} = mhs;
// console.log(nama);


// // Memberikan default value
// const mhs = {
//     nama: 'Andra',
//     umur: 20
// }

// const {nama, mhs, email='email@default.com'} = mhs;
// console.log(nama);


// // Memberi nilai default dan assign ke variable baru
// const mhs = {
//     nama: 'Andra',
//     umur: 20
// }

// const {nama: n, mhs: m, email: e='email@default.com'} = mhs;
// console.log(nama);


// // Rest Parameter
// const mhs = {
//     nama: 'Andra',
//     umur: 20,
//     email: 'andra@gmail.com'
// }

// const {nama: n,...values} = mhs;
// console.log(values);


// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id:123,
    nama: 'Andra',
    umur: 20,
    email: 'andra@gmail.com'
}

function getId({id, nama}) {
    return id;
}

console.log(getId(mhs));