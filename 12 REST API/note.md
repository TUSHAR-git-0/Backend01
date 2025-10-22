ALSO KNOWN AS " RESTFULL api "
<!-- api ka type hai jiske kuch rules hote hai :: ( ye best practesis hoti hai jisse hum kh sakte hai ki humara server rest api p bana hai !-->

<!-- SERVER -CLIENT  k bich m request and response m kuch rules follow hone chahiye wo rules rest api deti hai / batati hai -->

RESTFULL API  tells us /based on :

1) BASED ON server client architecture : server and client are different entity ( machine ) dono ko ek dusre pr inter depend nhi hona chahiye  **( response can be html , photo , text , jason etc    agr humara client == browser then it can receive any one  , but if it is alexa device it can not receive html(SSR) or photo )**<!-- humara client dependent on server -->

<!--    to humara cleint should be independent of server  : server json(raw ,key-value) data  return kare to client so , each client screen pr render kr le  require data  -->

<!--    JAB HUMME Pta hai ki humara client humesa **browser** hi hone wala hai , then always send html data by server -->

<!-- IF WE ARE NOT SURE ABOUT THE CLIENT TYPE , THEN ALWAYS SEND JSON DATA BY SERVER -->

2) ALWAYS RESPECT ALL HTTP METHODS  ( GET , POST , PUT , DELETE , PATCH  etc ) <!-- har method ka apna ek meaning hota hai  -->

<!-- FOLLOWING  -->

GET /USER S  --> to get all users data READ AND RETURN <!-- data ko read krna hai -->
POST /USER  --> to create new user  <!-- new data create krna hai -->
PATCH /USER/1  --> to update user with id 1 <!-- data ko update krna hai -->

<!-- NOT FOLLOWING -->

POST /UPDATE USER/1  --> to update user with id 1 <!-- ye galat hai , kyuki humne update krna hai to hume patch use krna chahiye -->
DELETE /CREATE USER  --> to delete user <!-- ye galat hai , kyuki humne delete krna hai to hume delete use krna chahiye -->
GET / GET USER/1  --> to get user with id 1 <!-- ye galat hai , kyuki humne get krna hai to hume get use krna chahiye -->


**BS YE DO RULES FOLLOW KARNE SE HUMARA SERVER REST API BAN JATA HAI !**

1) SERVER-CLIENT ARCHITECTURE FOLLOW KARNA HAI  : humme pata hai humara client is "browser" to humme direct html bhej sakte hai  **** , agr humme nhi pata to json bhejna hai

<!--  res.send() , res.json( ) ,  res.redender( )  jj-->

HTML RENDERING ( SERVER SIDE RENDERING )  IS FASTER THAN (client side rendering ) BECAUSE IT RENDER DATA AT SERVER THEN SEND IT TO CLIENT ( OPEN IT DIRECTLY)

<!-- client side  rendering is where ( Jason comes to cient ) then open in browser-->

2) HTTP METHODS KO RESPECT KARNA HAI
