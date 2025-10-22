 all start with  CLIENT   request -------------------> SERVER(node js server)

 <!-- 1    all request go to node js server   stored in a queue)EVENT QUEUE  -->
 <!-- 2    ab event queue p (fifo) principle  se nazar lagae hue h  EVENT LOOP : which picks the oldest request and work on it   -->
 <!-- 3   ye picked request from event queue can be of two types (BLOCKING OPERATION , NON BLOCKING OPERATIONS)
 BLOCKING: SYNC TASK
 NON BLOCKING : ASYNC TASK
  -->
  <!-- 4  if picked request by event loop is  non-blocking oprtn  then it process it and response send to user(client) -->

  <!-- 5  if picked request by event loop is ( blocking oprtn )  then  we need thread/worker  so it  go to **thread pool** ( pool which has threads/workers )  to  thread pool me agar koi worker/thrread available hai to us request ko assign ho jayega then complete hone pr thread wapas thread pool m beth jayega and return request  -->



  **problem**
  if humne blocking code likha  , by default we having 4 threads (limited) code to handle 4-5 clients only

  to jo 5th client request aayega usse wait karna padega  till thread be free ......

  **so if humne saara code blocking code likh diya then humara serve ko jyada user hone pr bhot wait karna padega**(  IT IS NOT GOOD PRACTISE TO WRITE BOCKING CODE)        ----->    SCALABILITY PROBLEM 


<!-- AB BLOCKING AND NON BLOCKING CODE se  SAMJHTE HAI  --> FORM NEXT FILE OF THIS FOLDER