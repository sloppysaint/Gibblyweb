import { useState, useRef } from 'react';
import Questions from './Questions';

function AddManually() {
    const [numberofquestionstate, setnumberofquestion] = useState([]);
    const numberofquestions = useRef();

    const handleInputChange = () => {
        const value = numberofquestions.current.value;
        const array = Array.from({ length: value }, (_, i) => i);
        setnumberofquestion(array);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const questions = []; // [{question:String , mcq:[String] , answer:Number}]
       
        
      console.log("aldksdask" ,formData) 
      
     
      
        for (let i = 0; i < numberofquestionstate.length; i++) {
            // here i get a question 
            const question = formData.get(`question-${i}`);
           
            // from here i got an answer of above question at a time 
            let answer ;
            if (localStorage.getItem(`answer${i}`)) {
              answer = Number(localStorage.getItem(`answer${i}`))
               
            }
            let mcq =[]
            // here i will get mcq array 
            for(let j = 1 ; j<5 ;j++){
                 mcq.push(formData.get(`mcq${j}-${i}`)); 
            }

            questions.push({ question, mcq ,answer });
            
            
        }
        
        let username = localStorage.getItem("username")
        let title = localStorage.getItem("title")
        let description = localStorage.getItem("description")
        const data = {
            specificusername: username, 
            title, 
            description, 
            questions: questions
        };
        console.log(data)

       try {
            const response = await fetch('http://localhost:3000/add/manually', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });


            console.log('Form submitted successfully:', JSON.stringify(data));
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle} >
            <label style={labelStyle}>How many questions do you want?</label>
            <input
                ref={numberofquestions}
                type='number'
                style={inputStyle}
                onChange={handleInputChange}
            />

            <div style={questionsContainerStyle}>
                <Questions number={numberofquestionstate} />
            </div>

            <button type='submit' onClick={()=>{window.location.href="/creating"}}  style={buttonStyle}>Submit</button>
        </form>
    );
}



const formStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9"
};

const labelStyle = {
    margin: "10px 0",
    fontWeight: "bold"
};

const inputStyle = {
    width: "80%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px"
};

const buttonStyle = {
    padding: "10px 20px",
    margin: "20px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
};

const questionsContainerStyle = {
    width: "100%",
    maxHeight: "300px",
    overflowY: "auto",
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff"
};

const questionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff"
};

export default AddManually;
