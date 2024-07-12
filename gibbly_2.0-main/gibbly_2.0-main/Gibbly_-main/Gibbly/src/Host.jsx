import { Html ,Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import "./css/host.css";

function Question() {
    let divstyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        right: "27vw",

    };

    const buttonStyle = {
        height: "8vh",
        width: "35vw",
        backgroundColor: "whitesmoke",
        border: "3px solid #887BB0",
        color: "#3b444b",
        borderRadius: "20px",
        fontWeight: 600,
        fontSize: "30px",
        textShadow: "2px 2px #887BB0",
        textTransform: "uppercase",
        cursor: "pointer",
        
    };

    const backgroundStyle = {
        backgroundColor: "#232b2b",
        border: "2px solid #887BB0",
        height: "8vh",
        width: "35vw",
        borderRadius: "20px",
        marginTop: "-50px",
        zIndex: -1,
        boxShadow: "0px 10px whitesmoke",
    };


    let [arrayofques, setarrayofques] = useState([])


    useEffect(() => {
        // fetching the data
        fetch("http://localhost:3000/api/teacherquestion", {
            method: 'GET',
            credentials: 'include' // Include cookies in the request
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.questions);
                setarrayofques(res.questions); // Update state with fetched data
            })
            .catch((error) => console.error('Error:', error));
      
      

    }, []);

     // for mcq correct answer 
      
     const handleButtonClick = ( event ,index, answer) => {
        if (index+1 == answer) {
            event.target.style.color="green"
            
        }else{
            event.target.style.color="red"
        } 
       
      
      
    };



    return (
        <>
            {arrayofques.map((ele, index) => {
                let { question, answer, mcq } = ele
                let realanswer = answer[0]
                return (
                    <div key={question}>
                        <h1 className="question" style={{color:"whitesmoke"}}> {index+1} {question}  </h1>


                        <div
                            className="questionaire"

                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "20px",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",


                            }}
                        >
                            {mcq.map((element, indexes) => {
                                
                                return (
                                    <>
                                        <div key={element} style={divstyle}>
                                            <button  onClick={(event) => handleButtonClick( event,indexes, realanswer)} className="mcqbutton" style={buttonStyle}>{element}</button>
                                            <div className="mcqbutton" style={backgroundStyle}></div>
                                        </div>

                                    </>
                                )
                            })}
                        
                        </div>
                    </div>
                )

            })}
        </>

    );
}



const Host = () => {


    return (
        <>
            <Canvas style={{ overflowY: "visible", height: "150vh",backgroundColor:"#B95CF4" }}>
              

                <Stars radius={100} depth={1} count={2000} factor={10} saturation={0} fade speed={1} />
                
                    <Html style={{position:"relative" ,bottom:"70vh"}} castShadow >
                        <Question />
                      
                    </Html>
             

                
            </Canvas>

        </>
    )
}

export default Host;
