
const serverless = require("serverless-http");
const app = require("./app");

// wraps your Express app into a Lambda-compatible function
const handler = serverless(app);
module.exports.handler = handler;
