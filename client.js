const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
  });
  
  conn.on("connect", (client) => {
    console.log("Name: JNG");
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

module.exports = connect