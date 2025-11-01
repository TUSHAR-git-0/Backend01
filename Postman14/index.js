const express = require('express');
const users = require('./MOCK_DATA.json')
const app= express();
const port = 3000;
const fs = require('fs');

// MIDDLE WARE TO PARSE JSON BODIES
// MIDDLEWARES to parse data coming in requests
app.use(express.json()); // for JSON data (from Postman -> raw -> JSON)
app.use(express.urlencoded({ extended: false })); // for form data (from Postman -> x-www-form-urlencoded)



app.get('/api/users',(req,res)=>{                 // MOBILE DEVICE 
  return res.json(users);                       // res.json()  : helps to get json data in return
}); 

// app.get('/users',(req,res)=>{                      //users route for WEB BROWSER
//   return res.json(users);                     
// }); 



// app.get('/api/users/:id',(req,res)=>{                 // requesting using dynamic path parameter , used id ( varible id )
//   const id = Number(req.params.id);
//   const user = users.find(user => user.id === id);   // find method : to find the particular user whose id matches the requested id
//   if(user){
//     return res.json(user);                           // if user found return the user data
//   }});




  app.route('/api/users/:id')
  .get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) return res.json(user);
     return res.status(404).json({ message: 'User not found' });
    })


    .patch((req, res) => {
       const id = Number(req.params.id);
       const body = req.body;           // the data we are providing as input , stored in body 

         // reload latest users from file to avoid cache issue
        delete require.cache[require.resolve('./MOCK_DATA.json')];
        const users = require('./MOCK_DATA.json');


        
      const userIndex = users.findIndex(user => user.id === id);
      if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found' });
      }

      const updatedUser = { ...users[userIndex], ...body };
      users[userIndex] = updatedUser;

      // Write updated data to file
      fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ status: 'error', message: 'Failed to write file' });
        }
          console.log('File successfully written');
        return res.json({ status: 'success', user: updatedUser });
    });
   })
   .delete((req,res)=>{
    return res.json({message : 'DELETE'});
    });

    app.post('/api/users',(req,res)=>{                     // here we want to make post request to api using postman tool  at api/users endpoint''                                                    // post : me hum data bhejte hai server pr   ( use body parser middleware for that )  open -> body parser folder -> x-www form ( which means we are filling the form to send data to server )
      const body = req.body;     
      users.push({ ...body , id : users.length+1});                      // req.body : contains the data sent by client to server
      fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
          return res.status(500).json({ status: 'error', message: 'Failed to write file' });
        }
         return res.json({ status: 'success',  id:users.length});            //   
        });
      });
 



  // last  video m hum post , delete , patch  karne ka try kr rhe the , but 

  // BROWSER M DIRECT  POST , DELETE , PATCH  REQUEST NHI KRSKTE HAI   ( BY DEFAULT IT SENDS GET REQUEST ) 

  //  so doing this we can use ( POSTMAN  TOOL ) for ( API testing and DOCUMENTATION ) to test these requests


app.listen(port, () => {
  console.log('Server is running on port 3000');
});