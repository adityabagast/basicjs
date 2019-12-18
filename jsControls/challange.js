for (let baris = 7; baris > 0; baris--) {
    let hasil = '';
    for (let kolom = 1; kolom < baris; kolom++) {
        hasil = hasil.toString().concat('*')
    }
    console.log(hasil);
    
}

for (let baris = 0; baris < 7; baris++) {
    let hasil = '';
    for (let kolom = 8; kolom > baris; kolom++) {
        hasil = hasil.toString().concat('*')
    }
    console.log(hasil);
    
}