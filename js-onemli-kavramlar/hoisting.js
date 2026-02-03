console.log();

//
console.log(" Var değeri:", xDegeri); 
var xDegeri = 5; 


//
try {
    console.log(yDegeri);
} catch(e) {
    console.log("Let Hatası:", e.message);
}
let yDegeri = 10;

//
selamVer(); 
function selamVer() {
    console.log("Fonksiyon çalıştı!");
}

// 
try {
    selamVer2();
} catch(e) {
    console.log("Expression Hatası:", e.message);
}
var selamVer2 = function() {
    console.log("Bu çalışmaz");
};

//
try {
    okFonksiyonu();
} catch(e) {
    console.log("Arrow Func Hatası:", e.message);
}
const okFonksiyonu = () => console.log("Selam");

//
try {
    new Araba();
} catch(e) {
    console.log(" Class Hatası:", e.message);
}
class Araba {}

//
var test = "Değişken";
function test() { return "Fonksiyon"; }
console.log("17. Çakışma sonucu (typeof):", typeof test);

//
{
    function blokIci() { return "Ben buradayım"; }
}
console.log(" Blok dışı fonksiyon:", blokIci());

//
try {
    console.log(olmayanDegisken);
} catch(e) {
    console.log("tanımsız hatası:", e.message);
}
