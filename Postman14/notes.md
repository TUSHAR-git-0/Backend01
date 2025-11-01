AB **POSTMAN API TESTING**  k liye humme sikhna hai !!! 

checjk karna hai ki API sahi se kaam kar rhi hai ya nhi

CHECK KI HUMARA SERVER KITNA TIME LE RHA HAI RESPOND KARNE ME  // our intension is to make our reponse time as low as possible
POSTMAN ME HUM API KO TEST KAR SAKTE HAI

do GET request  for http://localhost:3000/users  get the data 


<!-- notes -->

The server doesn’t care who asks for data —

whether it’s:

A mobile app 📱,

A browser 🌐,

Or even Postman 🧰

It only cares about what URL they’re asking for and what method (GET, POST, etc.) they’re using.

<!--  why it is said " our browser can only send the get request from the address bar" -->


💡 1️⃣ What happens when you type a link in your browser?

When you open Chrome and type:

http://localhost:3000/api/users


and press Enter,
your browser automatically sends a GET request — nothing else.

It’s basically saying to your server:

“Hey, I want to get whatever is here.”

Browsers are built to GET data by default when you type a URL.
They can’t send POST, DELETE, or PATCH requests just from the address bar.




<!-- ***************************************************************************** -->

when we want to do POST request on our server ( http://localhost:3000/api/users )  

 post : me hum data bhejte hai server pr   ( use body parser middleware for that )  open -> body parser folder -> x-www form ( which means we are filling the form to send data to server )

 **hum chate hai ki jab hum post request bheje to server pr data store ho  jaye**
 <!-- agr humare pass database hota to , hum add kr dete , but if we do not have database , so we need to write in existing data file   (   OR FILE M ADD FS MODULE SE HOGAAAAAA......) -->

 POST Request :

     1 ) phle jo bhi data hum bhejte hai server pr , wo body me jata hai , so we need to use body parser middleware to parse the body data( hum jo form fill karte hai  uska data  phle body m store hota hai , then body parser middleware use krke hum us data ko parse karte hai  taki hum use kr ske )

        2 ) then hum req.body se us data ko access krte hai , jo bhi data humne bheja hai server pr , wo req.body m mil jata hai

        but body comming as undefined  , so we need to use body parser middleware( <!-- because express doesnt know what type of data is coming in the request body -->)

        SO WE NEED TO USE BODY PARSER MIDDLEWARE  
**<!--app.use(express.urlencoded( {extended : false}));-->** ye humare form data ko body m dalega 



ab  post request to kr liya humne  , ( now do for  PATCH AND DELETE BY YOUR SELF )



<!-- ************************************************************************************************************ -->

what does   ...body means?  what is the use of 3 dots before body ??
**it is spread operator**

it spread the data of body object into individual key-value pairs.

example :

const userIndex = 0; // means first user
const body = { email: "new@gmail.com" };

{ id: 1, name: "Jango", email: "old@gmail.com" }

<!-- users[userIndex] = { ...users[userIndex], ...body }; -->


