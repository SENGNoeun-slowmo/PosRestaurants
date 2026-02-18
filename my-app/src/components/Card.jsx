import React from 'react'

function Card({img,name,desc,getid,id}) {
    // const {img,name,desc}=props;
    const handlegetid=()=>{
       getid(id)
    }
  return (
    <div className='box'>
        <div className='box-img'>
            <img src={img} alt="" />
        </div>
        <div className='box-text'>
            <h2>{name}</h2>
            <p>{desc}</p>
            <button onClick={handlegetid}>Buy Now</button>
        </div>
        
    </div>
  )
}

export default Card