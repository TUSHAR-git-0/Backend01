const math = require('./math01'); 

// const {sum_fn, sub_fn} = require('./math01');  // destructuring assignment




// console.log(`maths value is : ${math}`);  ===> maths value is : tushar  // jo export kiya hai wo yaha aayega

// console.log(`maths value is : ${math}`);    first yaha math value  = tushar aayegi , because in maths01 se export hi ye value kari hai 

// we can export function "sum " also from math01.js file and use it here

// console.log(`sum of 5 and 6 is : ${math(5,6)}`);   // sum of 5 and 6 is : 11   // ab yaha sum function ki value aayegi jo math01 se export ki hai

console.log(`sum of 5 and 6 is : ${math.sum_fn(5,6)}`);   // sum of 5 and 6 is : 11   // ab yaha sum function ki value aayegi jo math01 se export ki hai
console.log(`subtraction of 5 and 6 is : ${math.sub_fn(5,6)}`);   // subtraction of 5 and 6 is : -1   // ab yaha sub function ki value aayegi jo math01 se export ki hai




// ******************************** kuch imp baate ************************************


//   ( direct name ):- builtin modules/packages in node js
//   ( ./ name ):- custom modules/packages  ( current directory) in node js


//   we can also import some inbuilt modules/packages  of node js like os , fs , path , buffer , http  etc
    //  ye saare without ./ hai means ye iski  node  diectry mei hi present hai 
    //  but jo humne khud ke modules banaye hai wo ./ se start hote hai ( current directory se start hote hai )