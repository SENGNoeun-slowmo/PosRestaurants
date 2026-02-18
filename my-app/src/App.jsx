
import { useState } from 'react'
import './App.css'
// import Cart from './components/Card.jsx'
// import Toggle from './components/Toggle.jsx'
// import Form from './components/Form.jsx'
import Fachapi from './components/Fechapi.jsx'
// import Const1 from './components/Const.jsx'
// import Emp from './components/Emp.jsx';
// import User from './components/User.jsx';
// import UserList from './components/UserList.jsx';
// import AnimeList from './components/AnimeList.jsx';
// import AnimeSearch from './components/AnimeSearch.jsx';
// import Form from './components/Form.jsx';

function App() {
// const under=[
//   { id:1,
//     name:"Men's Clothing",
//     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
//     img:"https://images.pexels.com/photos/54611/trousers-underwear-nostalgia-past-54611.jpeg"
//   },
//   {id:2,
//     name:"Women's Clothing",
//     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
//     img:"https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg" 
//   },
//   {id:3,
//     name:"Kid's Clothing",
//     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
//     img:"https://images.pexels.com/photos/1001916/pexels-photo-1001916.jpeg"
    
//   },
//   {
//     id:4,
//     name:"Accessories",
//     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
//     img:"https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"

//   },
//   {id:5,
//     name:"Footwear",
//     desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
//     img:"https://images.pexels.com/photos/19090/pexels-photo.jpg"
//   }
// ]
//  const filtter=under.filter((un)=>{
//     return un.id>2
//  })
//    return (
//     <div>
//       {under.map((un=>{
//        return <Cart key={un.id} img={un.img} name={un.name} desc={un.desc}/>
//       }))}
     
//     </div>
//    )
  // const getidbrand=(id)=>{
  //   console.log("the id is",id);
  // }
  //  return(
  //   <div>
  //     {under.map(un=>{
  //       return <Cart getid={getidbrand} {...un} key={un.id}/>
  //     })}
  //   </div>
  //  )
  // =============================ustart=============================
  // const [Const,setCount]=useState(0);
  // const increment=()=>{
  //   setCount(Const+1);
  // }
  // return(
  //   <Const1 Increment={increment} Const={Const}/>
   
  // )
    // =============================ustop=============================
//    const emp = [
//   { id: 1, name: "React App", version: "18.2.0", license: "MIT" }
// ];
//  const [Name,setName]=useState(emp);
//  const handleChange=()=>{
//   setName({...Name},{name:"Vue App"})
//  }
// return (
//   <div>
//     <h1>Welcome to React App</h1>

//     {emp.map(e=>{
//       return <Emp key={e.id} {...e} handleChange={handleChange} />
//     })}
//   </div>
// );
// return(
//   <Form/>
// )
return(
  <Fachapi/>
)
}

export default App
