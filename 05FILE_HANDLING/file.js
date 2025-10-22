//  we handle file file ( means : perform various operations on file like create , read , update , delete etc)

// to file k sath kaam karne k liye humme  module/package ka use karna padega  (FS ->FILE SYSTEM)

const fs = require('fs');  // fs = file system  ( ye ek built in module hai node js ka)


// 1  create a file

// fs.writeFileSync('name/address of the file ' , 'content in the file');  
fs.writeFileSync('file.txt' , 'this is my first file Sync');  // agar file exist nahi karti to ye nayi file create kar dega aur agar file exist karti hai to uske content ko overwrite kar de dega

// b  asynchronous way  ( non-blocking )jj

// YE RETURN NHI KARTA KUCH BHI TO : HUMME KUCH NA KUCH CALLBACK FUNCTION ME HANDLE KARNA PADTA HAI

  fs.writeFile('file2.txt' , 'this is my second file Async' , (err)=>{   console.log('file created');});  // ye asynchronous hai ( non-blocking )  ( ye background me chalta rahega aur jab file create ho jayegi to callback function call ho jayega)

// ( when to use which method : upcoming)------>  ye aage pta chalega , jb nodejs ka artitechure pta chal jayega



// 2 read a file
// fs.readFileSync('filename ', 'encoding(knode is formate m read karna hai !');  // ye synchronous hai ( blocking )  ( jab tak file read nahi ho jati tab tak aage ka code execute nahi hoga)

const result = fs.readFileSync('contact.txt' , 'utf-8');  // ye biknary format me read karta hai isliye hume encoding bhi dena padta hai utf8 means humne bataya ki ye text file ko string me convert kar ke read kare
console.log(result);

// asynchronous way ( non-blocking )  ( ye background me chalta rahega aur jab file read ho jayegi to callback function call ho jayega)


// isme humme return  m kuch nhi milta  ( to error ko reflect karne k liye humme callback function me error ko handle karna padta hai)
fs.readFileSync('contact.txt' , 'utf-8', (err , data)=>{   // err agar error aata hai to wo err me aayega aur agar file read ho jati hai to data me aayega); 
    if(err) {
        console.log('ERROR',err);
    }
    else{
        console.log(data);// if do not getting any error then print data
    }
});
// esse return hogi if error detect 

// 3 APEND DATA TO A FILE ( add more data to the existing file without overwriting the existing data)

fs.appendFileSync('./file.txt' , new Date().getDate().toLocaleString()); 
fs.appendFileSync('./file.txt' , "          this id my append data");  

// bwnwfit : when hum apna server banenge then usme ( file ) log.txt  banenge  ip addrees and time of user interaction store karke rakhega  ( hum usme logs add karte jayenge without overwriting the existing data)


// 4 copy a filefg

fs.cpSync('./file.txt' , './copy.txt');  // ye file.txt ko copy karke copy.txt me paste kar dega  AGAR NHI BANI HOGI TO BAN JAYEGI AUR AGAR BANI HAI TO OVERWRITE KAR 


// 5 delete a filejj
fs.unlinkSync('./file2.txt');  // ye copy.txt file ko delete kar dega


// we can also get statistics of a file by using fs.statSync() method

const stats = fs.statSync('./file.txt');  // ye file.txt file ke statistics ko get karega

console.log(stats);  // ye file ke bare me sabhi information dega like size , birthtime , atime , mtime , isFile , isDirectory etc


// 6 we can make a directory ( folder )
fs.mkdirSync('./myDirectory/A/B',{recursive:true});  // ye myDirectory naam ka folder create kar dega   } then usme  A naam ka folder create kar dega  } then usme B naam ka folder create kar dega



// !   WE CAN DO MULTIPLE THINGS LIKE RENAME A FILE , RENAME A DIRECTORY , DELETE A DIRECTORY , DELETE A NON-EMPTY DIRECTORY  ETC  ( check doc for more info)   ETC MANY MORE    (( WHICH WAS LIKE IMPOSSIBLE IN JS))

// NOT POSSIBLE IN JS ( because js is a client side language and it cannot access the file system of the computer directly for security reasons))