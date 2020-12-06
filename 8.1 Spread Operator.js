// Memecah iterables menjadi single element
// const mhs = ['Andra', 'Ristiano', 'andrarstn'];
// console.log(...mhs[0]);

// Menggabungkan 2/ lebih array
// const mhs = ['Andra', 'Ristiano', 'andrarstn'];
// const dosen = ['Bapak', 'Ibu', 'Dosen'];
// const orang = [...mhs,'UPN',...dosen];
// console.log(orang);

// meng-copy array
// const mhs = ['Andra', 'Ristiano', 'andrarstn'];
// const mhs1 = [...mhs];
// mhs1[0]='ADRS';
// console.log(mhs);


const nama = document.querySelector('.spread_operator');
const huruf = [...nama.textContent].map(h=>`<span>${h}</span>`).join('');
nama.innerHTML = huruf;
