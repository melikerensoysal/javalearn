function selamla(isim, callback) {
    const mesaj = "Merhaba " + isim;
    callback(mesaj);
}

selamla("Ahmet", function(gelenMesaj) {
    console.log("1. ornek:", gelenMesaj);
});


function topla(sayi1, sayi2, callback) {
    const sonuc = sayi1 + sayi2;
    callback(sonuc);
}

topla(5, 10, (sonuc) => {
    console.log("2. ornek (sonuc):", sonuc);
});


function veriIndir(callback) {
    console.log("3. Ornek: Veri iniyor");
    setTimeout(() => {
        callback("İndirme tamamlandi");
    }, 1000);
}

veriIndir((durum) => {
    console.log(durum);
});


function dosyaOku(basariliMi, callback) {
    if (basariliMi) {
        callback(null, "Dosya icerigi burada");
    } else {
        callback("Dosya bulunamadi", null);
    }
}

dosyaOku(false, (hata, veri) => {
    if (hata) {
        console.log("4. ornek (Hata):", hata);
    } else {
        console.log("4. ornek (Veri):", veri);
    }
});


function diziGez(dizi, callback) {
    for (let i = 0; i < dizi.length; i++) {
        callback(dizi[i]);
    }
}

const meyveler = ["Elma", "Armut", "Muz"];
diziGez(meyveler, (meyve) => {
    console.log("5. ornek (Meyve):", meyve);
});


function girisYap(kullaniciAdi, callback) {
    console.log("6. ornek: giris yapiliyor");
    setTimeout(() => {
        callback(kullaniciAdi);
    }, 500);
}

girisYap("KodYazan", (user) => {
    console.log(`hosgeldin ${user}, panelin hazir.`);
});


function kitapBilgisi(callback) {
    const kitap = "Sefiller";
    const yazar = "Victor Hugo";
    callback(kitap, yazar);
}

kitapBilgisi((ad, yazar) => {
    console.log(`7. ornek: ${ad} kitabininn yazari ${yazar}.`);
});



function sadeceCiftSayilar(sayi, callback) {
    if (sayi % 2 === 0) {
        callback(sayi);
    }
}

sadeceCiftSayilar(4, (s) => console.log("8. ornek (cift):", s));
sadeceCiftSayilar(5, (s) => console.log("8. ornek (burasii hata alir):", s));



function suKaynat(callback) {
    console.log("9. Su kayniyor");
    setTimeout(() => {
        callback();
    }, 500);
}

function kahveDok(callback) {
    console.log("9. Kahve dokuluyor");
    setTimeout(() => {
        callback();
    }, 500);
}

suKaynat(() => {
    kahveDok(() => {
        console.log("9. Kahve hazir");
    });
});



function butonaTikla(callback) {
    console.log("10. Butona tiklandi varsay");
    callback();
}

butonaTikla(() => {
    console.log("10. ornek: Form gonderildi");
});