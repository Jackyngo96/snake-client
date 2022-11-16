const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  // stdin.setEncoding("utf8");
  stdin.resume();
  
  const handleUserInput = function () {
    stdin.on('data', (messageFromStdIn) => {
      //conn.write('you typed:', messageFromStdIn);
      if (messageFromStdIn === '\u0003') {
        process.exit();
      }
    });
  };
  stdin.on("data", handleUserInput);
  return stdin;
};  

module.exports = {setupInput}