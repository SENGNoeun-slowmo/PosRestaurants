import React from 'react'
import User from './User'
const data=[
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Charlie'}
]


function UserList() {
    const [User1,setUser]=React.useState(data);
    function getidUser(id){
    const userf=User1.filter(u=>u.id!==id);
    setUser(userf);
}
    
  return (
    <div>
       {User1.map(u=>{
        return <User key={u.id}  {...u} getid={getidUser}/>
       })}
    </div>
  )
}

export default UserList