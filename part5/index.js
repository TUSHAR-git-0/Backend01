    
    //                      MVC ( MODEL VIEW CONTROLLER ) ARCHITECTURE IN EXPRESS JS


    const express = require("express"); 
    const app = express();

    const book_routes = require("./routes/books.routes")  // if folder changed
    const logger= require("./middleware/logger");   

    app.use(express.json()); 
    app.use(logger);
        
    app.use('/books' , book_routes);  // when we hit /books route then it will go to book_routes and then it will check for the routes defined in book_routes file and then it will call the corresponding function from controller file 
    
    
    app.listen(8000,()=>{
        console.log("server started at port 8000 ");
    });



// 1)   yaha humara code kafi clean ho gya hai , 


// 2  lekin jesse jesse code grows , humara routes ka code bhi badhta jayega like     admin.route.js , user.route.js etc  

//  MVC architecture me hum apne code ko 3 parts me divide karte hai  , Model , View , Controller

// 4) View :  ( what user SEE : FRONTEND PART   LIKE  HTML , CSS , JS , REACT )  hum  ye sb view directory m daal dete hai , or usme hum apne frontend code ko rakhte hai     , for example : agar hum ek web application bana rahe hai to hum ek view directory banayenge jisme hum apne HTML , CSS , JS files ko rakhte hai  ( like index.html file me humne ek simple HTML page banaya hai jisme hum book objects ko display kar rahe hai )

// 5) Controller :( what needs to be done : BACKEND PART) Controller me hum apne application ke logic ko implement karte hai ,  user request bhejta hai to usse kaise handle karna hai , data ko kaise process karna hai , database se data ko kaise fetch karna hai , etc  ( like book.routes.js file me humne apne book ke routes ko define kiya hai jisme humne GET , POST requests ko handle kiya hai )

// 6) Model : ( data base ) Model me hum apne data ko represent karte hai   TABLE  , for example : agar humare pass books ka data hai to usse represent karne ke liye hum ek book model banayenge , jisme hum define karenge ki book object me kaun kaun se properties honi chahiye , for example : id , title , author etc  ( like book.js file me humne BOOKS array banaya hai jisme book objects hai )





// VEIW  ( user jo dekhte hai  , HELP TO INTERACT WITH CONTROLLER ) ------> CONTROLLER ( veiw k instruction ko handle karta hai AND TALK TO MODELS ) ------> MODEL   ( controller  batata hai ki data base me kya karna hai   , kys STORE  karna hai , kya FETCH  karna hai etc )

// BOOKS --> models



// controller naam ka banao    jisme saari functanility likhi hogi  )   ---->   (   router.get('/:id' , (req,res)  jisme " route.get('/:id' " )  request from front end  ---> then funcatinality 

// controllers file m actual code likha rhta hai , * very critical * part of coding files 
// controller ki files hi DATABASE KA USE KARTI HAI , aur ROUTES KI FILES SIRF ROUTES DEFINE KARTI HAI  , aur ROUTES KI FILES ME CONTROLLER KO IMPORT KARKE USKE FUNCTIONS KO CALL KARTI HAI
// 
//  , view naam ka folder banega ( front end k liye ), model naam ka banao