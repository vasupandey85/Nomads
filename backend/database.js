require("dotenv");
const mongoose = require("mongoose");
uri = process.env.URI || "mongodb://localhost:27017/nomads";

const connectToMongo = () => {
  mongoose.connect(uri);
  console.log("Connected To Database");
};

module.exports = connectToMongo;
