const mongoose = require("mongoose");
const CONNECTION_URL =
  "mongodb+srv://EMSproject:Asdf143@cluster0.svoryyf.mongodb.net/uems?retryWrites=true&w=majority";
const db = () => {
  mongoose.connect(CONNECTION_URL, () => {
    console.log("mongo/atlas connnected");
  });
};
module.exports = db;
