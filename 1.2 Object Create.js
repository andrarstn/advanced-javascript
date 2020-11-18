const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Selamat makan ${this.nama}, energi sekarang ${this.energi}`)
    },
    main: function(jam) {
        this.energi += jam;
        console.log(`Selamat main ${this.nama}, energi sekarang ${this.energi}`)
    },
    tidur: function(jam) {
        this.energi += jam*2;
        console.log(`Selamat tidur ${this.nama}, energi sekarang ${this.energi}`)
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let andra = Mahasiswa('andra', 10);