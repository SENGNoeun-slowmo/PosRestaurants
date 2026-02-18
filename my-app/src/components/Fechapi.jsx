import React, { useEffect } from 'react'
import useData from './useUser';


const url="https://api.jikan.moe/v4/top/anime";
function Fechapi() {
const {data,isLoading,isErorr}=useData(url);
// console.log("state",state);
console.log("data",data);
const list = data?.data || [];

console.log("isLoading",isLoading);
if(isLoading){
  return <h2>Loading....</h2>
}
if(isErorr){
  return <h2>Something went wrong</h2>
}
  return (
        <div className="box">
      {list.map(({ mal_id, title, images }) => (
        <div key={mal_id}>
          <h2>{title}</h2>
          <img src={images.jpg.image_url} alt={title} width="150" />
        </div>
      ))}
    </div>
  )
}

export default Fechapi