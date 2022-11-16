const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
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
    
    // conn.on("connect", () => {
    //   conn.write("Move: up")
    //   conn.write("Move: left") 
    //   conn.write("Move: down") 
    //   setInterval(() => {
    //     conn.write("Move: up");
    //   }, 1000);
    //   setTimeout(() => {
    //     conn.write("Move: down");
    //   }, 5000);
    //   setTimeout(() => {
    //     conn.write("Move: right");
    //   }, 9000);
    // });
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    return conn;
  };
  module.exports = {connect}
  