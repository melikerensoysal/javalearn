//
function ornek1() {
    console.log();
    console.log("Başladı");
    setTimeout(() => {
        console.log("3 saniye doldu!");
    }, 3000);
    console.log("Kod akışı devam ediyor...");
}

//
function ornek2() {
    console.log();
    let sayac = 0;
    setInterval(() => {
        sayac++;
        console.log(`Sayaç: ${sayac}`);
    }, 1000);
}

//
function ornek3() {
    console.log();
    const bombaID = setTimeout(() => {
        console.log("BUM! (Bu yazmamalı)");
    }, 2000);
    
    clearTimeout(bombaID);
    console.log("Zamanlayıcı iptal edildi, bomba patlamadı.");
}

//
function ornek4() {
    console.log();
    let geriSayim = 5;
    const zamanlayici = setInterval(() => {
        console.log(geriSayim);
        geriSayim--;
        if (geriSayim < 0) {
            clearInterval(zamanlayici);
            console.log("Süre doldu!");
        }
    }, 500);
}

//
function ornek5() {
    console.log();
    function selamla(isim, mesaj) {
        console.log(`${isim}, ${mesaj}`);
    }
    setTimeout(selamla, 1000, "Ayşe", "Naber?");
}

//
function ornek6() {
    console.log();
    console.log("1. Satır");
    setTimeout(() => console.log("2. Satır (Timeout)"), 0);
    console.log("3. Satır");
}

//
function ornek7() {
    console.log();
    let i = 0;
    function tekrarla() {
        i++;
        console.log(`Tekrar: ${i}`);
        if (i < 5) setTimeout(tekrarla, 500);
    }
    tekrarla();
}

//
function ornek8() {
    console.log();
    const nesne = {
        ad: "Test Nesnesi",
        baslat: function() {
            setTimeout(() => {
                console.log(`${this.ad} çalışıyor (Arrow function sayesinde 'this' korundu).`);
            }, 1000);
        }
    };
    nesne.baslat();
}

//
function ornek9() {
    console.log();
    let timer;
    function tusBasildi(harf) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(`Arama yapılıyor: ...${harf}`);
        }, 500);
    }
    

    tusBasildi("K");
    tusBasildi("Ka");
    tusBasildi("Kal");
    tusBasildi("Kalem"); 
    
}

//
function ornek10() {
    console.log();
    const chars = ["|", "/", "-", "\\"];
    let i = 0;
    const loop = setInterval(() => {
        process.stdout.write(`\rYükleniyor ${chars[i]}`);
        i = (i + 1) % chars.length;
    }, 100);

    setTimeout(() => {
        clearInterval(loop);
        console.log("\nBitti!");
    }, 2000);
}
