import { useEffect,useState } from 'react';
import './css/create.module.css';
import Accordion from './Accordian';

import ProductCard from './ProductCard';

function Create() {
     let [arrayofquestions,setarrayofquestion]= useState([])


     useEffect(() => {
        fetch("http://localhost:3000/api/teacherquestion", {
            method: 'GET',
            credentials: 'include' // Include cookies in the request
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res.questions);
             setarrayofquestion(res.questions); // Update state with fetched data
        })
        .catch((error) => console.error('Error:', error));

        
    }, []);
    
   

    return (
         

        <div id='create' style={{ display: "flex", justifyContent: "space-around", flexDirection: "row",zIndex:"1",         
            background: "linear-gradient(90deg, rgba(255,255,255,1) 3%, rgba(252,176,69,1) 93%, rgba(239,164,81,1) 100%) " }}>
            <ProductCard />
            <div id='buttoncontainer' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ display: "flex", borderBottom: "2px solid back", columnGap: "20px", position: "relative", bottom: "5vh" }}>
                    <button style={{ minheight: "4vh", width: "110px", border: "none",backgroundColor: "orange",borderRadius:"12px" ,fontWeight: "bolder" }}>Questions</button>
                    <button style={{ minheight: "4vh", width: "60px", border: "none", backgroundColor: "orange",borderRadius:"12px" , fontWeight: "bolder" }} onClick={()=>{
                        
                        window.location.href="/pdf"}}
                    >Pdf</button>
                    <button onClick={()=>{window.location.href="/loader"}} style={{ minheight: "4vh", width: "90px", border: "none",backgroundColor: "orange",borderRadius:"12px" ,fontWeight: "bolder", }}>Share</button>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                      { arrayofquestions.map(({question ,mcq},index)=>{
                         let value =index+1
                          let title = `Question ${value} :`
                               return (   <Accordion key={index} title ={title} question={question} mcq={mcq} ></Accordion> )
                        })}

                   
                </div>
            </div>
        </div>
    );
}

export default Create;
