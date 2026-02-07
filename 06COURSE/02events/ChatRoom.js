const EventEmitter = require("events");  // built in module hai node js ka

class ChatRoom extends EventEmitter{
    constructor(){   //Jab bhi naya ChatRoom banega, yeh function automatically chalega
        super();  // super() ka matlab hai:  “Is design se ek REAL cheez bana do”  ( parent class ke constructor ko call karta hai )

        this.users = new Set()  //Har chat room apne users ka alag register rakhega.
    }


    // Main ek chat room bana raha hoon jo EVENTS samajh sakta hai, aur apne users ko yaad rakh sakta hai.”


    join(user){
        this.users.add(user); // User ko chat room mein add karo
        this.emit("user joined", user); // Emit karo ki ek naya user join kar gaya
    }

    sendmessage(user,message ){ // user ke liye message send karo  , we need two arguments
        if(this.users.has(user)){
            this.emit('message', {user, message}); // Emit karo ki ek message aaya hai, aur uske saath user ka naam bhi bhejo
        }
        else{
            console.log(`user ${user} is not in the chat room. Please join first.`); // Agar user chat room mein nahi hai, toh ek error message dikhado
        }
    }
    
        leave(users)
    {
        if(this.users.has(user))
        {
            this.users.delete(user); // User ko chat room se remove karo
            this.emit("leave", user); // Emit karo ki ek user chat room chhod ke gaya
        }
        else
        {
            console.log(`user ${user} is not in the chat room. Please join first.`);
        }
    }
    // ye humne ek chatroom k liye functanility banai hui hai , ab hum is chatroom k events ko listen karenge


    
}


module.exports = ChatRoom;  // is file ko export kar diya hai taki hum isse dusri files mein use kar sake

