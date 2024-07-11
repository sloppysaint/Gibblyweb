const mongoose = require("mongoose");
const { type } = require("os");

mongoose
  .connect(
    "mongodb+srv://jainharsh0312:mDXiOo8EQep5fGQP@cluster0.trnj8br.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database is connected ");
  })
  .catch((err) => {
    console.log(err);
  });

const userschema = new mongoose.Schema({
  specificusername: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      mcq: {
        type: [String],
      },
      answer: [
        {
          type: Number,
          required: true,
        },
      ],
    },
  ],
});

const user = mongoose.model("teacherquestion", userschema);
module.exports = user;
