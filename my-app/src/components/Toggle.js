import { use, useState } from "react";
const useToggle=(initalValue)=>{
    const [show,setShow]=useState(initalValue);
    const toggle=()=>{
        setShow(!show);
    }
    return [show,toggle];
}
export default useToggle;