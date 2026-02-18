import { useState } from "react"


function Form() {
    const [name,SetName]=useState("");
    const [email,setEmail]=useState("");
    const [values,setValues]=useState([]);
    // function handleName(e){
    //     SetName(e.target.value);
    // }
   
    function handleSubmit(e){
        e.preventDefault();
        if(!name || !email){
            return ;
        }
        const newValue={name,email};
        setValues([...values,newValue]);
        SetName("");
        setEmail("");
    }
    function handleRemove(index){
        const filteredValues=values.filter((___,i)=> i !== index);
        setValues(filteredValues);

    }
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} id="name" onChange={(e)=>SetName(e.target.value)}/>
            <label htmlFor="email">email</label>
            <input type="email" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} />
            <button type="submit" onClick={handleSubmit} >Submit</button>
        </form>
        <ul>
            {values.map((val,index)=>(
                <li key={index}>{val.name} : {val.email}
                <button onClick={()=>handleRemove(index)}>remove</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Form