console.log();

//
const kullanici = { ad: "Ahmet", yas: 25, aktif: true };
const jsonString = JSON.stringify(kullanici);
console.log(" String hali:", jsonString);
console.log(" Veri Tipi:", typeof jsonString);

//
const gelenVeri = '{"urun": "Laptop", "fiyat": 15000}';
const urunObje = JSON.parse(gelenVeri);
console.log(" Obje hali:", urunObje.urun);
console.log("   Veri Tipi:", typeof urunObje);

// 
const detayliVeri = { id: 1, tags: ["js", "html", "css"] };
console.log("3. Okunabilir JSON:\n", JSON.stringify(detayliVeri, null, 2));

//
const profil = { ad: "Ece", yas: 30, sifre: "12345", email: "ece@mail.com" };
const guvenliJson = JSON.stringify(profil, ["ad", "email"]);
console.log(" Filtrelenmiş JSON (Şifre yok):", guvenliJson);

//
const sonuc = JSON.stringify({ a: 1, b: 2, c: "test" }, (key, value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    return value;
});
console.log("Değerleri değiştirilmiş JSON:", sonuc);

//
const kitaplar = [
    { ad: "Suç ve Ceza", yazar: "Dostoyevski" },
    { ad: "1984", yazar: "Orwell" }
];
const diziString = JSON.stringify(kitaplar);
console.log(" Dizi JSON:", diziString);

//
const hataliObje = {
    ad: "Mehmet",
    yas: undefined,
    selamla: () => console.log("Merhaba")
};
console.log(" Kayıplı Çeviri:", JSON.stringify(hataliObje));

//
const orjinal = { ayarlar: { tema: "dark" } };
const kopya = JSON.parse(JSON.stringify(orjinal));
kopya.ayarlar.tema = "light";
console.log(" Orjinal değişmedi:", orjinal.ayarlar.tema);
console.log("  Kopya değişti:", kopya.ayarlar.tema);

//
const tarihliString = '{"tarih": "2023-10-25T10:00:00.000Z"}';
const tarihliObje = JSON.parse(tarihliString, (key, value) => {
    if (key === "tarih") return new Date(value);
    return value;
});
console.log(" Tarih formatı:", tarihliObje.tarih.getFullYear());

//
const bozukJson = "{ ad: 'Ali' }";
try {
    JSON.parse(bozukJson);
} catch (hata) {
    console.log(" Hata yakalandı:", hata.message);
}