var chatServer = require('./server')

console.log("New server...")
var server = new chatServer.ChatServer();
server.start();
console.log("Server established.")
