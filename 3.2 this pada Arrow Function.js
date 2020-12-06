// Constructor Function
// const Mahasiswa = function() {
//     this.nama = 'andra';
//     this.umur = 20;
//     this.sayHello=function() {
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur}`);
//     }
// }

// const andra = new Mahasiswa();

// Arrow Function
// Menggunakan constructor function
// const Mahasiswa = function() {
//     this.nama = 'andra';
//     this.umur = 20;
//     // Method bisa dijadikan arrow
//     this.sayHello=()=> {
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur}`);
//     }
// }

// const andra = new Mahasiswa();

// const Mahasiswa = function() {
//     this.nama = 'andra';
//     this.umur = 20;
//     // Method bisa dijadikan arrow
//     this.sayHello=()=> {
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur}`);
//     }

//     // setInterval(function() {
//     //     console.log(this.umur++);
//     // }, 500);

//     // This pada arrow function tidak mempunyai konsep this, maka dari itu this akan mencari ke lexical scopenya
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const andra = new Mahasiswa();

// Menggunakan object literal
// const mhs1 = {
//     nama: 'Andra',
//     umur: 20,
//     sayHello: ()=> {
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur}`);
//     }
// }

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu,dua]=[dua,satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
})