import axios from "axios";
import { useEffect, useReducer, useState } from "react";

interface ProductState {
    data: any[];
    isLoading: boolean;
    isErorr: boolean;
}

interface Action {
    type: string;
    payload?: any;
}

const initia: ProductState = {
    data:[],
    isLoading:true,
    isErorr:false,
};
const reducer = (state: ProductState, action: Action): ProductState => {
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
    return state;
}
interface UseProductsParams {
    url: string;
}

const useProducts = (url: UseProductsParams["url"]): ProductState => {
    const [state, dispacth] = useReducer(reducer, initia);
    
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            dispacth({ type: "LOADING" });
            try {
                const { data } = await axios(url);
                dispacth({ type: "SUCCESS", payload: data });
            } catch (error) {
                console.log("error", error);
                dispacth({ type: "ERROR" });
            }
        };
        fetchData();
    }, [url]);
    
    return state;
};
export default useProducts;