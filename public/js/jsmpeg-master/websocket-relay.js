// Use the websocket-relay to serve a raw MPEG-TS over WebSockets. You can use
// ffmpeg to feed the relay. ffmpeg -> websocket-relay -> browser
// Example:
// node websocket-relay yoursecret 8081 8082
// ffmpeg -i <some input> -f mpegts http://localhost:8081/yoursecret

var fs = require("fs"),
  http = require("http"),
  WebSocket = require("ws");

if (process.argv.length < 3) {
  process.exit();
}

var STREAM_SECRET = process.argv[2],
  STREAM_PORT = process.argv[3] || 8081,
  WEBSOCKET_PORT = process.argv[4] || 8082,
  RECORD_STREAM = false;

// Websocket Server
var socketServer = new WebSocket.Server({
  port: WEBSOCKET_PORT,
  perMessageDeflate: false,
});
socketServer.connectionCount = 0;
socketServer.on("connection", function (socket, upgradeReq) {
  socketServer.connectionCount++;

  socket.on("close", function (code, message) {
    socketServer.connectionCount--;
  });
});
socketServer.broadcast = function (data) {
  socketServer.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

// HTTP Server to accept incomming MPEG-TS Stream from ffmpeg
var streamServer = http.createServer(function (request, response) {
  var params = request.url.substr(1).split("/");

  if (params[0] !== STREAM_SECRET) {
    response.end();
  }

  response.connection.setTimeout(0);

  request.on("data", function (data) {
    socketServer.broadcast(data);
    if (request.socket.recording) {
      request.socket.recording.write(data);
    }
  });
  request.on("end", function () {
    console.log("close");
    if (request.socket.recording) {
      request.socket.recording.close();
    }
  });

  // Record the stream to a local file?
  if (RECORD_STREAM) {
    var path = "recordings/" + Date.now() + ".ts";
    request.socket.recording = fs.createWriteStream(path);
  }
});
// Keep the socket open for streaming
streamServer.headersTimeout = 0;
streamServer.listen(STREAM_PORT);
