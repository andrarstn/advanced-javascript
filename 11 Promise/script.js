// Object yang merepresentasikan keberhasilan/ kegagalan sebuah event yang asynchronous di masa yang akan datang
// Janji (Terpenuhi/ ingkar)

// States (fulfilled/ rejected/ pending)
// Untuk menjalankan states menggunakan callback(resolve/ reject/ finally)
// Ada aksi dalam promise, yaitu then dan catch. Then menjalakan resolve, catch menjalankan reject

// ========================================= Contoh 1 =========================================
// let ditepati = true
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati')
//     }else{
//         reject('Ingkar janji..')
//     }
// })

// janji1
//     .then(response => console.log('OK '+response))
//     .catch(response => console.log('Not OK '+response));



// ========================================= Contoh 2 =========================================
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(()=>{
//             resolve('Janji telah ditepati')
//         }, 2000)
//     }else{
//         setTimeout(()=>{
//             reject('Tidak ditepati setelah beberapa waktu')
//         }, 2000)
//     }
// })

// console.log('mulai');

// // console.log(janji2.then(()=> console.log(janji2)));
// janji2
//     .finally(()=>console.log('selesai menunggu'))
//     .then(response => console.log('OK '+response))
//     .catch(response => console.log('Not OK '+response));

// console.log('selesai');


// ========================================= Contoh 3 =========================================
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'aaa',
            sutradara: 'bbb',
            pemeran: 'ccc'
        }])
    }, 1000);
})

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'aaa',
            temperatur: 'bbb',
            kondisi: 'ccc'
        }])
    }, 500);
})

// film.then(response=>console.log(response))
// cuaca.then(response=>console.log(response))

Promise.all([film, cuaca])
    .then(response => {
        const[film,cuaca] = response
        console.log(film)
        console.log(cuaca)
    })