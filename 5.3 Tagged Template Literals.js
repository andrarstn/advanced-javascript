// const nama = 'Andra';
// const umur = 20;
// // ...parameter = ini merupakan rest parameter
// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((s,i) => {
//     //     result+=`${s}${values[i] || ''}`
//     // });
//     // return result;

//     return strings.reduce((result, str, i)=>`${result}${str}${values[i] || ''}`, '');
// }

// let str = coba`Nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);



const nama = 'Andra';
const umur = 20;
const ig = 'andrarstn';
// ...parameter = ini merupakan rest parameter
function highlight(strings, ...values) {
    return strings.reduce((result, str, i)=>`${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

let str = highlight`Nama saya ${nama}, saya ${umur} tahun, instagram saya ${ig}`;

document.body.innerHTML = str;
console.log(str);