import React from 'react';

const QuizCard = ({ title, questions, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt="Quiz Thumbnail" className="w-full h-32 object-cover" />
      <div className="p-4 w-30 h-30">
        <h2 className="text-lg font-semibold mb-2 min-h-8">{title}</h2>
        <p className="text-gray-600 min-h-15">{questions} Questions</p>
        <div className="mt-4 flex justify-around">
          <button className="flex items-center justify-center leading-none no-underline text-white text-[25px] rounded-[9px] w-[100px] h-[43px] font-bold border-b-[7px] border-[#13619f] transition-all duration-200 shadow-md bg-[#2196f3] hover:border-b-[2px] hover:translate-y-[2px]">Solo</button>
          <button className="flex items-center justify-center leading-none no-underline text-white text-[25px] rounded-[9px] w-[100px] h-[43px] font-bold border-b-[7px] border-[#9100ff] transition-all duration-200 shadow-md bg-[#9100ff] hover:border-b-[2px] hover:translate-y-[2px]">Host</button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
/** .original-button {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: #ffffff;
  font-size: 25px;
  border-radius: 9px;
  width: 165px;
  height: 43px;
  font-weight: bold;
  border-bottom: 7px solid #13619f;
  transition: 0.2s;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.6), 1px 1px 1px rgba(0, 0, 0, 0.4);
  background-color: #2196f3;
}

.original-button:hover {
  border-bottom-width: 2px;
  transform: translateY(2px);
}*/