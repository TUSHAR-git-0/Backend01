const express = require('express');

const BOOKS = require('../db/book');

const router = express.Router();   // express gives functionality for routers  // ab humare pass app nhi hai ,  ye routes hi saare kaam karega !


//  saare routes ko isske angr define karenge  , aur fir iss module ko export karenge taaki hum usko index.js file me import karke use kar sake

//  BOOKS   ko import kara hai  ( array ) and ab jitne bhi  opertions honge BOOKS ko use karke honge 
 

router.get('/' , (req,res)=>{
    res.set("x-tus" , "tushar sharma");   
    res.json(BOOKS);   
}) ;


router.get('/:id' , (req,res)=>{       // /books/:id  ( dynamic parameter )  // id ko dynamic parameter banane ke liye hum :id ka use karte hai  ( like /books/1 to id = 1 )c
    const id = parseInt(req.params.id);   

    // if is invalid then we will send 404 error to client

    if ( isNaN(id))
    {
         return res.status(400).json( {error : "invalid id "});  
    }

    const book= BOOKS.find( (e)=>e.id == id );
    
    if ( !book )
    {
        return res.status(404).json( {error : "books not fount "});
    }
    
    return res.json(book);
    

});


router.post('/' ,( req,res)=>{  
   
    const { title , author } = req.body;   

    if ( !title || title == "") 
    {
        return res.status(400).json( {error : "title is required "}); 
    }

    if ( !author || author == "") 
    {
        return res.status(400).json( {error : " Author is required "});  
    }

    const new_book = { id : BOOKS.length+1 , title , author };  

    BOOKS.push(new_book);  // naya book object ko books array me push kar denge

    return res.status(201).json ( {message : "book created sucesssfully ", "id": new_book.id});  
});


router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID" });
    }

    const book_index = BOOKS.findIndex((e) => e.id == id);

    if (book_index === -1) {
        return res.status(404).json({ error: "Book not found" });
    }

    BOOKS.splice(book_index, 1);

    return res.status(200).json({ message: "Book deleted successfully" });
});


//  "  router  "     hi  handling all books route   , aur hum isko index.js file me import karke use karenge  ( app.use() ke through )

// module ko export karna padega

module.exports = router ; // exporting the router module  ( we can export anything like function , variable , object , array  etc )