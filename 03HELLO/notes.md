


<!-- node js se hum servers create karte hai 
node js  humari ( js code ko outside the browser run karwata hai )  in crome = v8 engine hota hai ( jo humare js code ko run karwata hai)
(  (c++) + js == node js)


via node js , we can talk to native machine , file handling  

NODE JS is run time environment for java script-->




**    **why package.jason required?**      ?**

Node.js me package.json ek heart of the project hota hai. Ye hi batata hai ki project me kya dependencies (packages), version, aur scripts hain.

🔑 Why package.json is Important?

Project Information Store karta hai

Project ka naam, version, description, author, license etc.

Example:

{

  "name": "my-app",
  "version": "1.0.0",
  "author": "Tushar Sharma"
}


Dependencies (Libraries/Packages) Track karta hai

Tumne kaunse npm packages install kiye hain (like express, mongoose, nodemon, etc.) ye yaha save hota hai.

Example:

"dependencies": {
  "express": "^4.18.2"
}


✅ Matlab agar tum project dusre laptop me copy karo, to sirf ek command:

npm install


Ye sab dependencies auto download kar lega.

Scripts define karta hai

Tum custom commands define kar sakte ho.

Example:

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}


Ab terminal me likh ke run kar sakte ho:

npm run dev


Version Control ke liye zaruri

Tumko node_modules folder git par upload karne ki zarurat nahi hoti.

Sirf package.json (and package-lock.json) share karo, aur dusre developer npm install chala ke same setup bana sakte hain.

Team Collaboration

Agar 5 log ek project pe kaam kar rahe hain, sabko manually package install karne ki zarurat nahi. package.json ensure karta hai ki sabke paas same version ka package ho.