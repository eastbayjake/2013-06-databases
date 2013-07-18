var http = require("http");
var requestHandler = require("./request-handler.js");
var Sequelize = require('sequelize');
var sequelize = new Sequelize("chat", "root");

var user = sequelize.define('messages', {
  username: Sequelize.STRING,
  message: Sequelize.STRING,
  room: Sequelize.STRING,
  time: Sequelize.DATE
});

// IMPORTED FROM CHAT-SERVER: basic-server.js
var port = 8081;
var ip = "127.0.0.1";

var server = http.createServer(requestHandler.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

exports.get = function(cb) {
  user.sync().success(function(){
    var data = user.findAll().success(function(){
      cb(data);
    });
  });
};

exports.post = function(data, cb) {
  user.sync().success(function(){
    user.create(data).success(cb);
  });
};
