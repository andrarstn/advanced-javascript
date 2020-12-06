// HTML Fragments
// const mhs = [
//     {
//     nama: 'Andra',
//     umur: 20,
// },
//     {
//     nama: 'Ristiano',
//     umur: 20,
// }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m =>
//         `<h2>${m.nama}</h2>
//         <h2>${m.umur}</h2>`
//     ).join("")}  
// </div>`;

// document.body.innerHTML = el;



// Conditional
// ternary
// const book = {
//     judul: "Tafsir Qur'anul 'Adzhim",
//     penulis: 'Ibnu Katsir',
//     judullain: "Tafsir Ibnu Katsir"
// }

// const el = `<div class="book">
// <ul>
// <li>${book.judul}</li>
// <li>${book.penulis} ${book.judullain ? `judul lain: ${book.judullain}`:``}</li>
// </ul>
// </div>`

// document.body.innerHTML = el;


// Nested (HTML fragments bersarang)
const mhs = {
    nama: 'Andra',
    semester: 5,
    mataKuliah:[
        'IoT',
        'Data Science',
        'Pengolahan Citra',
        'GPS'
    ]
};

function cetakMatkul(matKul) {
    return `
    <ol>
    ${matKul.map(m => `<li>${m}</li>`).join("")}
    </ol>
    `
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span>${mhs.semester}</span>
<h4>Mata kuliah:</h4>
${cetakMatkul(mhs.mataKuliah)}    
</div>`

document.body.innerHTML = el;
console.log(el)