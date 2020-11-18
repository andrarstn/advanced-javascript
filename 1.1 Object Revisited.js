// Object Literal
// let mahasiswa = {
//     // property
//     nama: 'Andra',
//     energi: 10,
//     // Method
//     makan: function(porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Selamat makan ${this.nama}, energi sekarang ${this.energi}`)
//     }
// }

// let mahasiswa_dua = {
//     // property
//     nama: 'Andra',
//     energi: 10,
//     // Method
//     makan: function(porsi) {
//         this.energi = this.energi + porsi
//         console.log(`Selamat makan ${this.nama}, energi sekarang ${this.energi}`)
//     }
// }


// Function Declaration
// function Mahasiswa(nama, energi){
//     let mhs = {};
//     mhs.nama = nama;
//     mhs.energi = energi;

//     mhs.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}, energi sekarang ${this.energi}`)
//     }
    
//     mhs.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Selamat main ${this.nama}, energi sekarang ${this.energi}`)
//     }

//     return mhs;
// }

// let andra = Mahasiswa('Andra', 10);
// let ristiano = Mahasiswa('Ristiano', 10);


// Constructor Function
// keyword new
function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Selamat makan ${this.nama}, energi sekarang ${this.energi}`)
    }
    
    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Selamat main ${this.nama}, energi sekarang ${this.energi}`)
    }
}

let andra = new Mahasiswa('Andra', 10);
