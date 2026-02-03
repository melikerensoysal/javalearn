console.log();

// ÖRNEK
console.log( this);

//
const kullanici = {
    ad: "Elif",
    soyle: function() {
        console.log(this.ad);
    }
};
kullanici.soyle();

//
const kullanici2 = {
    ad: "Can",
    soyle: () => {
        console.log(this.ad);
    }
};
kullanici2.soyle();

//
function Kisi(isim) {
    this.isim = isim;
}
const kisi1 = new Kisi("Deniz");
console.log(kisi1.isim);

//
function selam() {
    console.log(this.ad);
}
const misafir = { ad: "Zeynep" };
selam.call(misafir);

//
function tanit(yer, zaman) {
    console.log(` ${this.ad}, ${yer} şehrinde, ${zaman}`);
}
tanit.apply(misafir, ["İzmir", "bugün"]);

//
const baglanmisFonksiyon = selam.bind(misafir);
baglanmisFonksiyon();

//
const fakeButton = {
    click: function() {
        console.log( this);
    }
};
fakeButton.click();

//
const fonksiyonuAl = kullanici.soyle;

//
const okul = {
    ad: "Lise",
    liste: ["Ali", "Veli"],
    yazdir: function() {
        this.liste.forEach(ogrenci => {
            console.log(`${this.ad} - ${ogrenci}`);
        });
    }
};
okul.yazdir();