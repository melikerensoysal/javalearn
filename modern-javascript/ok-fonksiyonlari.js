
// function  yerine => isareti kullanilir.
const selamla = () => {
    console.log("Merhaba Dunya!");
};
selamla();

// eger tek parametre varsa parantez kullanmak zorunlu degiliz
const karesiniAl = x => x * x;
console.log("5'in Karesi:", karesiniAl(5));

// birden fazla parametre varsa parantez zorunludur
const topla = (a, b) => a + b;
console.log("Toplam:", topla(10, 20));

// tek satirlik islem varsa { } ve return yazmaya gerek yoktur
const ikiyeBol = sayi => sayi / 2;
console.log("Yarisi:", ikiyeBol(100));

// suslu parantez { } acarsak return yazmaliyiz
const detayliIslem = (a, b) => {
    const sonuc = a * b + 2;
    return sonuc;
};
console.log("Sonuc:", detayliIslem(3, 4));

// suslu parantezler blok sanilmasin diye normal parantez () icine alinir
const personelYarat = (ad) => ({ isim: ad, departman: "IT" });
console.log(personelYarat("Ahmet"));

// normal fonksiyona gore daha temiz gorunur
const sayilar = [1, 2, 3];
const katlari = sayilar.map(x => x * 10);
console.log("Katlar:", katlari);

// tek satirda filtreleme yapilabilir
const fiyatlar = [50, 100, 150];
const ucuzlar = fiyatlar.filter(fiyat => fiyat < 120);
console.log("Ucuz Urunler:", ucuzlar);

// setTimeout gibi yerlerde pratiktir
setTimeout(() => {
    console.log("3 saniye sonra bu mesaj gorundu (Arrow Function)");
}, 3000);

// arrow functionlar kendi this ini olusturmaz disaridakini kullanir
const testObj = {
    deger: 100,
    goster: function() {
        setTimeout(() => console.log("Degerim:", this.deger), 100); 
    }
};
testObj.goster();