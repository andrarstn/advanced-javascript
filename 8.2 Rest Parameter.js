// function myFunc(a,...args) {
//     return args;
//     return Array.from(arguments);
//     return [...arguments];
// }

// myFunc(1,2,3,4,5);


// function jumlahkan(...angka) {
//     let total = 0;
//     for (const a of angka) {
//         total += a;
//     }
//     return total;

//     return angka.reduce((a, b) => a+b);
// }

// jumlahkan(1,2,3,4,5)


// Array Destructuring
// const kelompok1 = ['Andra', 'Ristiano', 'andrarstn', 'andraristiano', 'adrs'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);


// Object destucturing
// const team ={
//     pm: 'Andra',
//     frontEnd1: 'Ali',
//     frontEnd2: "Sa'ad",
//     backEnd: "Mu'adz",
//     ux: "Umar",
//     devOps: "Abbas",
// }

// const {pm,...myTeam} = team;


// Filtering
function filterBy(type, ...values) {
    return values.filter(f => typeof f === type);
}

console.log(filterBy('string',1,2,'Andra',false,10,true))