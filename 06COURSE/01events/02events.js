// sometimes people want to write the same code in form of objects and classes 


// bc  ye oops to samjh hi nhi aa rhi 

const EventEmitter = require("events");  // built in module hai node js ka

class Chat extends EventEmitter
{
    sendMessage(msg)
    {
        console.log(`Message sent: ${msg}`) ;  
        this.emit("message received ",msg);   // emitting the event
    }
}

const chat = new Chat();

chat.on("message received ",(msg)=>{   // listening to the event
    console.log(`Message received : ${msg}`);
});


// triggering the event 


chat.sendMessage("Hello World!");