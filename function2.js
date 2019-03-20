// var kalimat = "saya adalah full-stack javascript programmer!";
// // var kata = kalimat.split(" "); // kalimat dipecah dengan separator berupa spasi.
// console.log(kalimat.split(" "));

// var arr = ["buku", "laptop", "komputer"];
// arr.splice(0, 4, "televisi"); // Menghapus 0 nilai dari index 2, dan menambah 1 nilai yaitu "televisi" pada index 2.
// console.log(arr); // ["buku", "laptop", "televisi", "komputer"]

// arr.splice(0, 2); // Menghapus 2 nilai dari index 0
// console.log(arr); // ["televisi", "komputer"]

// arr.splice(0, 1, "majalah", "koran"); // Menghapus 1 nilai dari index 0, dan menambah 2 nilai yaitu "majalah" dan "koran"
// console.log(arr); // [majalah", "koran", "komputer"]


// var arr = [0, 1, 2, 3, 4];
// var irisan1 = arr.slice(1,3); // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
// console.log(irisan1); // [1, 2]

// var irisan2 = arr.slice(1);
// console.log(irisan2); // [1, 2, 3, 4]

// var irisan3 = arr.slice(2, 3);
// console.log(irisan3); // [2]

// var irisan4 = arr.slice(3, 4);
// console.log(irisan4); // [] KOSONG!

// var arr = [1, 2, 15];
// arr.sort(function(value1, value2) { return value2 < value1 });

// console.log(arr); // 15, 2, 1

var animalsArray = ["lion", "horse"];
animalsArray.push("duck","seagulls"); // menambahkan 1 nilai ke array bagian paling belakang
console.log(animalsArray); // ["lion", "horse", "duck"]

animalsArray.pop(); // menghapus 1 nilai array terbelakang
console.log(animalsArray); // ["lion", "horse"]

animalsArray.unshift("dog");
console.log(animalsArray); // ["dog", "lion", "horse"]

animalsArray.shift();
console.log(animalsArray);  // ["lion", "horse"]

animalsArray.sort();
console.log(animalsArray);  // ["horse", "lion"]
console.log(animalsArray.join(" and ")); // "horse and lion"
