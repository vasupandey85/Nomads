require("dotenv");
const connectToMongo = require("./database");
const express = require("express");
PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
connectToMongo();

// Routes Will Follow
app.use("/auth", require('./routes/auth'))



app.listen(PORT, () => {
  console.log(`Server Running on Port : ${PORT}`);
});
