const data = '{"motor": "biru", "mobil": "kuning", "pesawat": 10}'

const dataJson = JSON.parse(data);

console.log(dataJson);

const dataString = JSON.stringify(dataJson);

console.log(dataString);
