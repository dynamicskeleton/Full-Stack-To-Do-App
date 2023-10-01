const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log("Failed to connect to database"));

const toDoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("todo", toDoSchema);
module.exports = collection;
