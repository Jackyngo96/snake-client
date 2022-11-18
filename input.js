let connection;
const { INPUTS } = require("./constants");
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};
let moving;

const handleUserInput = function (key) {
  let WASD = ["w", "a", "s", "d"];
  for (const moves of WASD) {
    if (key === moves) { 
      if (moving) {
        clearInterval(moving);
      }
      moving = setInterval(() => {
        connection.write(INPUTS[moves]);
      }, 50);
    }
  }
  for (const message in INPUTS) {
    if (key === message) {
      connection.write(INPUTS[message]);
    }
  }
  if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };
