<!-- humaara dwara server create karte time ( we createserver by  const MY_server = http.create server( ( req,res )) --> 
isske andar hum ek call back function dete hai jo humare pure server ko handle karta hai

<!-- ultimately  we can say that , we are having a function which use to handel the server  -->

like :  const handler = function ( req, res ){


    // functanilities 
}

const my_server = http. createserver( handler);

<!-- ??==== ************************  this is totally  correct code  -->

<!-- but this became very complex  --> because we have to handle the request myself for each request type ,, already done in previous video  , have to import  diff-diff modeule to perform diff task in server.......for headers, jason, url , fs  etc


    <!-- WHY PACKAGE.JASON REQUIRED , AND WHAT IS THE USE OF THAT ??? -->PADH LIYO EK VAAR


**we need a framework/LIBRARY jo humare liye ye  my_handler function ko likh de !** >>>>> EXPRESS JS , humare liye ye sb handle karega !!

first we need to install express-js , go to package.jason file -> terminal 
  ( npm i express )


<!-- to ab humara express dependies m aa chuka h  -->

<!-- ab apna server banooo  with help of express  -->