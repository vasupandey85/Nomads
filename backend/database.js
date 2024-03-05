require("dotenv");
const mongoose = require("mongoose");
uri = process.env.URI || "mongodb://localhost:27017/nomads";

const connectToMongo = () => {
  mongoose.connect(uri)
    .then(() => {
    console.log("Connected to Mongo");
    })
    .catch(() => {
    console.error("Could Not connect");
  })
};

module.exports = connectToMongo;
