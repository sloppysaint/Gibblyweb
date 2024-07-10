const mongoose = require("mongoose");
const { type } = require("os");

mongoose
  .connect("mongodb://localhost:27017/gibblybackend")
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
      mcq:{
          type:[String]
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
