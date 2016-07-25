var ws = require("nodejs-websocket");
var module = this;

// This is the class that will be running
this.ChatServer = function(options) {
  this.nextIdToAssign = 0;
  this.server         = null;

  var self = this;

  this.broadcast = function(data) {
    self.server.connections.forEach(function(connection) {
      connection.sendText(data);
    })
  };

  this.start = function() {
    // Create the server object
    this.server = ws.createServer(function(conn) {
      conn.on("text", function (str) {
        console.log("receive:" + str);
        self.broadcast(str);
      });

      conn.on("close", function (code, reason) {
        console.log("close", code, reason)
      });

      conn.on("error", function (code, reason) {
        console.log("error")
      });

    });

    self.server.listen(8001);

    self.server.on("connection", function(conn) {
      console.log('new conn', conn);
    });

  };



};
