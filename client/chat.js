$(document).ready(function(){
  if(window.WebSocket){
      var ws = new WebSocket('ws://localhost:8001');
      var debug = $("#debug");
      var mess = $("#messages");
      
      $("#chat_button").click(function(e){
          var time = new Date();
          console.log('chat click: ', $("#chat_input").val());
          ws.send(time + ": " + $("#chat_input").val());
      });

      ws.onopen = function(e){
          console.log("Server connected!");
          debug.append("Connected success!<br>");
      }
      ws.onclose = function(e){
          console.log("Server closed!");
          debug.append("Server closed!<br>");
      }
      ws.onerror = function(){
          console.log("Connect error!");
          debug.append("Connect error!<br>");
      }

      ws.onmessage = function(e){
         console.log('on message', e);
         mess.append(e.data + "<br>")
      }
  }
});