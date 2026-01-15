/* 
   13.01.2026
*/

// metin uzunlugu
let metin = "Frontend";
console.log("Karakter Sayisi:", metin.length);

// toUpperCase() ve toLowerCase()
console.log("Buyuk Harf:", "merhaba".toUpperCase());
console.log("Kucuk Harf:", "SELAM".toLowerCase());

// icerik  kontrolu
let email = "test@gmail.com";
console.log("Gmail mi:", email.includes("@gmail.com"));

// startsWith() ve endsWith()
let url = "https://site.com";
console.log("Guvenli mi (https):", url.startsWith("https"));

// metni kesip alir
let tanim = "Javascript Developer";
console.log("Kesilen:", tanim.slice(0, 10));

// metni böler ve  diziye cevirir
let etiketler = "yazilim,kod,react";
let dizi = etiketler.split(","); 
console.log("Dizi Hali:", dizi); // ["yazilim", "kod", "react"]

// ilk esleseni degistirir
let cumle = "Bu cok kotu";
console.log("Duzeltme:", cumle.replace("kotu", "iyi"));

// tüm eslesmeleri degistirir
let metin2 = "elma elma elma";
console.log("Hepsi Armut:", metin2.replaceAll("elma", "armut"));

// bas  ve sondaki bosluklari siler
let giris = "   kullanici   ";
console.log("Temizlenen:", giris.trim());

// birlestirme işlemi.
let isim = "Ali";
console.log(isim.concat(" ", "Yılmaz"));