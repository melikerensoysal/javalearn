/* 
    09.01.2026
*/

// her yerden cagrilabilir
function topla(a, b) {
    return a + b;
}
console.log("Toplama:", topla(5, 10));

// degiskene fonksiyon atanmasidir
const carp = function(a, b) {
    return a * b;
};
console.log("Carpma:", carp(4, 3));

// kisa yazim seklidir 'function' yerine '=>' kullanilir
const cikar = (a, b) => {
    return a - b;
};
console.log("Cikarma:", cikar(10, 4));

// tek islem varsa süslü parantez ve return gerekmiyor
const bol = (a, b) => a / b;
console.log("Bolme:", bol(20, 2));

// hicbir deger almadan calisabilen fonksiyon
const selamla = () => console.log("Selamlar!");
selamla();

// parametre gönderilmezse varsayilen deger devreye girer
function renkYaz(renk = "Kirmizi") {
    console.log("Secilen Renk:", renk);
}
renkYaz();

// baska bir fonksiyona parametre olarak gonderilen fonksiyon
function islemYap(sayi, callback) {
    const sonuc = sayi * 2;
    callback(sonuc);
}
islemYap(5, (s) => console.log("Callback Sonucu:", s));

// sadece bir is yapar ve geriye veri dondurmez
const logTut = (mesaj) => console.warn("Log:", mesaj);
logTut("Sistem baslatildi");

// süslü parantezler karismasin diye parantez icine alinir
const kullaniciOlustur = (ad) => ({ isim: ad, id: 1 });
console.log(kullaniciOlustur("Mehmet"));

// tanimladigi an otomatik calisir
(function() {
    console.log("Ben hemen çalisan bir IIFE fonksiyonuyum!");
})();