const express = require('express');
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: {origin:"x"}});

app.set("view engine","ejs");

app.get("/home",(req,res) =>{
    res.render("home");
})

server.listen(4001, () =>{
    console.log("server running...");
})

io.on('connection' , (socket) =>{
    console.log("user connected" +socket.id);


    socket.on("message" ,(data) =>{
        //console.log(data);//showing message to itself
        socket.broadcast.emit('message',data);
    })
})