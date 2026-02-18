import React from 'react'

function Const({Increment,Const}) {

  return (
    <div className='bg-const'>
        <h1>{Const}</h1>
        <button className='btn' onClick={Increment}>+</button>
    </div>
  )
}

export default Const