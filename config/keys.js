// mongodb+srv://nsikakessien:Ofdesxu65ioxmF01@cluster0.vf0vjgc.mongodb.net/emailyprod?retryWrites=true&w=majority&appName=Cluster0

if (process.env.NODE_ENV === "production") {
  // Production keys
  module.exports = require("./prod");
} else {
  // Development keys
  module.exports = require("./dev");
}
