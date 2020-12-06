// kerjakanTugas merupakan higher order function
// parameter 'selesai' merupakan callback karena dia function
function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mengerjakan ${matakuliah}`);
    selesai();
}

function selesai() {
    alert('Selesai!');
}

// ucapkanSalam juga higher order function karena memiliki return value berupa function
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}`)
    }
}

let selamatPagi = ucapkanSalam('pagi');
selamatPagi('Andra');
