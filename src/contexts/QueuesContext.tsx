import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { usePersistanceStore } from "../hooks/usePersistanceStore";
import { api } from "../lib/axios";

interface QueuesContextInterface{
    children:ReactNode
}

export type Queue={
    id:       number;
    name:     string;
    digit:    number;
    overflow: number;
}

interface QueueContext{
    queues:Queue[],
    fetchQueues:()=>void,
    addQueue:(newQueue:Queue)=>void
}

export const QueuesContext=createContext({} as QueueContext)

export const QueuesProvider=({children}:QueuesContextInterface)=>{

    const { value }=usePersistanceStore()

    const [queues, setQueues]=useState<Queue[]>([]);

    

    const fetchQueues = useCallback(async () =>{
        const result=await api.get("queues",{headers:{'Authorization': `Bearer ${value.token}`}})
        setQueues(result.data)
    },[])

    const addQueue = useCallback(async (newQueue:any) =>{
        const result=await api.post("queues", newQueue)
        setQueues((state)=>[result.data, ...state])
    },[])
    
    useEffect(()=>{
        fetchQueues()
    },[])
    
    return(
        <QueuesContext.Provider value={{queues, fetchQueues, addQueue}}>
            {children}
        </QueuesContext.Provider>
    )
}