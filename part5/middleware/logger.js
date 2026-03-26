const fs = require('fs');         // fs module ko import karna padega kyuki humme isse logger middleware me use karna hai , to isse ussi file me import karenge  ( like logger middleware )  

const logger = function( req , res , next )
{
    const log = ` [${new Date().toISOString()}]  ${req.method}  ${req.url} `;   // log me humne date , method , url ko log karne ke liye string banayi hai

    fs.appendFileSync("logs.txt" , log +"\n" , "utf-8");  // appendFileSync method se hum log ko logs.txt file me append kar denge  ( like log ke baad new line add kar denge )

    next();  // next() method se hum next middleware ko call kar denge  ( like agar humne isse index.js me app.use(logger) me use kiya hai to ye next middleware ko call kar dega )
}
module.exports = logger;