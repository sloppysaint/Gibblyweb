import { useRef, useEffect } from 'react';
import Popovertop from "./Popovertop";
import { useRecoilState } from 'recoil';
import { nextpopupvisible } from './store/Visibilty';


export default function Popovernext() {
    const [visibility, setVisibility] = useRecoilState(nextpopupvisible);

    const titleRef = useRef();
    const descriptionRef = useRef();
    const inputRef = useRef();

    const transferring = () => { 
         if(inputRef.current.value && titleRef.current.value && descriptionRef.current.value   ){
        console.log("Title input value: ", titleRef.current.value);
        console.log("Description input value: ", descriptionRef.current.value);
        localStorage.setItem("username", inputRef.current.value) 
        localStorage.setItem("title", titleRef.current.value)
        localStorage.setItem("description", descriptionRef.current.value)
        // Set title cookie with a specific path
        document.cookie = `title=${titleRef.current.value}; path=/`;

        // Set username cookie with a specific path
        document.cookie = `username=${localStorage.getItem("username")}; path=/`;

        window.location.href = "/creating"
         }else{
            alert("fill all the details first")
         }

    };



    return (
        <div id="popovernext" style={{ display: visibility ? "flex" : "none" }}>
            <div id='popover' style={{ display: visibility ? "flex" : "none", border: "1px solid black", flexDirection: "column", height: "68vh" }}>
                <Popovertop />
                <div className="container" style={{ display: "flex", flexDirection: "column", width: "60vw", justifyContent: "center", alignItems: "center", rowGap: "10px", position: "relative", left: "20px", top: "-10px" }}>
                    <img src="./default-cover-img.png" height="20vh" width="200vw" alt="default cover" />
                  
                    <input type="text" ref={inputRef} className="input-field" placeholder="Giibbly Username *" required />
                    <input type="text" ref={titleRef} className="input-field" placeholder="Enter Title *" required />
                    <input type="text" ref={descriptionRef} style={{ height: "10vh", textAlign: "center" }} className="input-field" placeholder="Enter Description *" required />
                    <select className="select-field">
                        <option value="English">English</option>
                    </select>
                    <button type="button" style={{position:"relative", top:"10px" ,fontWeight:"bolder"}} onClick={transferring}>Submit</button>
                    
                </div>
            </div>
        </div>
    );
}
