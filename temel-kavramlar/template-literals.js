// tek veya cift tirnak yerine ` isareti kullanilir
const mesaj = `Bu bir template literal metnidir.`;
console.log(mesaj);

// ${} icine degisken yazilir + operatorune gerek kalmayiz
const ad = "Melik";
console.log(`Merhaba ${ad}, hos geldin!`);

// ${} icinde toplama, cikarma vs yapilabilir
const fiyat = 100;
const kdv = 0.18;
console.log(`KDV Dahil Fiyat: ${fiyat * (1 + kdv)} TL`);

// \n karakterine gerek kalmadan entera basip alta gecebilirsin
const siir = `
Gul rengi sarap
Icilmez mi boyle havada?
`;
console.log(siir);

// ${} icinde fonksiyon calistirip sonucunu yazdirabilirsin
const tarihGetir = () => new Date().getFullYear();
console.log(`Su an ${tarihGetir()} yilindayiz.`);

// metin icinde kosula gore yazi degistirebilirsin
const online = true;
console.log(`Kullanici su an: ${online ? "CEVRIMICI" : "CEVRIMDISI"}`);

// obje ozelliklerini yazdirma
const urun = { marka: "Apple", model: "iPhone 15" };
console.log(`Secilen cihaz: ${urun.marka} - ${urun.model}`);

//
const htmlKod = `
    <div>
        <h1>Baslik</h1>
        <p>Icerik</p>
    </div>
`;
console.log("HTML Ciktisi:", htmlKod);

// karmasik yapilarda ic ice kullanilabilir
const dersler = ["Math", "Fizik"];
console.log(`Dersler: ${dersler.map(d => `[${d}]`).join(" - ")}`);

// metin icinde backtick kullanmak istersen ters slash kullanilir
console.log(`Burada \`backtick\` isareti kullandim.`);