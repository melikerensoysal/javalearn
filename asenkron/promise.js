const sozVer = new Promise((resolve, reject) => {
    resolve("sozumu tuttum");
});

sozVer.then((mesaj) => {
    console.log("1. Örnek:", mesaj);
});




const yaziTura = new Promise((resolve, reject) => {
    const sans = Math.random();
    if (sans > 0.5) {
        resolve("Yazi geldi (Kazandin)");
    } else {
        reject("Tura geldi (Kaybettin)");
    }
});

yaziTura
    .then((sonuc) => console.log(sonuc))
    .catch((hata) => console.log(hata));




const bekleVeDondur = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("3 saniye doldu");
    }, 3000);
});

bekleVeDondur.then((msj) => console.log(msj));





const sayiGetir = new Promise((resolve) => resolve(10));

sayiGetir
    .then((sayi) => {
        console.log( sayi);
        return sayi * 2;
    })
    .then((yeniSayi) => {
        console.log(yeniSayi);
        return yeniSayi + 5;
    })
    .then((sonSayi) => {
        console.log(sonSayi);
    });




function kullaniciKontrol(isim) {
    return new Promise((resolve, reject) => {
        if (isim === "Admin") {
            resolve("yonetici girisi basari.");
        } else {
            reject("Yetkisiz kullanici");
        }
    });
}

kullaniciKontrol("Misafir")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));





const veritabaniIslemi = new Promise((resolve, reject) => {
    resolve("Veri Kaydedildi.");
});

veritabaniIslemi
    .then((res) => console.log(res))
    .finally(() => console.log());




const p1 = new Promise(resolve => setTimeout(() => resolve("Resimler indi"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("yazilar indi"), 2000));

Promise.all([p1, p2])
    .then((sonuclar) => {
        console.log( sonuclar);
    });





const hizli = new Promise(resolve => setTimeout(() => resolve("hizli olan kazandi"), 100));
const yavas = new Promise(resolve => setTimeout(() => resolve("yavas olan"), 500));

Promise.race([hizli, yavas])
    .then((kazanan) => console.log( kazanan));





function urunGetir(id) {
    return new Promise((resolve, reject) => {
        console.log(` ${id} araniyor...`);
        setTimeout(() => {
            const urun = { id: id, ad: "Laptop", fiyat: 15000 };
            resolve(urun);
        }, 1500);
    });
}

urunGetir(101).then(u => console.log(u));





function bolme(a, b) {
    if (b === 0) {
        return Promise.reject("sifira bolunmez");
    }
    return Promise.resolve(a / b);
}

bolme(10, 0)
    .then(sonuc => console.log(sonuc))
    .catch(hata => console.log( hata));