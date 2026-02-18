import { useState } from "react"

const useSlide=(init)=>{
    const [show,setShow]=useState(init);
    const Slide=()=>{
        setShow(prev=>!prev)
    }
    return [show,Slide];
}
export default useSlide;