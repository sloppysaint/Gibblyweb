import React from 'react';
import './css/Popover.css';
import Popovertop from './Popovertop';
import { useRecoilState } from 'recoil';
import { visible, nextpopupvisible } from './store/Visibilty';
import { useState, useEffect } from 'react';

function Popover_main_leftbar_box({ image, text, left = "20px", click = false }) {
    let [visibilty, setVisibilty] = useRecoilState(visible);
    let [NextPopupVisibility, setNextPopupVisibility] = useRecoilState(nextpopupvisible);
    
    let onclickevent = () => {
        if (click) {
            setVisibilty(false);
            setNextPopupVisibility(true);
        }
    };

    return (
        <div onClick={onclickevent} className='manually'>
            <img src={image} alt={text}></img>
            <h2 style={{ fontWeight: "bolder" }}>{text}</h2>
        </div>
    );
}

function Popover() {
    let [visibilty, setVisibilty] = useRecoilState(visible);
    const baseStyling = {
        width: '0',
        height: '0'
    };

    const activeStyling = {
        width: '100vw',
        height: '100vh',
        backgroundColor: "orange"
    };

    const styling = visibilty ? activeStyling : baseStyling;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 850);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 850);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id='container' style={styling}>
            <div id='popover' style={{ display: `${visibilty ? "flex" : "none"}`, border: "1px solid black", flexDirection: "column" }}>
                <Popovertop />
                <div id='popover_main_leftbar'>
                    <div style={{ display: 'flex', justifyContent: "space-evenly", fontWeight: "bolder !important" }}>
                        <h2 style={{ fontWeight: "bolder", left: "40px" }}>🧠 Quiz</h2>
                        {!isMobile && <h2 style={{ position: "relative", left: "40px", fontWeight: "bolder" }}>📃 Lesson</h2>}
                    </div>
                    <div id='boxcontainer'>
                        <Popover_main_leftbar_box click={true} image="./new-document.png" text="Manually" />
                        
                        <Popover_main_leftbar_box image="./magic.png" text="AI Generated" />
                        {isMobile && <h2 style={{ fontWeight: "bolder", marginTop: "20px",position:"relative",right:"10px" }}>📃 Lesson</h2>}
                        <Popover_main_leftbar_box image="./magic-wand.png" text="AI Generated" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popover;
