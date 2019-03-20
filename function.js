// function tampilkangka(angka1,angka2){
//     return angka1-angka2
// }
// console.log(tampilkangka(5))


// function tampilkan(){
//  console.log("hello word");
// }
// tampilkan();


// function tampilkangka2(angka){
//     return 2
// }
// var tampung = tampilkangka2();
// console.log(tampung);
// function pertambahan(angka1,angka2,angka3){
//     return angka1 + angka2 - angka3
// }
// console.log(pertambahan(50,50,50))

// function defaultnilai(angka=1){
//     return angka1;

// }
// console.log(defaultnilai(2));
// console.log(defaultnilai())

// var pertambahan = function(angka1,angka2){
//     return angka1 * angka2
// }
// console.log(pertambahan(20,10))

const url =  'https://swapi.co/api/planets/?format=api';
fetch(url)
.then(data=>{returndata.json})
.then(res=>{console.log(res)})

