import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

interface StatusContextInterface {
  children: ReactNode
}

const StatusContextProvider = ({ children }: StatusContextInterface) => {
  const [status, setStatus] = useState()

  const StatusContext = createContext({ status, setStatus })

  const fetchStatus = useCallback(async () => {
    // const result=await axios.get("http://localhost:3000/")
    // setStatus(result.data)
  }, [])

  useEffect(() => {
    fetchStatus()
  }, [])

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  )
}
