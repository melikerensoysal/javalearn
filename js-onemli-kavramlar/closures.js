console.log();

//
function dis() {
    let sayi = 100;
    function ic() {
        console.log(" Hafızada kalan sayı:", sayi);
    }
    return ic;
}
const hatirlayan = dis();
hatirlayan();

// 
function sayacYap() {
    let count = 0;
    return function() {
        count++;
        console.log(" Sayaç:", count);
    };
}
const sayac1 = sayacYap();
sayac1();
sayac1();

//
const sayac2 = sayacYap();
sayac2();

// 
function carpimTablosu(carpan) {
    return function(sayi) {
        console.log(`${sayi} x ${carpan} = ${sayi * carpan}`);
    };
}
const ikiler = carpimTablosu(2);
ikiler(5);
ikiler(8);

//
function ozelKasa(baslangicBakiye) {
    let bakiye = baslangicBakiye;
    return {
        paraYatir: function(miktar) { bakiye += miktar; },
        bakiyeGoster: function() { console.log( "Bakiye:", bakiye); }
    };
}
const kasa = ozelKasa(1000);
kasa.paraYatir(500);
kasa.bakiyeGoster();


//
console.log("Döngü ve Closure:");
for (var i = 1; i <= 3; i++) {

    (function(index) {
        setTimeout(() => console.log(`   Index: ${index}`), 100 * index);
    })(i);
}

//
function boyutlandirici(boyut) {
    return function() {
        console.log(`Yazı boyutu ${boyut}px yapıldı.`);
    };
}
const font20Yap = boyutlandirici(20);
font20Yap();

//
function islemHafizasi() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            console.log(" Hafızadan geldi:", n);
        } else {
            console.log("Yeni hesaplandı:", n);
            cache[n] = n * 2;
        }
    };
}
const islem = islemHafizasi();
islem(5);
islem(5);

//
function sadeceBirKez() {
    let calisti = false;
    return function() {
        if (!calisti) {
            console.log( "İlk kez çalıştı!");
            calisti = true;
        } else {
            console.log(" Zaten çalışmıştı, tekrar çalışmaz.");
        }
    };
}
const baslat = sadeceBirKez();
baslat();
baslat();

//
const MatematikModulu = (function() {
    let pi = 3.14; // Private
    function topla(a, b) { return a + b; }
    
    return {
        hesapla: function(a, b) {
            console.log(" Sonuç:", topla(a, b) * pi);
        }
    };
})();
MatematikModulu.hesapla(2, 3);