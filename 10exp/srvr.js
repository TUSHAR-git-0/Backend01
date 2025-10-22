// const fs = require('fs');
// const http = require('http');
// const url = require('url');
const express = require('express');  // express ko import karo 

const app = express();   // express ko app variable me store karo( ACTUALLY YE APP HI HUMARA HANDLER FUNCTION HOGA )

                        // jo humare pure server ko handle karta hai ( KIS REQUEST SE KYA HOGA , KYA HO RHA HAI , KYA RESPONSE DENA HOGA )

// ab ye app humare liye requests ko handle karega

app.get('/',(req,res)=>{   // konse path pr request aayi hai " / "to ye callback function( HANDLER FUNCTION  FOR THIS ROUT )  < MEANS  ye callback is only for home page ke get request k liye 
    res.send("Hello from HOME PAGE ");  // HANDLER FUNCTION FOR HOME PAGE
});

app.get ( "/about" , (req,res)=>{
    res.send ('hello form about page');
    
});

// humme yaha query parameters ko alag se handle kanre ki jarurat nhi hai ( EXPRESS APNE AAP HANDEL KR LETI HAI)

app.get("/contact" , (req,res)=>{
    res.send("hello from contact page" + "   hey  " + req.query.name  + "  hey  you are at  " + req.query.page  + "   and  your age is   " + req.query.age);// for handling multiple queries 
});

// BY USING EXPRESS IT IS VERY EASY to handle multiple requests and ROUTE THESE THINGS

// EXPRESS USE HUMME ALLOW KARTA HI HUM  HTTP KO REQUIRE KARNE KI JARURAT NHI HA , YE APNE AAP KR LEGA 
//  OR SERVER CREATE BHI YE APNE AAP KR LEGA 

// const my_server = http.createServer(handler);
// const my_server = http.createServer(app);  NO NEED TO MANULLY CREATE SERVER

app.listen(3003 ,()=>{
    console.log("server started at port 3003");

} );


//  express is just a framework  internally http hi use hota hai 



// REMEMBER :   app.METHOD(PATH ,HANDLER)  

// app -> is an instance of express
// method -> is a http request method 
// path -> is a path on the server
// handler -> is a function executed when a request is matched 