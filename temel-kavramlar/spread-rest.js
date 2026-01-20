const orjinalDizi = [1, 2, 3];
const kopyaDizi = [...orjinalDizi];
kopyaDizi.push(4);
console.log("Orjinal:", orjinalDizi); // [1, 2, 3] (Degismedi)
console.log("Kopya:", kopyaDizi);     // [1, 2, 3, 4]

const meyveler = ["Elma", "Armut"];
const sebzeler = ["Domates", "Biber"];
const pazarListesi = [...meyveler, ...sebzeler, "Sut"];
console.log("Pazar Listesi:", pazarListesi);

const user = { ad: "Ali", yas: 25 };
const guncelUser = { ...user, yas: 26, sehir: "Izmir" };
console.log("Guncel Kullanici:", guncelUser);

const kelime = "React";
console.log("Harfler:", [...kelime]);

const sayilar = [10, 20, 50];
console.log("En Buyuk Sayi:", Math.max(...sayilar)); 



const topla = (...sayilar) => {
    return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
};
console.log("Toplam:", topla(10, 20, 30, 40, 50));


const takimiYazdir = (kaptan, ...oyuncular) => {
    console.log("Kaptan:", kaptan);
    console.log("Diger Oyuncular:", oyuncular);
};
takimiYazdir("Muslera", "Nelsson", "Boey", "Torreira");


const gunler = ["Pazartesi", "Sali", "Carsamba", "Persembe"];
const [ilkGun, ikinciGun, ...digerGunler] = gunler;
console.log("Kalan Gunler:", digerGunler);


const araba = { marka: "BMW", model: "i5", yil: 2024, renk: "Siyah" };
const { marka, ...teknikDetaylar } = araba;
console.log("Teknik Detaylar:", teknikDetaylar);


const islem = (baslik, ...degerler) => {
    console.log(`${baslik}: ${degerler.length} adet veri geldi.`);
};
islem("Log Kaydi", 1, 2, 3);