<!-- HTTP methods  ( get , post , put , patch , delete )  -->

<!--" ye 5type ki request hoti hai jo hum kisi path 9 url p kar sakte hai " -->

<!-- GET  : when u want to get  any data from server -->  when we search on browser by adding url   ----> then browser get request banata hai  to server( jab bhi server p get request aati hai then humara server database m se data ko   **read**    karta hai )  then send the relevent data
<!-- for checking go to  (yt)-- > search ( any thing )-- > go to inspect -- > networks -- -> check souce/header and request type == GET  -->  JAB BHI HUMME KOI DATA GET KARNA HO // BY DEFAULT === GET . 


<!-- POST :  when we want to send and mutate some data in server--> jab bhi hum website k server ko koi data send / server m change krna ho  ( LIKE WHEN WE FILL  SIGNUP FORM , FEED_BACK FORM ) and we expect that this data will mutate ( add/change ) in database , TO HUM POST REQUEST KARTE HAI 
CREATE ACCOUNT ----> ye post request k form m data jayega server k pass -----> server check and make changes in database


koi bhi form < instagram ka login page p id/ password daal k check kr le inspect m>

<!-- PUT : when we want to upload file to server/ database ( like photo,video ,file)  in any kind of forms  etc --> TO PUT REQUEST  SE DATA JAYEGA 

<!-- PATCH : change the existing entity form database -->
<!-- DELETE: delete any thing in database  -->



**-------------------------------------------------------------------------------------**

<!--  ab agar log create karte time , hum req.method add kare then request ka method bhi likha aayega  -->


<!-- BIGEST (DISADVANTEGE ): HUMME HAR PAGE K HAR PATH K LIYE GET, PUSH , POST ETC REQUEST HANDEL KARNI PADEGI , FOR HOME , ABOUT , CONTACT , ETC ** which is evry complex  -->
 IN THAT CASE WE USE ( EXPRESS framework  TO HANDLE MULTIPLE REQUESTS      :- )      .