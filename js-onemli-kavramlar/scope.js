console.log();

//
let globalDegisken = "Ben Globalim";
function goster() {
    console.log( globalDegisken);
}
goster();

//
function gizliFonksiyon() {
    let gizli = "Sadece buradayım";
}

//
{
    var sizar = "Dışarı çıkarım";
    let sizmaz = "Burada kalırım";
}
console.log(sizar);


//
let disari = "Dış";
function kapsayici() {
    let orta = "Orta";
    function icerideki() {
        console.log(` ${disari} -> ${orta}`);
    }
    icerideki();
}
kapsayici();

//
let isim = "Ahmet (Global)";
function isimDegis() {
    let isim = "Mehmet (Local)";
    console.log(isim);
}
isimDegis();
console.log("5. Dışarıdaki isim hala:", isim);

//
let puan = 10;
function puanArttir() {
    puan = 20;
}
puanArttir();
console.log( puan);

//
function kotuKod() {
    kacak = "Ben aslında yokum ama varım";
}
kotuKod();
console.log( kacak);

//
let a = 1;
function x() {
    function y() {
        function z() {
            console.log( a);
        }
        z();
    }
    y();
}
x();

//
for (let i = 0; i < 2; i++) {
}

//
const sabitObje = { ad: "Ali" };
sabitObje.ad = "Veli";
console.log("10. Const Obje:", sabitObje.ad);
