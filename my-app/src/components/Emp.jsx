import React from 'react'

function Emp(props,handleChange) {
    const {name,version,license}=props;
  return (
    <div>
        <h1>{name}</h1>
        <h2>{version}</h2>
        <h3>{license}</h3>
        <button onClick={handleChange}>Add New App</button>
    </div>
  )
}

export default Emp