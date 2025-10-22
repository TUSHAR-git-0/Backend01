const http = require('http');
const fs = require('fs');


const myServer = http.createServer((req,res)=>{  
    const logData = `Request URL: ${req.url} / Method: ${req.method} / Time: ${new Date().toISOString()}\n`;//  ye jo data humme require  to store  log me
    fs.appendFile('log.txt',logData , (err,data)=>{   // async because it takes no time to write in file
        // if (err){
        //     console.log("Error in logging data");
        // }
        // res.end("Hello from the other side this is log file ");  // request ko end kr do hello
        switch (req.url) {
            case '/': res.end("HomePage")
            break;
            case '/about': res.end("About Page")
            break;
            case '/contact': res.end("Contact Page")
            break;
            default: res.end("404 Page Not Found")
            break;
        }
    })
 }
    );

    // upar banae gye server ko listen bhi karna padega


    //  use unblocking code for server : warna clients ko bhot wait karna pad sakta hai 
    

    myServer.listen(8001,()=>{
        console.log("Server is listening on port 8001") // ALSO CHECK AT **************   http://localhost:8000   ***********
    }
    ); // server listened at 8000 port and callback function run hoga jb server successfully start ho jayega


    // FOR MULTI ROUTING  WE CAN USE IF ELSE OR SWITCH CASE   ( we can also use express js for routing)

    // AS ABOVE

    // case '/': res.end("HomePage")
    // break;
    // case '/about': res.end("About Page")
    // break;
    // case '/contact': res.end("Contact Page")
    // break;