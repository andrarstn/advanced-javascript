// Template Literals/ template string
const nama = 'Andra';
const umur = 20;
console.log(`Nama saya ${nama}, umur saya ${umur} tahun`);

// Embedded Expressions
console.log(`${1+1}`)
console.log(`${alert('Hai')}`)

const x = 11;
console.log(`${(x % 2 == 0)? 'genap':'ganjil'}`)

// HTML Fragments
const mhs = {
    nama: 'Andra',
    umur: 20,
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <h2>${mhs.umur}</h2>
</div>`;

console.log(el)