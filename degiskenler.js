/* 
   09.01.2026
*/

// sabit degerler icin kullanilir
const PI = 3.14159;
console.log("Sabit Deger:", PI);

// degisken degerler icin kullanilir
let sepet = 100;
sepet = 150;
console.log("Guncel Tutar:", sepet);


var isim = "Ahmet";
console.log("Isim (var):", isim);


// metinsel ifadeler icin kullanilir
let mesaj = "Merhaba Dunya";
console.log("String Tipi:", mesaj);

// tam ve ondalikli sayilari tutmamizi saglar
let sicaklik = 24.5;
console.log("Number Tipi:", sicaklik);

// true false degerlerini alir
let girisYapildi = true;
console.log("Giris Durumu:", girisYapildi);

// bos birakilan degiskenler icin kullanilir
let hataMesaji = null;
console.log("Hata Var mi:", hataMesaji);

// deger tanimlanmis ama henuz deger atanmamissa bu degeri alir
let sonuc;
console.log("Sonuc Degeri:", sonuc);

// string icine dinamik degisken gommek icin kullanilir (` `)
let ad = "Zeynep";
let karsilama = `hos geldin ${ad}, nasilsin?`;
console.log(karsilama);

// degisken turunu kontrol etmek icin kullanilir
console.log("Turu Nedir:", typeof girisYapildi);