import { ReactNode, createContext, useCallback, useEffect, useState } from "react";

interface UsersContextInterface{
    children:ReactNode
}

const UsersContextProvider=({children}:UsersContextInterface)=>{
    const [Users, setUsers]=useState();

    const UsersContext=createContext({Users,setUsers})

    const fetchUsers = useCallback(async () =>{
        //const result=await axios.get("http://localhost:3000/")
        //setUsers(result.data)
    },[])
    
    useEffect(()=>{
        fetchUsers()
    },[])
    
    return(
        <UsersContext.Provider value={{Users,setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}