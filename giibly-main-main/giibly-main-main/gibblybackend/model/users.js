const mongoose = require("mongoose");
const { type } = require("os");

mongoose
  .connect("mongodb://0.0.0.0:27017/gibblybackend")
  .then(() => {
    console.log("Database is connected ");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
