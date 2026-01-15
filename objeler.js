/* 
   12.01.2026
*/

// obje olusturur
const kitap = {
    ad: "Yuzuklerin Efendisi",
    yazar: "Tolkien",
    sayfa: 1000
};

// nokta veya koseli parantez kullanimi
console.log(kitap.ad);
console.log(kitap["yazar"]);

// ozellekleri degiskene atar
const { ad, sayfa } = kitap;
console.log("Kitap Adi:", ad);

// objeyi kopyalar ve  uzerine yeni deger yazma
const guncelKitap = { ...kitap, baski: 2024 };
console.log(guncelKitap);

// anatharlari liste olarak verir
console.log("Anahtarlar:", Object.keys(kitap));

// degerleri liste olarak verir
console.log("Degerler:", Object.values(kitap));

// ic ice objeler
const kisi = {
    isim: "Can",
    adres: { sehir: "İzmir", ilce: "Konak" }
};
console.log("İlce:", kisi.adres.ilce);

// objeye fonksiyon tanimlaar
const hesap = {
    bakiye: 100,
    yatir: function(miktar) { this.bakiye += miktar; }
};
hesap.yatir(50);
console.log("Yeni Bakiye:", hesap.bakiye);

// ozellik yoksa hata verme, undefined doner
const user = {};
console.log("Adres var mi:", user.adres?.sehir);

// degisken adi ile anahtar adi ayniysa kisaltma
const marka = "Apple";
const cihaz = { marka };
console.log(cihaz);