

// hum yha modules ka use karenge 
// by giving the all routes in a new module named route !!

// in real world project
// like author ke routes alag file me , book ke routes alag file me , user ke routes alag file me rakhte hai  taaki code clean rahe aur maintainable rahe

//  saare routes ko usske andr define karenge  , aur fir uss module ko import karenge taaki hum isko index.js file me import karke use kar sake




//  route ko import bhi karna padega !


//  (  CUSTOMER MODULE   )



//  wese humaare data  = manually liye hai , or book_router module usse excess nhi kar pa rhi hai  , then we have to import / export that as well 

// hum middleware ko bhi seperate file m rakh sakte hai , or usko bhi import kar sakte hai  ( like logger middleware )

const book_routes = require("./routes/books.routes");  //  ./ means current directory;  // importing the book routes module  

//  book_routes ek object hoga jisme saare books k routes honge  , isliye hum app.use() me book_routes ko pass karenge taaki hum uske saare routes ko use kar sake


const express = require("express"); 
const app = express();


const logger = require("./middleware/logger");   


// const fs = require('fs');         fs module ki need humme middleware m hai , to isse ussi file me import karenge  ( like logger middleware )  , kyuki humme isse index.js me use nhi karna hai , to isse index.js me import karne ki koi need nhi hai







app.use(express.json());  // ye humara built in middleware hai  , we set up one here   ab request bhejega wo parse kar dega json format me  aur hum usse req.body se access kar sakte hai

app.use(logger);


// console.log ( `hello from my new project : ${book_routes}` );

app.use('/books' , book_routes);    //  agar koi route hai jo /books se start ho rha h , then move that route to    " book_routes " module 

// ************************ yaha hum   "/"  rakh sakte the  but , humme pata hai  ki saare routes " /books "  se start ho rhe  hai  , to "/books"  karne se ye define ho gya ki ye book ka route hai , then book_routes ke andar jo bhi route define honge wo "/books" ke baad  hi aa rhe honge  , for example : "/books/" , "/books/:id" , "/books/create" etc  (  book_routes me define kiye gaye routes ke hisab se )

                                      // or ab book_routes   k andar se  " /books " KO  hta denge , because we know all route in book_router  "/books" ke baad aayenge


app.listen(8000,()=>{
    console.log("server started at port 8000 ");
});











// -------------------------FINAL CODE IS ----------------------------------------------------------







//     const express = require("express"); 
//     const app = express();

//     const book_routes = require("./routes/books.routes");  
//     const { logger }= require("./middleware/logger");   

//     app.use(express.json()); 
//     app.use(logger);
        
//     app.use('/books' , book_routes); 
    
//     app.listen(8000,()=>{
//         console.log("server started at port 8000 ");
//     });


