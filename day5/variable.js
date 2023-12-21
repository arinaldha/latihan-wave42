let namaDepan = "Arinal";
let namaBelakang = "Dzikrul";
let result = `Halo nama saya ${namaDepan} ${namaBelakang} saya sedang belajar javascript`;
const regex = new RegExp("saya", "g");
console.log(result.replace(regex, "aku"));
