function init() {
    let nama = 'andra';
    function tampilNama() {
        console.log(nama);
    }
    console.log(tampilNama());
}
init();

function initvtwo() {
    // let nama = 'andra';

    // Anonymous Function
    return function(nama) {
        console.log(nama);
    }
}
let panggilNama = initvtwo();
panggilNama('Andra');

function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}`)
    }
}

let selamatPagi = ucapkanSalam('pagi');
selamatPagi('Andra');

// Seolah-olah punya private method
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());