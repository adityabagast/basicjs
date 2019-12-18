for (let baris = 7; baris > 0; baris--) {
    let hasil = '';
    for (let kolom = 1; kolom < baris; kolom++) {
        hasil = hasil.toString().concat('*')
    }
    console.log(hasil);
    
}

for (let i=1;i<=5;i++){
    let hasilp = '';
    for (let j=i;j<=5;j++){
        hasilp = hasilp.toString().concat(' ')
    }
    for (var k=1;k<=i;k++){
        hasilp = hasilp.toString().concat('*')
    }
    for (var l=1;l<=i-1;l++){
        hasilp = hasilp.toString().concat('*')
    }
    console.log(hasilp)
}