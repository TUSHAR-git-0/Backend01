exports.myAddfunction = function add( a, b )
{
    return a + b ;
}



exports.sub = function sub( a , b )
{
    return a-b ;
}

exports.mul =function mul( a, b )
{
    return a * b ;
}

exports.div =function div( a, b )
{
    return a/b ;
}

// module ko expert ko karna padega 

// expoting by name   { exports.<name> =  value   }  value can be anything like function , variable , object , array  etc

// to use this , either we can use by destructuring it or we can import the whole module and then use it by using dot notation  ( like value.myAddfunction(10,20) )
// const value = require('./module_name ');








// ***********************************************************

// default export 

// there can be only 1 default export in one module
// default export do not have any name 


// by default export karke hum kisi bhi ek method ko export kr sakte hai , or kisi bhi name se usko import kar sakte hai



module.export = function bhang_bharosa( a, b )
{
    return a + b ;
}




// 🔥 2️⃣ Multiple cheeze export karni ho

// 👉 Ek object bana ke export karo

// 📄 math.js
// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// module.exports = {
//   add,
//   sub
// };
// 📄 index.js
// const math = require("./math");

// console.log(math.add(2, 3));
// console.log(math.sub(5, 2));