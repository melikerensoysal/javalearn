// sirayla degiskenlere atar
const renkler = ["Kirmizi", "Mavi", "Yesil"];
const [birinci, ikinci] = renkler;
console.log("Birinci:", birinci, "- İkinci:", ikinci);

// istemedigimiz elemanlari vigrul koyup bos birakarak atlariz
const sayilar = [10, 20, 30, 40];
const [ilk, , ucuncu] = sayilar;
console.log("1. ve 3. Sayi:", ilk, ucuncu);

// degisken adiyla obje anahtari ayni olmalidir
const user = { username: "msoysal", age: 25 };
const { username, age } = user;
console.log(username);

// degisken adini degistirmek istiyorsak (key: yeniIsim).
const { username: kullaniciAdi } = user;
console.log("Turkce degisken:", kullaniciAdi);

// eger ozellik objede yoksa varsayilan degeri atariz
const { sehir = "Istanbul" } = user;
console.log("Sehir:", sehir);

// geriye kalan tum ozellikleri ahri bir paket yapar
const meyve = { ad: "Elma", tur: "Amasya", kilo: 5, fiyat: 20 };
const { ad, ...detaylar } = meyve;
console.log("Sadece Ad:", ad);
console.log("Geriye Kalanlar:", detaylar);

//
const urunGoster = ({ marka, model }) => {
    console.log(`Urun: ${marka} ${model}`);
};
urunGoster({ marka: "Samsung", model: "S23", yil: 2024 });

// obje icindeki objeyi tek seferde cikarmaya yarar
const sirket = {
    isim: "TechCorp",
    lokasyon: { ulke: "TR", sehir: "Ankara" }
};
const { lokasyon: { sehir: ofisSehri } } = sirket;
console.log("Ofis Sehri:", ofisSehri);

// gecici degiskene gerek kalmadan degerleri degistirir
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("A:", a, "B:", b);

// dizi icinde obje varsa kullanilir
const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Veli" }
];
const [ , ikinciKullanici ] = users;
const { name } = ikinciKullanici;
console.log("Ikinci Kisi:", name);