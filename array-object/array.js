console.log();

// 

let sepet = ["Elma", "Armut", "Muz"];

// 
const yeniUzunluk = sepet.push("Kivi");
console.log(" Push sonrası sepet:", sepet); 
console.log(" Dönen uzunluk:", yeniUzunluk);

// 
const silinen = sepet.pop();
console.log("Pop sonrası sepet:", sepet);
console.log("Silinen eleman:", silinen);

// 
sepet.push("Çilek", "Karpuz");
console.log("Çoklu ekleme:", sepet);

// 
const meyveTabagi = sepet.slice(1, 3);
console.log(" Slice (Kopya):", meyveTabagi);
console.log(" Orjinal Dizi (Bozulmadı):", sepet);

// 
const sonIki = sepet.slice(-2);
console.log(" Sondan iki eleman:", sonIki);

// 
const sepetYedek = sepet.slice();
console.log("Yedek Kopya:", sepetYedek);

// 
const liste = ["A", "B", "C", "D", "E"];
const silinenler = liste.splice(2, 2); 
console.log(" Splice ile silinenler:", silinenler);
console.log(" Kalan liste:", liste); 

// 
liste.splice(1, 0, "X", "Y"); 
console.log(" Araya ekleme:", liste);

// 
let renkler = ["Kırmızı", "Mavi", "Yeşil"];
renkler.splice(1, 1, "Sarı");
console.log("Değiştirme sonucu:", renkler);

// 
let stack = [];
stack.push("Sayfa 1");
stack.push("Sayfa 2");
stack.push("Sayfa 3");
console.log(" Geri tuşuna basıldı:", stack.pop());
console.log( "Kalan geçmiş:", stack);