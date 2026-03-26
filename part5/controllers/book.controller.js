// functanility of all routes will be in controller  , and in routes file we will only define the routes and call the functions from controller file

const BOOKS = require("../models/book");   // BOOKS array ko import kar rahe hai  ( model se data ko represent karne ke liye )

exports.getAllBooks = function(req,res)
{
    res.json(BOOKS);   
};

exports.getBookById = function(req,res)

{       
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
    

}

exports.createBook = function(req,res)
{
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
}

exports.deleteBookBYid = function(req, res) 
{
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
}