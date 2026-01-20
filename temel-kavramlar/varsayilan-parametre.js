// Parametre gonderilmezse varsayilan deger kullanilir
const hosgeldin = (isim = "Misafir") => {
    console.log(`Hos geldin, ${isim}`);
};
hosgeldin("eren");
hosgeldin();

// sadece eksik olan parametreler varsayilani alir
const hesapla = (a = 1, b = 1) => a * b;
console.log("Sonuc:", hesapla(5));

// null gonderilirse default devreye girmez
const testEt = (deger = 100) => console.log("Deger:", deger);
testEt(undefined);
testEt(null);

// bir parametrenin varsayilan degeri baska bir parametreye bagli olabilir
const alanHesapla = (genislik, yukseklik = genislik) => {
    return genislik * yukseklik;
};
console.log("Kare Alani:", alanHesapla(5));


const tiklamaIslemi = (callback = () => console.log("Tiklandi (Varsayilan)")) => {
    callback();
};
tiklamaIslemi();


const profiliGoster = ({ ad, yas = 18 }) => {
    console.log(`Ad: ${ad}, Yas: ${yas}`);
};
profiliGoster({ ad: "Can" });

// varsayilan deger sabit olmak zorunda degildir fonksiyon cagrisi olabilir
const rastgeleSayi = () => Math.floor(Math.random() * 100);
const skorVer = (puan = rastgeleSayi()) => {
    console.log("Oyuncu Puani:", puan);
};
skorVer();


const dogru = (a, b = 2) => a * b;
console.log("Islem:", dogru(10));

// timeout suresi verilmezse standart sure veririz
const veriGetir = (url, timeout = 5000) => {
    console.log(`${url} adresine istek atiliyor. Zaman asimi: ${timeout}ms`);
};
veriGetir("api.google.com");

// map methodu kullanirken dizi null gelirse kod calismaz bunu onlemek icin bos dizi veririz
const listele = (liste = []) => {
    liste.forEach(item => console.log(item));
};
listele();