import React from 'react'
import useToggle from './Toggle'
function Toggle() {
    const [show,toggle]=useToggle(false);
  return (
    <div>
      {show?<Message/>:null}
        <button onClick={toggle}>Toggle Message</button>
    </div>
  )
}


export default Toggle
function Message(){
    return <h1 className='bg'>Hello World</h1>
}