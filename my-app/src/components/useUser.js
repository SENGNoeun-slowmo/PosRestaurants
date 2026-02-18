import axios from "axios";
import { useEffect, useReducer, useState } from "react";
const initia={
    data:[],
    isLoading:true,
    isErorr:false,
};
const reducer=(state,action)=>{
    if(action.type==="SUCCESS"){
        return {
            ...state,
            data:action.payload,
            isLoading:false,
           
        };
    }
    if(action.type==="ERROR"){
        return {
            ...state,
            isErorr:true,
            isLoading:false,
        };
    }
    if(action.type==="LOADING"){
        return {
            ...state,
            isLoading:true,
        };
    }
   
}
const useData=(url)=>{

const [state,dispacth]=useReducer(reducer,initia)
useEffect(()=>{
    const fetchData=async()=>{
        dispacth({type:"LOADING"});
        try{
            const {data}=await axios(url);
           
            dispacth({type:"SUCCESS", payload:data});
        }
    catch(error){
        console.log("error",error);
        
        dispacth({type:"ERROR"});
    }
    
};
fetchData();
} ,[url]
);
// return {data, isLoading, isErorr};
return  state;
}
export default useData;