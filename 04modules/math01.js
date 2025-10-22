// modules are some files which has diff-diff functions
// they are not part of the main codebase
// but can be used to extend functionality


// complete project can be breake into several  small modules ( files)
// like math module, string module etc

function sum(a, b) {

    return a + b;

}
console.log(sum(5,6));  // this function when called in function file it will give error because it is not defined in that file

// **********************( but if we wanted to   use this function in function1.js file we can do that by exporting and importing it)******************(  require  ) ka use karke 
//  WE CAN USE A MODULE IN MAIN FILE OR IN ANOTHER MODULE *** require ***   same as #include in c/c++

// how to use require (USE ONE MODULE IN ANOTHER MODULE OR MAIN FILE)

// 1  phle math01.js file me export karna padega    (ABHI YE PRIVATE FUNCTION HAI )

// module .exports = "tushar";             // ye object hai  jisme value = tushar export hui hai  ---->jisme hum multiple functions ko export kar sakte hai

// module.exports = sum;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// 2  phir function02.js file me import karna padega( JIS FILE KO HUMME USE KARNA HAI :- USSE IMPORT KARTE HAI )
// 3  const math = require('./modules/math01');  //  ./ means current directory
// 4  console.log(math.sum(5,6));  // we have to use math.sum because sum is inside math module ( math k andar function [sum] return hua tha )  object k elements ko . se hi access krte hai !



// we can have many fuctions in a single module and export them as an object

function sub( a , b ){
        return a-b;
}

// module.exports = sub;@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  // sum function ko overwrite kar dega ye wala and then sub function hi export hoga

// but we can multiple functions ko ek sath export karna chahte hai to uske liye object ka use karenge

// module.exports = {  
//     sum_fn :sum,
//     sub_fn :sub
// };

Module.export={sum , sub}; // this is also exporting    ^^^^^^this is prefered way^^^^^^-------> creating all the functions first and then exporting them in one go


// ab hum dono function ko ek sath export kar payenge






// ############################################################################### ANOTHER WAY TO EXPORT A MODULE ###########################################################################################

// first create all the functions
// then export them  one by one

exports.add1=(a , b)=> a+b;
exports.sub1=(a,b)=>a-b;

// but these are anonymous function because they don't have any name





