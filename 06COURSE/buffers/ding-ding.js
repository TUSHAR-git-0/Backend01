const { Buffer } = require("buffer");

const buf = Buffer.alloc(5);  // means allocate 5 bytes of memory and return a buffer object which is pointing to that memory location

console.log(buf);   //<Buffer 00 00 00 00 00>   buffers is looking like array but also their implimentation is same as array 

console.log(buf[1]);   //0  

const buf2 = Buffer.from("hello world");
console.log(buf2);   //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64> 

console.log(buf2.toString());   //hello world


const buf3 = Buffer.allocUnsafe(5);  // it is faster than alloc but it is not safe because it may contain old data which is not cleared yet
//  yaha values may contain garbage values because it is not cleared yet

console.log(buf3);   // <Buffer 00 00 00 00 00>   may contain garbage values


//  read and write in buffer

const buf4 = Buffer.alloc(30);
buf4.write(" hello_Aditi_Chandyal ");  // it will write the string in the buffer and return the number of bytes written
console.log(` this is my 4th buffer ${buf4} `);  // <Buffer 68 65 6c 6c 6f>  it will write the string in the buffer and return the number of bytes written
console.log(buf4.toString());


const buf5 = Buffer.from("hello world");
console.log(buf5.toString("utf-8", 0,5));  // it will read the buffer and return the string in utf-16le encoding from index 0 to 5


// we can over write the value in the buffer

const buf6 = Buffer.from("hello world");
console.log(buf6.toString())
buf6[0] = 0X7b;   // it will overwrite the value at index 0 with 72 which is the ascii value of H
console.log(buf6.toString());


// concatination of buffers

const buf7 = Buffer.from("hello");
const buf8 = Buffer.from(" world");

const merged = Buffer.concat([buf7, buf8]);
console.log(merged.toString());   // hello world