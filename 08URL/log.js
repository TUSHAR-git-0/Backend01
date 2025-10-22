const http = require('http');
const url = require('url');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.end(); // Ignore favicon requests
        return;
    }
    const MYlog = `request.date ${Date.now()} / Request URL: ${req.url} NEW REQUEST RECEIVED \n`;

    const myurl = url.parse(req.url, true);   // THIS WOULD HELP ME TO PARSE IN QUERY PARAMETER  "TRUE :- allow us to parse in query as string"
    // const pathname = myurl.pathname;// ye humme internaly parsing karke dega !!!

    console.log(myurl); // ye hume path dega bina query parameters 


    fs.appendFile('log.txt' , MYlog, (err,data) => {
        switch(myurl.pathname) {  
            case '/': res.end('HOME PAGE '); break;
            case '/about': //res.end('helllo i am tushar sharma '); break;
            const  username = myurl.query.myname;
            const  srch = myurl.query.search;
            res.end(`hi ${username} ,your search is ${srch}`);
            case '/contact': res.end('CONTACT PAGE '); break;
            default: res.end('PAGE NOT FOUND 404 '); break;
        }
    }
    );
});

myServer.listen(3001, () => {
    console.log('Server is running on port 3001');
});

// To test the server, you can use the following curl commands:
// curl http://localhost:3000/
// curl http://localhost:3000/about
// curl http://localhost:3000/contact
// curl http://localhost:3000/unknown


//  if i give http://localhost:3000/about ? my nakme is tushar sharma ----------- then it will be logged in log.txt file as
// request.date 1692871234567 / Request URL: /about? my nakme = tushar sharma NEW REQUEST RECEIVED / REQUEST path : undefined

// now want to send query parameters also in log file  ( to  seperate path and query parameters )

// jo humara http module hai na ye url ko parse nahi karta hai
// isiliye req.path undefined aa rha hai
// agar hume url ko parse karna hai to hume url module ka use karna padega    npm i url
// const url = require('url');  // ye humne upar kar liya hai

// ab hum url module ka use karte hai url ko parse karne ke liye
// const parsedUrl = url.parse(req.url, true);  // true is for query parameters
// ab hum parsedUrl object ko log karte hai
// console.log(parsedUrl);


// ***********************************************************************************************************
// That’s why you’re getting REQUEST path : undefined.

// In Node.js (without Express), you must parse the URL manually using the url module.

    // const myurl = url.parse(req.url, true);   TRUE MEANS : WE NEED TO PARSWE QUERY PARA METERS KO BHI OBJECT MEIN
    // const pathname = myurl.pathname; // ye humme internaly parsing karke dega !!!
    // const query = myurl.query; // ye humme query parameters ko object me dega

// ***********************************************************************************************************
// ? ke baad wala hissa query parameters hota hai
// aur ye query parameters hume url module ke through hi milta hai
// agar hum url module ka use nahi karenge to hume query parameters nahi milenge
// isiliye humne url module ka use kiya hai 


//   const qp = myurl.query.username; // ye humme query parameters ko object me dega
            // res.end(`heelo ${qp} welcome to about page`); break;

            // iss-se hum query parameter m se username ko nikal ke use kar sakte h
            // isse se hu kisi bhi query parameter ko nikal ke use kar sakte hai
            // Extract specific query parameter 
    // and show it in the response 
            // for example if we have url as
            // http://localhost:3000/about?username=tusharsharma
            // then we can extract username from query parameters and show it in the response


//          const  username = myurl.query.myname;  YE MYURL   ki query se values extract karne m help karta hai
//          const  srch = myurl.query.search;