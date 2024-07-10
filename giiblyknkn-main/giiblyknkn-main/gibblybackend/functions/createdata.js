
const usermodel = require("../model/user");



// Function to handle creating new data
const createData = async (specificusername, title, questions) => {
    try {
      const newData = await usermodel.create({
        specificusername,
        title,
        questions,
      });
    
      return newData;
    } catch (error) {
      throw error;
    }
  };
  

module.exports =createData  