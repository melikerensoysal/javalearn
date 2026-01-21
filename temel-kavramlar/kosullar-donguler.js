/* 
   09.01.2026
*/

// temer karar mekanizmasi
let yas = 17;
if (yas >= 18) {
    console.log("Ehliyet alabilir.");
} else {
    console.log("Yasi tutmuyor.");
}

// birden fazla kosul kontrol eder
let puan = 75;
if (puan >= 90) console.log("Not: AA");
else if (puan >= 70) console.log("Not: BB");
else console.log("Not: FF");

// ? ve : kullanarak tek satirda kosul yazmaya yarar
let durum = "online";
let renk = durum === "online" ? "Yesil" : "Gri";
console.log("Durum Rengi:", renk);

// bir degerin bircok ihtimalini kontrol ederebilir
let gun = 2;
switch (gun) {
    case 1: console.log("Pazartesi"); break;
    case 2: console.log("Sali"); break;
    default: console.log("Haftasonu");
}

// ve (&&) / veya (||) kullanimi
let admin = true;
let aktif = true;
if (admin && aktif) console.log("Admin panelini göster");

// belli bir sayida tekrar icin kullanilir
console.log("--- For dongusu ---");
for (let i = 0; i < 3; i++) {
    console.log("Sayac:", i);
}

// kosul dgoru oldugu surece doner
console.log("--- While Dongusu ---");
let sayac = 0;
while (sayac < 2) {
    console.log("While adim:", sayac);
    sayac++;
}

// dizilerin uzerinde gezmek icin modern yonetim saglar
const meyveler = ["Elma", "Armut"];
for (const meyve of meyveler) {
    console.log("Meyve:", meyve);
}

// donguyu tamamen durdurur
for (let i = 0; i < 10; i++) {
    if (i === 3) break;

}

// O adimi atlar donguye devam eder
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;

}
