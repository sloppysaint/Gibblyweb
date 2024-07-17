const usermodel = require("../model/user");

const updateData = async (specificusername, title, questions) => {
    try {
      const existingData = await usermodel.findOne({
        specificusername,
        title,
      });
  
      if (!existingData) {
        throw new Error("Data not found");
      }
  
      existingData.questions.push(...questions);
  
      const updatedData = await usermodel.findOneAndUpdate(
        { specificusername, title },
        existingData,
        { new: true } // Return updated document
      );
     
      return updatedData;
    } catch (error) {
      throw error;
    }
  };

  module.exports =updateData  