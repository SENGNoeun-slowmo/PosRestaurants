import React from 'react'
import useToggle from './Toggle'
import Search from './search'
function DropDown() {
    const [show,toggle]=useToggle(false);
  return (
    <div>
      {show?<Search/>:null}
        <button onClick={toggle}>Toggle Message</button>
    </div>
  )
}


export default DropDown