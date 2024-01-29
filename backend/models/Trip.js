const mongoose = require("mongoose");
const { Schema } = mongoose;

const TripSchema = new Schema({
  mailId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  headCount: "number",
  source: "string",
  destination: "string",
  category: "string",
  span: "number",
  notes: "string",
});

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;
