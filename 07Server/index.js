const http = require('http');
// ab iss module ka use karke hum apna server bna sakte hai 

// const myServer = http.createServer();              // ab iss webserver ho handel bhi to karna padega ki "kis perticular request pe kya response dena hai"

// so we also need handler function    {
//  to createServer ek callback  parameter leta hai jo incoming request ko handle karta hai

const myServer = http.createServer((req,res)=>{  
    console.log("Request aayi hai");
    console.log(req.headers);   // ye url hume batata hai ki client ne kis url pe request bheji hai
    //  console.log(req);                      // YE SAB DATA MILTA HAI REQUEST ME( TERMINAL P ):- client request
    res.end("Hello from the other side");  // request ko end kr do hello 
    
 });
//  console.log(myServer);  // ye ek object return karega jisme server se related information hogi

//  createServer : jb bhi koi request aayegi to ye callback function ko run karega
//  req : ye object request ke bare me jankari deta hai (  META DATA OF REQUEST/client )jaise ki url, method, headers etc
//  res : ye object response bhejne ke liye use hota hai ( META DATA OF RESPONSE) jaise ki status code, headers, body etc

// ab iss server ko run karne ke liye humme ek port number ki requirement hoti hai  
// uss port number pe humara server listen karega   ( port is like a door jiske through humara server internet se connect hota hai  8000, 8001,8002 etc )
// multiple server cant listen on same port number
myServer.listen(8000,()=>{
    console.log("Server is listening on port 8000") // ALSO CHECK AT **************   http://localhost:8000   ***********
}); // server listened at 8000 port and callback function run hoga jb server successfully start ho jayega

// to run this server go to package.json file and add "start" : "node Server/index.js" in scripts object

// local host p chalne pr request aayi createServer ko then call back acall hua 



// console.Console(req )    karne pr hume bhot bada data milega jo object form m hoga
// /req k andar request ki saari information hogi jaise ki url, method, headers etc

// hummne response me "hello from the other side" bheja hai
// res.end() se hum response ko end karte hai

// and response k through hum apni response send kar sakte hai  ****can send any thing like image , html , video etc 
// sending html through res is server side renduring 


