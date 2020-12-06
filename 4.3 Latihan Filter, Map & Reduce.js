// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya javascript lanjutan
let jsOnly = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// Ambil durasi masing-masing video
.map(item => item.dataset.duration)


// Ubah durasi menjadi float, ubah menit menjadi detik
.map(time => {
    // 10:30 menjadi [10,30] ( menggunakan split )
    const parts = time.split(':').map(part => parseFloat(part));
    return parts[0]*60 + parts[1];
})

// Jumlahkan semua detiknya
.reduce((acc, cur)=>acc+cur);

// Ubah formatnya jadi jam:menit:detik
const hour = Math.floor(jsOnly/3600);
jsOnly -= hour*3600;

const minute = Math.floor(jsOnly/60);
jsOnly -= minute*60;

const second = jsOnly;

// Simpan di DOM
const totalDuration = document.querySelector('.total-durasi');
totalDuration.textContent = `${hour} Jam, ${minute} Menit, ${second} Detik`;

const totalVideos = document.querySelector('.jumlah-video');
totalVideos.textContent = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;