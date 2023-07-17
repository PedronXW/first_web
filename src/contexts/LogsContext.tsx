import { ReactNode, createContext, useCallback, useEffect, useState } from "react";

interface LogsContextInterface{
    children:ReactNode
}

const LogsContextProvider=({children}:LogsContextInterface)=>{
    const [Logs, setLogs]=useState();

    const LogsContext=createContext({Logs,setLogs})

    const fetchLogs = useCallback(async () =>{
        //const result=await axios.get("http://localhost:3000/")
        //setLogs(result.data)
    },[])
    
    useEffect(()=>{
        fetchLogs()
    },[])
    
    return(
        <LogsContext.Provider value={{Logs,setLogs}}>
            {children}
        </LogsContext.Provider>
    )
}