console.log();

const araba = {
    marka: "Toyota",
    model: "Corolla",
    yil: 2022,
    renk: "Beyaz"
};

//
const anahtarlar = Object.keys(araba);
console.log(" Anahtarlar:", anahtarlar); 

//
const degerler = Object.values(araba);
console.log("Değerler:", degerler);

//
console.log("Döngü Çıktısı:");
Object.keys(araba).forEach(key => {
    console.log(`    ${key}: ${araba[key]}`);
});

//
const maaslar = { ali: 5000, veli: 7000, ayse: 10000 };
const toplamMaas = Object.values(maaslar).reduce((toplam, m) => toplam + m, 0);
console.log(" Toplam Maaş:", toplamMaas);

// 
const bosObje = {};
const doluMu = Object.keys(bosObje).length > 0;
console.log("Obje dolu mu?:", doluMu);

// 
const sozdeDizi = { 0: "a", 1: "b", 2: "c" };
console.log(" Sözde dizi anahtarları:", Object.keys(sozdeDizi));

//
console.log("Araba özellik sayısı:", Object.keys(araba).length);

//
const karisik = { a: 10, b: "yazi", c: 20, d: true };
const sadeceSayilar = Object.values(karisik).filter(val => typeof val === 'number');
console.log(" Sadece sayılar:", sadeceSayilar);

//
const ciftler = Object.entries(araba);
console.log(" Entries (Key-Value):", ciftler[0]);

//
const apiCevabi = { success: true, data: "User", time: 123 };
const rapor = Object.keys(apiCevabi).map(k => k.toUpperCase());
console.log("Büyük harfli anahtarlar:", rapor);