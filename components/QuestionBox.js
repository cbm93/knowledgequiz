import React, { useState }from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswers] = useState(options); 
  return (

    
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text,index) => (
        <button key={index} 
        className="answerBtn" 
        onClick={() => {
          setAnswers([text]);
          selected(text);
        }}
        >
         {text} 
          </button>
      ))}

    </div>
  );
};

export default QuestionBox; 