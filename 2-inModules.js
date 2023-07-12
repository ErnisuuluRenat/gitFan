//Modules - encapsulated code (only share minimum)
// CommonJS every file is module
const { jakyp, eliza, ayana } = require("./3-modules");

const showMe = require("./4-utils");

require("./6-mind-grenade");
// when u import module u actually invoked
// when node exports it wraps in a function

showMe(jakyp);
showMe(eliza);
