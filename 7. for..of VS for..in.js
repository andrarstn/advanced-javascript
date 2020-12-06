// For..of ( iterable )
// 1. Array
// const mhs = ['Andra', 'Ristiano', 'andrarstn'];
// for (const m of mhs) {
//     console.log(m);
// }

// mhs.forEach((m,i) => {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// });

// for (const [i,m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// }

// 2. String
// const nama = 'Andra';
// for (const n of nama) {
//     console.log(n);
// }

// 3. Node List
// const liNama = document.querySelectorAll('.nama ul li');
// liNama.forEach(l => console.log(l.innerHTML));
// for (const l of liNama) {
//     console.log(l.innerHTML);
// }

// 4. Arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (const a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1,2,3,4,5));


// For..in ( enumerable )
const mhs ={
    nama: 'Andra',
    umur: 20,
    email: 'andra@gmail.com'
}

for (const m in mhs) {
    // indexnya saja
    console.log(m);

    // isi/ value dari index
    // console.log(mhs[m]);
}