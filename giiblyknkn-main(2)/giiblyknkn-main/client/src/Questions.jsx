


function Questions({ number }) {

    return (
        <>
            {(number === undefined ? [] : number).map((ele, index) => {
                return (
                    <div style={questionContainerStyle} key={ele}>
                        <label style={labelStyle}>Question {index + 1}</label>
                        <input name={`question-${index}`} className='teacherquestions' type='text' style={inputStyle} />

                        <label style={labelStyle}>Mcq 1</label>
                        <input name={`mcq1-${index}`} className='teachermcq' type='text' style={inputStyle} />
                        <label style={labelStyle}>Mcq 2</label>
                        <input name={`mcq2-${index}`} className='teachermcq' type='text' style={inputStyle} />
                        <label style={labelStyle}>Mcq 3</label>
                        <input name={`mcq3-${index}`} className='teachermcq' type='text' style={inputStyle} />

                        <label style={labelStyle}>Mcq 4</label>
                        <input name={`mcq4-${index}`} className='teachermcq' type='text' style={inputStyle} />

                        <label>Submit the answer </label>
                        <button type='button' style={{border:"4px solid black"}} onClick={() => {
                            localStorage.setItem(`answer${index}`, document.getElementById(`answer${index}`).value)
                        }} > Submit </button>
                        <input id={`answer${index}`} name={`answer-${index}`} className='teachermcq' type='number' style={inputStyle} placeholder='1|2|3|4' required />
                        
                    </div>
                );
            })}
        </>
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


export default Questions