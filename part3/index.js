// large code ko chote chote part me divide krke  , har part ko alag alag file me rakhna  , aur unko import krke use krna  --- isse code zyada organized rahega  , aur maintain krna bhi easy hoga


// these are modules in node js  ---  we can create our own modules and also use built in modules and third party modules

// built in modules  :   fs , path , http , os ,  etc
// third party modules  :   express , mongoose , cors ,  etc

// <!-- AB PADHENGE USER DEFINE MODULES 
//  -->



// function add( a, b )
// {
//     return a + b ;
// }

// function sub( a , b )
// {
//     return a-b ;
// }

// function mul( a, b )
// {
//     return a * b ;
// }

// function div( a, b )
// {
//     return a/b ;
// }


// console.log ( add( 10 , 20 ));
// console.log ( sub( 10 , 20 ));
// console.log ( mul( 10 , 20 ));
// console.log ( div( 10 , 20 ));

// this is very messy code  , so we will use modules add them in maths module 



// Node.js har module (file) ko run karne se pehle usko ek function ke andar wrap kar deta hai



//      WRAPPER FUNCTION 

// (function (exports, require, module, __filename, __dirname) {

//   const name = "Jango";
//   console.log(name);

// });









// maths module ko export karna padega taaki hum usko index.js file me import karke use kar sake

// const value = require('./maths');  // importing the maths module


// console.log ( value.myAddfunction( 10 , 20 ));

//  jo export kiya hoga , whi import bhi hoga ---> value ek object hoga jisme myAddfunction ek property hogi jiska value add function hoga  , isliye hum value.myAddfunction(10,20) likh ke add function ko call kar rahe hai


//  we can also import by destructuring  
const { myAddfunction , sub , mul , div } = require('./maths');  // importing the maths module by destructuring

console.log ( myAddfunction( 10 , 20 ));
console.log ( sub( 10 , 20 ));
console.log ( mul( 10 , 20 ));
console.log ( div( 10 , 20 ));

// jab bhi hum require ( import karte hai to humme complete path dena padta hai )

// "./" means current directory
// "../" means parent directory


// const val  = require ('../test/a/b')




//  default waale ko import karte hai     --->default export can be only 1 in one module

const { bhang } = require('./maths');  // importing the default export from maths module

console.log( bhang );