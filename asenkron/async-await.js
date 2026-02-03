//
async function ornek1() {
    console.log();
    return "Merhaba Dünya!";
}

//
async function ornek2() {
    console.log();
    await bekle(2000);
    console.log("2 saniye sonra işlem bitti!");
}

//
async function ornek3() {
    console.log();
    let veri = await new Promise(resolve => {
        setTimeout(() => resolve({ ad: "Ahmet", yas: 30 }), 1500);
    });
    console.log(`Kullanıcı bulundu: ${veri.ad}`);
}

//
async function ornek4() {
    console.log();
    try {
        await bekle(500);
        throw new Error("Sunucu patladı!");
    } catch (hata) {
        console.error("HATA YAKALANDI:", hata.message);
    }
}

//
async function ornek5() {
    console.log();
    console.log("İşlem başladı...");
    await bekle(1000);
    console.log("1 bitti, 2 başladı...");
    await bekle(1000);
    console.log("Hepsi bitti.");
}

//
async function ornek6() {
    console.log();
    console.time("Süre");
    
    const islem1 = bekle(2000).then(() => "İşlem 1 Hazır");
    const islem2 = bekle(2000).then(() => "İşlem 2 Hazır");

    const sonuclar = await Promise.all([islem1, islem2]);
    
    console.log("Sonuçlar:", sonuclar);
    console.timeEnd("Süre");
}

//
const ornek7 = async () => {
    console.log("--- Örnek 7: Arrow Func ---");
    await bekle(500);
    console.log("Arrow function ile async çalıştı.");
};

// 
/*
(async () => {
    console.log("IIFE");
    await bekle(500);
    console.log("Otomatik çalıştı ve bitti.");
})();
*/

//
class Veritabani {
    async baglan() {
        console.log("Class");
        await bekle(500);
        return "Bağlantı Başarılı";
    }
}
async function ornek9() {
    const db = new Veritabani();
    const durum = await db.baglan();
    console.log(durum);
}

//
async function ornek10() {
    console.log("Döngü");
    const meyveler = ["Elma", "Armut", "Muz"];
    for (const meyve of meyveler) {
        await bekle(500);
        console.log(meyve);
    }
    console.log("Döngü bitti.");
}
