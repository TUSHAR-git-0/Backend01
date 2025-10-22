const fs = require('fs');
const http = require('http');
const url = require('url');

const myServer = http.createServer((req, res) => {
    const MYlog = `request.date ${Date.now()} / Request URL: ${req.url} / request method is ${req.method}\n`;

    const myurl = url.parse(req.url, true); // parse query params

    // append request log
    fs.appendFile('log.txt', MYlog, (err) => {
        if (err) {
            console.error("Error writing log:", err);
            res.end("Internal Server Error");
            return;
        }

        switch (myurl.pathname) {//Ab request ka path check kiya jaa raha hai (like /, /about, /signup).Har path ke liye alag response bheja jaaega.

            case '/':
                if (req.method === 'GET') {
                    res.end('HOME PAGE');
                } else {
                    res.end('Method not allowed on HOME');
                }
                break;

            case '/about':
                const username = myurl.query.myname || "guest";
                const srch = myurl.query.search || "nothing";
                res.end(`Hi ${username}, welcome to About page. Your search is: ${srch}`);
                break;

// 👉 Agar URL /about hai:
// Humne query parameters nikaale. Example:
// http://localhost:8008/about?myname=Tushar&search=node
// myurl.query.myname → "Tushar"
// myurl.query.search → "node"
// Agar user kuch nahi deta to default values set ho jaati hain:
// username = "guest"
// srch = "nothing"

            case '/signup':
                if (req.method === 'GET') {
                    res.end('SIGNUP PAGE');
                } else if (req.method === 'POST') {
                    res.end('SIGNUP SUCCESSFULLY COMPLETED');
                } else {
                    res.end('Method not allowed on SIGNUP');
                }
                break;

            default:
                res.end('PAGE NOT FOUND 404');
                break;
        }
    });
});

myServer.listen(8008, () => {
    console.log("Server is listening on port 8008");
});
