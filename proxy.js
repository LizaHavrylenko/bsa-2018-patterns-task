
messageRecieve = (msg)=>{
//add pattern matching messages for the chatbot
        allMessages.push(msg);
        io.emit('chat message', msg);

     
}