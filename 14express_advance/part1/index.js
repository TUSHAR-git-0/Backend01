//  challo aaj hum middleware ( plugins ) ke baare me baat karenge

// what it do ?
// middleware is a function that is executed before the request is processed by the route handler. It can be used to perform various tasks such as authentication, logging, error handling, etc.
// it uses the header  --> content-type : application/json  and  convert the body of the request into a json object and attach it to the req object as req.body


// taakii post route milne pr hum req.body se data access kar sake , aur usse use kar sake apne logic me

// humne  express ka use krke ek app  banaya hai , jo humara handler function hai , req , res ko handle karta hai   ye internally check karta hai ki request kis type ki hai , kis  route pe aayi hai aur us route ke handler function ko call karta hai.
// jab bhi user koi request karta hai express server ko to express server us request ko process karne se pehle middleware function ko call karta hai. middleware function me hum kuch bhi code likh sakte hai jo hume request ke sath karna hai. jaise ki authentication, logging, error handling, etc.


        // user  ----------> request  express server ------------------> app 
        //                                                             GET/books     ---------------------------------->route   ( app.get('/books', (req,res)=>{}) );
        //                                                                  \
        //                                                                   \
        //                                                                    \
        //                                                                     \
        //                                                                      \
        //                                                                       \
         //                                                                   route ( app.get ( '/books/:id', (req,res)=>{}) ) 

            // app apne aap desired route tak request ko le jaata hai aur us route ke handler function ko call karta hai.

        //  between    app         and           route handler function  there is a middleware function which is executed before the route handler function is called. middleware function can be used to perform various tasks such as authentication, logging, error handling, etc.





// request -------------------------------------------------------------------------------->route 
//                     m1                  m2                 m3               m4


//  we can have  n number of ( multiple ) middlewares   ( har kisi ka kuch specific kaam hota hai )

// middlewares can do fllowing things

// 1.  it can read the request  ( full excess to the req object )
// 2.  it can terminate req-res cylcle ( jab isse lagge u are the hacker  , we do not want to interact with route  , we have to end the cycle )
// 3.  it can forward the request to next middleware  then next then  route 
// 4.  hum konse middleware p jump nhi kr sakte hai , hum next() function ke through hi forwarding kr sakte hai 




// hum apne self defined mmiddleware bhi bana sakte hai 



 
// app.use( express.json());              ///// -------  i fhrader have content type : application/json  to ye middleware us request ke body ko json object me convert kr dega  aur next function ko call k rdeta hai 


// app.use( function ( req,res ,next){
//     console.log('this is my first middleware  A');                            // ye middle ware kuch bhi nhi kr rha ( na request ko read kr rha hai na response ko terminate kr rha hai )  , ye bas ek message print kr rha hai console me aur next() function ke through request ko next middleware ya route handler function ko forward kr rha hai
//     return res.json({message : 'Boom ! this is my first middleware'});

//     // ye middleware request ko terminate kr rha hai , not allow to go req to other middlewares


// })


// app.use( function ( req,res ,next){
//     console.log('this is my first middleware');                        //   just console.log();
//     next();                                                             // ye middleware request ko forward kr rha hai , allow to go req to other middlewares
// }); 


// app.use( function ( req,res ,next)k  {     // -    3
//     console.log('this is my first middleware  B');                            // ye middle ware kuch bhi nhi kr rha ( na request ko read kr rha hai na response ko terminate kr rha hai )  , ye bas ek message print kr rha hai console me aur next() function ke through request ko next middleware ya route handler function ko forward kr rha hai
//     return res.json({message : 'Boom ! this is my first middleware'});
// })

// app.use( function ( req,res ,next){
//     console.log('this is my first middleware  B');                            // ye middle ware kuch bhi nhi kr rha ( na request ko read kr rha hai na response ko terminate kr rha hai )  , ye bas ek message print kr rha hai console me aur next() function ke through request ko next middleware ya route handler function ko forward kr rha hai
//     next();
// })


// middleware are working in sequence , first middleware se start hoga phir second middleware phir third middleware and so on  , jab tak koi middleware request ko terminate nhi kr deta ya route handler function ko call nhi kr deta tab tak ye sequence chalta rahega.


const express = require("express");
const fs = require('fs');  // to create log file 
const app = express();



const books = 
[                                           
    {id :1 , title: 'book One' , author : 'author One'},
    {id :2 , title: 'book Two' , author : 'author Two'},
];



app.use(express.json());   // ye ek middle ware hai 

// 🔥 app.use(express.json()) kya karta hai?

// 👉 Request ke body me jo JSON data aata hai, usko
// 👉 JavaScript object me convert karta hai
// 👉 taaki tum req.body use kar sako



// app.use( function ( req,res ,next){
//     console.log('this is my first middleware A');                        //   just console.log();
//     next();                                                             //👉 ye middleware request ko forward kr rha hai , allow to go req to other middlewares
// });


// app.use( function ( req,res ,next){
//     console.log('this is my first middleware B');                        //   just console.log();
//     next();                                                             // ye middleware request ko forward kr rha hai , allow to go req to other middlewares
// });



//  JAB BHI REQUEST AATI THI TO HUM LOG FILE ME USKA LOG BANAYENGE  ( middleware ke through )

app.use( function ( req,res ,next){
    const log = `[ Request URL: ${req.url} / Method: ${req.method} / path  ${req.path}]\n`;
    fs.appendFileSync('log.txt', log , 'utf-8', (err)=>{
        if( err){
            console.error('Error writing to log file', err);
        }
    });
    next();
});

//  har request k liye middleware to run karega hi , to log bhi append hota jayega !!!!

app.get('/' , ( req,res)=>{
     return res.send("hello from home page");
});


app.get('/books' , (req,res)=>{
    res.set("x-tus" , "tushar sharma");  
    return  res.json(books);         
}) ;

app.get('/books/:id' , (req,res)=>{
    const id = parseInt(req.params.id);  


    if ( isNaN(id))
    {
         return res.status(400).json( {error : "invalid id "}); 
    }

    const book= books.find( (e)=>e.id == id );
    
    if ( !book )
    {
        return res.status(404).json( {error : "books not fount "});
    }
    
    return res.json(book);
    

});

app.post('/books' ,( req,res)=>{    // body of post request ko access karne ke liye humme req.body ka use karna hota hai  ( like { "name" : "tushar sharma" , "age" : 22 } )  to hum usse req.body se access kar sakte hai
   
    const { title , author } = req.body;  

    if ( !title || title == "") 
    {
        return res.status(400).json( {error : "title is required "}); 
    }

    if ( !author || author == "") 
    {
        return res.status(400).json( {error : " Author is required "}); 
    }

    const new_book = { id : books.length+1 , title , author }; 

    books.push(new_book);

    return res.status(201).json ( {message : "book created sucesssfully ", "id": new_book.id}); 
}); 



app.delete('/books/:id' , ( req,res)=>{
    const id = parseInt(req.params.id);  

    if (isNaN(id))
    {
        return res.status(400).json({error : " u are using the worng id or your id is invalid"})
    }

    const book_index = books.findIndex((e)=> e.id == id );

    if ( book_index == -1  )
    {
        return res.status(404).json( {error : "books not fount "});
    }

    books.splice(book_index , 1);

    return res.status(200).json({message : "book has been deleted successfully"})
})

app.listen(8000,()=>{
    console.log("server started at port 8000 ");
});
