let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};
  


  const handleUserInput = function (key) {
  // move up if w is pressed
  if (key === "w") {
    // setInterval(() => {
    connection.write("Move: up");
    // }, 1000);
    // console.log("Move: up");
    }
  if (key === "a") {
    //setInterval(() => {
    connection.write("Move: left");
    // }, 1000);
    // console.log("Move: left");
  } 
  if (key === "s") {
    //setInterval(() => {
    connection.write("Move: down");
    //}, 1000);
    // console.log("Move: down");
  } 
  if (key === "d") {
    //setInterval(() => {
    connection.write("Move: right");
    // }, 1000);
    // console.log("Move: right");
  }
  if (key === "/") { 
    connection.write("Say: HELLO")
  }
  // exit program if Ctrl C is pressed
  if (key === "\u0003") {
      process.exit();
  }
};

module.exports = { setupInput };
