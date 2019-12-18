//[value, value, vallue]
//{key: value, key: value}

const dataArray = [1, 2, 'tiga']
console.log(dataArray);
console.log(dataArray[0]);

const dataObject = {pesawat: 'merah', kereta: 'kuning'}
console.log(dataObject);
console.log(dataObject.kereta);

console.log(dataArray.slice(0, 1));

dataArray.push('empat');
console.log(dataArray);

console.log(dataArray.length);

for (let i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i]);
    
}

console.log('\n' + 'PISAH' + '\n');


dataArray.forEach(value => console.log(value));

console.log('\n' + 'PISAH MAP' + '\n')

dataArray.map((value, index) => console.log(index, value));