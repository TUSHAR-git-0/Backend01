const express = require("express");
const fs = require('fs');  // to create log file 
const app = express();



const books = [                                            // this is our mock data  = books  , as we don't have any database so we will use this data to send to client when client request for books
    {id :1 , title: 'book One' , author_One : 'author One'},
    {id :2 , title: 'book Two' , author_Two : 'author Two'},
];


// MIDDLEWARE ( plugins ) notes below 

app.use(express.json());  // ye humara built in middleware hai  , we set up one here   ab request bhejega wo parse kar dega json format me  aur hum usse req.body se access kar sakte hai

app.get('/' , ( req,res)=>{
    res.end("hello from home page");
})


// route 
app.get('/books' , (req,res)=>{
    res.set("x-tus" , "tushar sharma");   // this is how we can send custom headers to client using res.set() method
    res.json(books);            //   humaare data waale object ko automatically json format me convert kar deta hai  ( res.json() )  aur client ko bhej deta hai  ( headers provide karke )
}) ;

app.get('/books/:id' , (req,res)=>{
    const id = parseInt(req.params.id);   // dynamic parameter ko handle karne ke liye humme req.params ka use karna hota hai  ( like /books/1 to id = 1 )c

    // if is invalid then we will send 404 error to client

    if ( isNaN(id))
    {
         return res.status(400).json( {error : "invalid id "});  // agar id invalid hai to hum client ko 400 bad request error bhejenge
    }

    const book= books.find( (e)=>e.id == id );
    
    if ( !book )
    {
        return res.status(404).json( {error : "books not fount "});
    }
    
    return res.json(book);
    

});

// challo  post route banate hai 
app.post('/books' ,( req,res)=>{  
   
    const { title , author } = req.body;   // post request ka data humme req.body se access karna hota hai  ( like { "name" : "tushar sharma" , "age" : 22 } )  to hum usse req.body se access kar sakte hai 

    if ( !title || title == "") 
    {
        return res.status(400).json( {error : "title is required "});  // agar title nahi hai to hum client ko 400 bad request error bhejenge
    }

    if ( !author || author == "") 
    {
        return res.status(400).json( {error : " Author is required "});  // agar title nahi hai to hum client ko 400 bad request error bhejenge
    }

    const new_book = { id : books.length+1 , title , author };  // naya book object banayenge  aur usme id , title aur author dalenge  ( id humme auto increment karna hoga )

    books.push(new_book);  // naya book object ko books array me push kar denge

    return res.status(201).json ( {message : "book created sucesssfully ", "id": new_book.id});  // post request se hum client ko 201 created status code bhejenge aur ek message bhi bhejenge ki book created successfully
})


//  we can also delete the log data by same logic we inserted ( create route for delete request )  ( like /books/1 to delete book with id 1 )  to delete book with id 1 from books array ( mock data ) and send response to client that book is deleted successfully

app.delete('/books/:id' , ( req,res)=>{
    const id = parseInt(req.params.id);   // dynamic parameter ko handle karne ke liye humme req.params ka use karna hota hai  ( like /books/1 to id = 1 )c

    if (isNaN(id))
    {
        return res.status(404).json({error : " u are using the worng id ( or your id is invalid"})
    }

    const book_index = books.findIndex((e)=> e.id == id );

    if ( book_index == -1 || book_index > books.length  || book_index == undefined )
    {
        return res.status(404).json( {error : "books not fount "});
    }

    books.splice(book_index , 1);// splice method is used to delete the data from array ( like book_index se start krke  1 element delete kr do     )

    return res.status(200).json({message : "book has been deleted successfully"})
})

app.listen(8000,()=>{
    console.log("server started at port 8000 ");
});


// as we don't have any database so we will use mock data  = books ( array of objects )

// we can even send our custom headers to client using "        res.set(x-tus , tushar sharma)            "" method                 ****just for knowledege purpose ****


// we can also find data for perticular id  dynamic parameter  ( like /books/1 )  to find book with id 1

// we can for the id is valid or not 

// post request from client ( user ) to server ----> but in json format  ( like { "name" : "tushar sharma" , "age" : 22 } )  to create a new book in our books array ( mock data )  and send response to client that book is created successfully
// post request means sending data to server ( body send karni padegi )
// front end se post request aayi  , ab hum usse backend p process karegne  aur response bhejenge

// " req.body "  == UNDEFINED  humme post request ka data aata hai  ( like { "name" : "tushar sharma" , "age" : 22 } )  to hum usse req.body se access kar sakte hai   AUTO MATICALLY HEADERS KO JASON SET KR DEGA 

//  par jab humne post request bheji to humme " req.body "  == UNDEFINED m  data == undefine mila , iska matlab hai ki humne express ko ye nhi bataya ki hum post request ka data json format m bhej rahe hai  to express ne usse json format m parse nahi kiya 
//  express ko pata hi nhi ki humara data kis formate m aa raha hai  to humme express ko ye batana padega ki hum post request ka data json format m bhej rahe hai  to express usse json format m parse kar lega  aur hum usse req.body se access kar sakte hai


// ISSKE LLIYE humare pass middleware hota hai ( like app.use(express.json()) )     Client aur Server ke beech jo request ko rok-kar kuch kaam karta hai, usse middleware kehte hain.

// // Client
//    ↓
// Middleware 1
//    ↓
// Middleware 2
//    ↓
// Middleware 3
//    ↓
// Route handler (final response)

// 🔹 Middleware kyun chahiye?

// Socho:

// User login hai ya nahi?

// Token valid hai ya nahi?

// Data sahi format me hai ya nahi?

// Request ka log rakhna hai

// Error handle karna hai

// 👉 Ye sab route ke andar likhoge to code ganda ho jaayega


// 👉 Middleware se ye sab kaam alag se handle kar sakte hain, aur route handler sirf apna kaam karega, clean code banega

// middleware ko use karke ab hum post request ka data json format m parse kar sakte hai  aur usse req.body se access kar sakte hai  ( like { "name" : "tushar sharma" , "age" : 22 } )  to hum usse req.body se access kar sakte hai   AUTO MATICALLY HEADERS KO JASON SET KR DEGA  aur hum client ko response bhejenge ki book created successfully

// we want to extract some data from request