// Destructuring function return value
// function penjumlahanPerkalian(a,b) {
//     return [a+b , a*b];
// }

// const jumlah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];
// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);


// function kalkulasi(a,b) {
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }

// // Karena yang direturn ada object, maka urutan tidak pengaruh
// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);


// Destructuring function arguments
const mhs1 = {
    nama: 'Andra',
    umur: 20,
    email: 'andra@gmail.com',
    nilai:{
        uts: 80,
        tugas: 85,
        uas: 75
    }
}

// function cetakMhs(mhs) {
//     return `Halo nama saya ${mhs.nama}, say berumur ${mhs.umur} tahun`
// }

// cetakMhs(mhs1)

function cetakMhs({nama,umur, nilai: {uts, tugas, uas}}) {
    return `Halo nama saya ${nama}, saya berumur ${umur} tahun, nilai uas saya ${uas}`
}

cetakMhs(mhs1)
