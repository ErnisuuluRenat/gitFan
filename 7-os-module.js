//Built in modules

//OS MODULE - for interacting with operating system and server
//

const os = require("os");

//info about current user

const user = os.userInfo();

// method return the system uptime in seconds

console.log(`The system uptime ${os.uptime()}`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmemory: os.totalmem(),
};
console.log(currentOs.totalmemory);
