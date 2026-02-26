const express = require('express'); //to perform any task we have to import express module

// to work with the database we have to import the data module


const users = require('./MOCK_DATA.json')

const app= express();

const port = 3000;

// routes

// first route to get the data


// app.get('/users',(req,res)=>{
// return res.json(users);                          // res.json()  : helps to get json data in return
// });                                                // we will get all the users in the json file  : raw data


app.get('/api/users',(req,res)=>{                 // MOBILE DEVICE 
  return res.json(users);                       // res.json()  : helps to get json data in return
}); // we will get all the users in the json file  : raw data

// our server must be hybrid server , which must be supported at browser , mobile and desktop etc..


// ***************************************************************************************
// app.get('/users',(req,res)=>{

// // <ul>
// //     <li>...</li>
// //     <li>...</li>
// //     <li>...</li>
// //     <li>...</li>
// //     <li>...</li>
// // </ul>

//   const html  =
//   ` 
//   <ul>
//   ${users.map(user => `<li>${user.first_name}</li>`).join('')}
//   </ul>
//    `;  
//    res.send(html);                    
// });

// ***************************************************************************************

// ***************************************************************************************


// second route to get user by id ( : jiske aage : ho , wo dynamic hote hai)

app.get('/api/users/:id',(req,res)=>{                 // requesting using dynamic path parameter , used id ( varible id )
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);   // find method : to find the particular user whose id matches the requested id
  if(user){
    return res.json(user);                           // if user found return the user data
  }});

  // localhost:3000/api/users/5   // to get user with id 5  *********************************************************************************************************



  
  // here we cant use POST request because our browsers do post request by default only for form submission 
  // we can use postman request .

  // here are my post , delete , patch  routes 

  // app.post('/api/users',(req,res)=>{
  //   return res.json({message : 'PENDING'});
  // });

  // app.delete('/api/users/:id',(req,res)=>{
  //   return res.json({message : ''});
  // });

  // app.patch('/api/users/:id',(req,res)=>{
  //   return res.json({message : 'user updated'});
  // });

  //  WE SAW /API/USER/ID  USING multiple times sooooo , we can single route for multiple uses ,paths( requests )

  app
  .route('/api/users/:id')
  .get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if(user){
      return res.json(user);
    }})

  .post((req,res)=>{
    return res.json({message : 'PENDING '});
  })
  .delete((req,res)=>{
    return res.json({message : 'DELETE'});
  })
  .patch((req,res)=>{
    return res.json({message : 'PATCH'});
  });

app.listen(port, () => {
  console.log('Server is running on port 3000');
});