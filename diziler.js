/* 
   12.01.2026
*/

//
const teknolojiler = ["React", "Vue", "Angular"];
console.log("Ilk Teknoloji:", teknolojiler[0]);

// sona ekleme ve sondan cikarma
teknolojiler.push("Svelte");
teknolojiler.pop();
console.log("Liste:", teknolojiler);

// her elemani isleyip yeni bir dizi olusturur
const sayilar = [2, 4, 6];
const kareler = sayilar.map(s => s * s);
console.log("Kareler:", kareler);

// kosula uyanlari filtreleyip yeni bir dizi doner
const notlar = [40, 60, 30, 90];
const gecenler = notlar.filter(not => not >= 50);
console.log("Gecen Notlar:", gecenler);

// kosula uyan ilk elemani bulur
const urunler = [{ id: 1, ad: "Kalem" }, { id: 2, ad: "Defter" }];
const bulunan = urunler.find(u => u.id === 2);
console.log("Bulunan Urun:", bulunan);

// dizi icinde donguyu kurar deger dondurmez
const isimler = ["Ali", "Veli"];
isimler.forEach(isim => console.log("Merhaba", isim));

// diziyi tek bir degere dusurur
const fiyatlar = [10, 20, 30];
const toplam = fiyatlar.reduce((toplam, anlik) => toplam + anlik, 0);
console.log("Toplam Fiyat:", toplam);

// dizi icinde elemani kontrol eder
const renkler = ["Mavi", "Yeşil"];
console.log("Mavi var mi?", renkler.includes("Mavi"));

// en az bir eleman kosulu sagladigina bakar
const yaslar = [10, 15, 22];
const resitVarMi = yaslar.some(yas => yas >= 18);
console.log("Resit biri var mi:", resitVarMi);

// diziyi kopyalar veya birlestirir
const eski = [1, 2];
const yeni = [...eski, 3, 4];
console.log("Birlesmis Dizi:", yeni);