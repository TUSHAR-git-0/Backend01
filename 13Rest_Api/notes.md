<!-- we have to create a REST API jo JSON  data ko render karegi-->

<!-- 
1    npm init ka use karke package.json file banayein 
2    as we creating server using express , npm install express se express package install karein -->



# REST API with Node.js and Express

HUM USERS K SATH DEAL KARENGE JISME HUM JSON DATA RENDER KARENGE.

GET / users - Get list of all users'

Get /user/1 - Get user with ID 1
Get /user/2 - Get user with ID 2

Post /user  - Create a new user

Patch/user/1 - Update user with ID 1

Delete/user/1 - Delete user with ID 1

ye basic tasks we have to performe  : for these tasks we require data->we will create hard code database ( mockaroo.com  -> generate fake data for testing purpose)


<!-- AB HUMNE KAAM START KR DIYA ON SERVER-->

<!-- HUMARA SERVER MUST BE A HYBRID SERVER ( MUST SUPPORT MOBILE AS WELL AS BROWSER AND ETC....) -->

<!-- /users    -->  this return object as json

app.get("/users",(req,res) )  <!-- ye karne se humara server is rendering    HTML DOCUMENT    for broswers -->

  **app.get(" /api/users" , (req,res) )**  <!-- ye karne se humara server is rendering JSON RESPONSE  ( campatible for mobile  ) -->

so we can change this like 

GET / users ->  <!-- GET /api/user --> 

Get /user/1 ->   Get /api/user/1
Get /user/2 ->   Get /api/user/2

Post /user  ->   Post/ api /user

Patch/user/1 -> Patch/api/user/1

<!-- iss-se humara server hybrid ban jayega jo dono mobile and browser ko support karega.   Jab   /user -> HTML DOCUMENT   , /api/user -> JSON RESPONSE -->


for multiple users , if we rendered html for browser then we would have data for multiple users in html

like 
<ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
    <li>...</li>
    <li>...</li>
</ul>
        to humare data ko iss formate m render karane k liye !!!



