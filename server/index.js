const express = require("express");
const {readMessage, createMessage, updateMessage, deleteMessage} = require("./controlers/messages_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.post("/api/messages", createMessage);
app.get("/api/messages", readMessage);
app.put("/api/messages/:id", updateMessage);
app.delete("/api/messages/:id", deleteMessage);

app.listen(3001, () => console.log("Running on Port 3001"));