// because node can run js code outside the browser , so we made js file 

console.log("hey i am running js");

// console.log(window) in node it will give error because window is not defined in node
// console.log(alert("hello")) in node it will give error because alert is not defined in node


// they ||||| are running well in browser>>>> inspect console

// ********************************************************

// this is because v8 engine of nodejs se window(dom ->manupulation wala part hta diya hai ) jisse hum 

// so window /update , manupulate nhi kr sakte ( get document by id , class name etc )  ye nhi hoga

// kyonki humme ab only browser nhi chahiye hume server side chahiye !!!!( we need server side )

// but hum js ke sare logic use kr skte hai

// like function , array , object , loops , conditional statements etc  


// npm init se program start hoga ( package.json file banega )

// npm init -y se bina puchhe sare questions ka default ans deke package.json file banega

// then we can run our file by node filename.js
// or we can add script in package.json file and run by npm run scriptname
// like in package.json file we added "tushar": "node hello.js" in scripts object
// then we can run by npm run tushar