const express = require('express');
const router = express.Router();   // express gives functionality for routers  // ab humare pass app nhi hai ,  ye routes hi saare kaam karega !


//  saare routes ko isske angr define karenge  , aur fir iss module ko export karenge taaki hum usko index.js file me import karke use kar sake

//  BOOKS   ko import kara hai  ( array ) and ab jitne bhi  opertions honge BOOKS ko use karke honge 
 

const Controller = require('../controllers/book.controller');  // controller file ko import kar rahe hai  ( jisme saari functionality likhi hogi )


router.get('/' , Controller.getAllBooks);


router.get('/:id' , Controller.getBookById);


router.post('/' , Controller.createBook);


router.delete('/:id', Controller.deleteBookBYid);


//  "  router  "     hi  handling all books route   , aur hum isko index.js file me import karke use karenge  ( app.use() ke through )

// module ko export karna padega

module.exports = router ; // exporting the router module  ( we can export anything like function , variable , object , array  etc )