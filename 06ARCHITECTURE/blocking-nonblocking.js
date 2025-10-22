const fs = require('fs');
// fs = file system  ( ye ek built in module hai node js ka)


//Sync ...Blocking ......
// fs.writeFileSync('./file.txt' , 'this is my first file Sync');  // agar file exist nahi karti to ye nayi file create kar dega aur agar file exist karti hai to uske content ko overwrite kar de dega


//Async ...Non-Blocking ......
// fs.writeFile('./file.txt' , 'this is my first file Sync', (err)=>{   console.log('file created');});  // ye asynchronous hai ( non-blocking )  ( ye background me chalta rahega aur jab file create ho jayegi to callback function call ho jayega)


// read se samjhte hai 

//Sync ...Blocking ......
console.log('start');
const result = fs.readFileSync('./file.txt' , 'utf-8');  // ye synchronous hai ( blocking )  ( jab tak file read nahi ho jati tab tak aage ka code execute nahi hoga)

console.log(result);
console.log('end');

// ye top to bottom execute hoga ,, because  at every line thread block ho jayega jab tak file read nahi ho jati then move to "end"




// Async ...Non-Blocking ......
console.log('start');
console.log('start reading file');
console.log('ding ding');
fs.readFile('./file.txt' , 'utf-8' , (err , result)=>{   console.log(result);});  // ye asynchronous hai ( non-blocking )  ( ye background me chalta rahega aur jab file read ho jayegi to callback function call ho jayega)
console.log('end');

// ye top to bottom necessary nhi , because  ye block nhi kr rhi ( jab tak file read hogi tab tak aage ka code execute hota rahega)

// BY DEFAULT  THREAD SIZE 4 hoti hai node js me
// but to reduce waiting time we can increase thread size  by buying high core processor
//  Max = 8 core then thread size = 16

// we get info about our systems operating systems
    const se = require('os')
    console.log(OscillatorNode.cpus().length);// get to know ki kitne thread/cpus present hai computer m 
