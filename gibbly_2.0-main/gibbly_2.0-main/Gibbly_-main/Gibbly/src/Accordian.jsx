import React, { useState } from "react";
import "./css/Accordion.css";

const Accordion = ({ title, mcq=[]  ,question="lakshay" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="app-accordion" style={{minWidth:"30vw"}}>
      <div className="app-collapse" >
        <button
          className="collapse-header-button"
          aria-expanded={isExpanded}
          onClick={toggleAccordion}
          aria-controls="collapse-content"
          style={{background: "linear-gradient(90deg, rgba(255,255,255,1) 3%, rgba(252,176,69,1) 93%, rgba(239,164,81,1) 100%) "}}
          
        >
          <span className="collapse-title" style={{textAlign:"center" ,fontWeight:"bolder"}}>
            {title} {question} <br />
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 156 82"
              className="collapse-icon"
              
            >
              <path className="icon-path-line" />
            </svg>
          </span>
        </button>
        <div
          id="collapse-content"
          role="region"
          aria-labelledby="collapse-header"
          className={`collapse-panel ${isExpanded ? "app-collapse-expanded" : ""}`}
          style={{background: "linear-gradient(90deg, rgba(255,255,255,1) 3%, rgba(252,176,69,1) 93%, rgba(239,164,81,1) 100%) "}}
        >
          <div className="collapse-panel-inner-wrapper content-text">
            {mcq.map((ele,index)=>{
              let value =index+1
              return ( 
                <p key={ele} style={{fontWeight:"bolder"}} >  {value}. {ele} </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
