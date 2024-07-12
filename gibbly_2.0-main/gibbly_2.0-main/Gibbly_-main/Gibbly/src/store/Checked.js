import {atom} from "recoil"


let checked = atom(
    {  
        key:"toggle",
        default:false
    }
)

export default checked