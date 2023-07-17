import { ReactNode, createContext, useCallback, useEffect, useState } from "react";

interface CallsContextInterface{
    children:ReactNode
}

const CallsContextProvider=({children}:CallsContextInterface)=>{
    const [Calls, setCalls]=useState();

    const CallsContext=createContext({Calls,setCalls})

    const fetchCalls = useCallback(async () =>{
        //const result=await axios.get("http://localhost:3000/")
        //setCalls(result.data)
    },[])
    
    useEffect(()=>{
        fetchCalls()
    },[])
    
    return(
        <CallsContext.Provider value={{Calls,setCalls}}>
            {children}
        </CallsContext.Provider>
    )
}