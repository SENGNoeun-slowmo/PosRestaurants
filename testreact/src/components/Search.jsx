import React, { useState } from 'react'

function Search() {
  return (
    <>
        <div className=" container">
         <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12  ">
           <label htmlFor="">Search</label> <input type="text"  placeholder='Search Apple.com' className="input-box"/>
          </div>
         </div>
      </div>
    </>
  )
}

export default Search