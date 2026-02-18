
function User(props) {
    const {name,id,getid} = props;
    console.log(props);
    const handleclick=()=>{
       getid(id);
    }
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={handleclick}>remove</button>
    </div>
  )
}

export default User