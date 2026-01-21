if (true) {
    var sehir = "Ankara";
}
console.log("Disaridan erisim (var):", sehir);



if (true) {
    let ilce = "Cankaya";
    const ulke = "Turkiye";
}



var ad = "Mehmet";
var ad = "Ahmet";
console.log("Son Ad:", ad);

let soyad = "Yilmaz";



let fiyat = 100;
fiyat = 200; 

const vergi = 18;



const kutu = { renk: "Mavi" };
kutu.renk = "Kirmizi";
console.log("Kutu Rengi:", kutu.renk);


console.log("Deger:", mesaj);
var mesaj = "Selam";


let sayi = 10;



var gizliSifre = "12345";
console.log("Window'a sizdi mi:", window.gizliSifre === "12345");

// let her adimda yeni bir scope olusturur.
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("Let i:", i), 100);
}

for (var k = 0; k < 3; k++) {
    setTimeout(() => console.log("Var k:", k), 100);
}