
import "./css/Popover.css"
import Popovertop from './Popovertop'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import { visible, nextpopupvisible } from './store/Visibilty'


function Popover_main_leftbar_box({ image, text, left = "20px", click = false }) {
    let [visibilty, setVisibilty] = useRecoilState(visible)
    let [NextPopupVisibility, setNextPopupVisibility] = useRecoilState(nextpopupvisible)
    let css = {
        position: "relative",
        top: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "2%",
        width: "15vw",
        height: "20vh",
        boxShadow: "0px 5px 10px #1990FF",
        border: "none"

    }
    let onclickevent = () => {
        if (click) {
            setVisibilty(false)
            setNextPopupVisibility(true)
        }
    }


    return (
        <div onClick={onclickevent} className='manually' style={css}>
            <img src={image}></img>
            <h2 style={{fontWeight:"bolder"}}>{text}</h2>
        </div>
    )
}


function Popover() {
    let [visibilty, setVisibilty] = useRecoilState(visible)
    const baseStyling = {
        width: '0',
        height: '0'
    };

    // Conditionally update the styling based on visibility
    const activeStyling = {
        width: '100vw',
        height: '100vh',
        backgroundColor:"white"
    };

    // Merge styles based on visibility
    const styling = visibilty ? activeStyling : baseStyling;


    return (
        <div id='container' style={styling}>
            <div id='popover' style={{ display: `${visibilty ? "flex" : "none"}`, border: "1px solid black", flexDirection: "column" }} >
                <Popovertop />
                <div id='popover_main_leftbar' >
                    <div style={{ display: 'flex', justifyContent: "space-evenly", fontWeight: "bolder !important" }}>
                        <h2 style={{fontWeight:"bolder"}}>🧠 Quiz</h2>
                        <h2 style={{ position: "relative", left: "40px" ,fontWeight:"bolder" }}>📃 Lesson</h2>
                    </div>
                    <div id='boxcontainer' style={{ display: "flex", justifyContent: "space-evenly" }} >
                        <Popover_main_leftbar_box click="true" image="./new-document.png" text="Manually" />
                        <Popover_main_leftbar_box image="./magic.png" text="Ai Generated" />
                        <Popover_main_leftbar_box image="./magic-wand.png" text="Ai Generated" />

                    </div>


                </div>
            </div>
        </div>
    )
}




export default Popover