// listner --> jo event ko sunta hai ( FUNCTION HOTA HAI , JO EVENT KE HONE PAR CALL HOTA HAI)

// emitter --> jo event ko emit karta hai (  OBJECT HOTA HAI , JO EVENT KO TRIGGER KARTA HAI )

// --------------------------------------------------------------------------------------------
// HUM ISS VIDE M LISTNER KI WORKING SAMJHENGE  ---> HOW THEY ARE CREATED AND WORKING


const EventEmitter = require("events");  // built in module hai node js ka

const eventEmitter = new EventEmitter();  //👉 new bolta hai:  “Is design se ek REAL cheez bana do”


eventEmitter.on("greet", (username) => {                                // greet - > event name , and second argument is callback function ( jo event ke hone par call hoga)
    console.log(`hello ${username} and  welcome to node js events`);
});


// emitting the event ---> event ko perform karo  ( when we emit the event , the listener function will be called01)

eventEmitter.emit("greet");

eventEmitter.emit("greeting ");  // agar aisa event emit karenge jo exist nahi karta to kuch nahi hoga

eventEmitter.emit("greet","tushar jango");   // we can also pass arguments to the listener function while emitting the event

//  when we want to emit the event only once we can use eventEmitter.once() method
//  used when user enter the meeting , or left the meeting 


eventEmitter.once("notify",()=>{
    console.log("this will run for only once");
})

eventEmitter.emit("notify");  // this will run
eventEmitter.emit("notify");  // this will not run


// --------------------------------------------------------------------------------------------

// hum humare listener functions alag se bhi de sakte hai 

const my_listener = ()=>{ console.log("this is my event listener function "); }

eventEmitter.on("test",my_listener);   // we can also pass arguments to the listener function while emitting the event

eventEmitter.emit("test");

// after the event ----> we can also remove the listener function from the event using eventEmitter.removeListener() method

eventEmitter.removeListener("test",my_listener);

eventEmitter.emit("test");  // this will not run as we have removed the listener function from the event

// we can check ki kitne listner event ko listen kar rhe hai **********  kis kis way se event listen kara jaa sakta hai 

console.log(eventEmitter.listenerCount("greet"));  // 1

console.log(eventEmitter.listenerCount("test"));   // 0   -- because iska listener delete kr chuke hai 

// ek event pr multiple listner bhi ho sakte hai