const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
// takes in data from the server and prints it out
    conn.on("data", (data) => {
      console.log("Server says: ", data); 
    });
//upon connection to the server, prints out "Successfully connected to game server"  
    conn.on("connect", () => {
      console.log("Successfully connected to game server");
//sends initials of client to server upon connecting
      conn.write("Name: JN")
    });
    conn.setEncoding("utf8");
  
    return conn;
  };
  
  module.exports = {connect}
  