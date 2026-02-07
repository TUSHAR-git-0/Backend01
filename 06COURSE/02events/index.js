const Chatroom = require("./ChatRoom");

const chat = new Chatroom();

chat.on("join", (user) => {
    console.log(`${user} has joined the chat room.`);
});

chat.on("message", (user ,message) => {
    console.log(`${user} ${message}has joined the chat room.`);
});


chat.on("leave", (user) => {
    console.log(`${user} has leaved  the chat room.`);
});

// ab hum chatroom k events ko trigger karenge

chat.join("tushar ");
chat.join("aditi ")
chat.sendmessage("tushar jango","Hello aditi !");  // this will work as tushar jango is in the chat room
chat.sendmessage("aditi","Hello tushar!"); 
chat.sendmessage("rohit","Hello!");  // this will not work as rohit is not in the chat room

chat.leave("tushar jango");
chat.sendmessage("tushar jango","Hello!");  // this will not work as tushar jango has left the chat room 
