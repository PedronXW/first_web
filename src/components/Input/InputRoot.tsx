import { ReactNode, createContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputRootInterface {
  patternColor: string
  id: string
  initialVisibility?: boolean
  children: ReactNode
}

interface InputContextInterface {
  id: string
  value: string
  changeValue: (value: string) => void
  visibility: boolean
  changeVisibility: (visibility: boolean) => void
  patternColor: string
}

export const InputContext = createContext({} as InputContextInterface)

const InputRoot = ({
  patternColor,
  id,
  children,
  initialVisibility = true,
}: InputRootInterface) => {
  const [value, setValue] = useState('')
  const [visibility, setVisibility] = useState(initialVisibility)

  const { setFocus } = useFormContext()

  return (
    <InputContext.Provider
      value={{
        value,
        visibility,
        patternColor,
        changeValue: setValue,
        changeVisibility: setVisibility,
        id,
      }}
    >
      <div
        className={`w-full cursor-pointer ${
          patternColor === 'background_color'
            ? 'drop-shadow-none'
            : 'drop-shadow-md'
        } p-3 flex items-center bg-${patternColor} border-${patternColor} rounded-md`}
        onClick={(event: any) => {
          setFocus(id)
        }}
      >
        {children}
      </div>
    </InputContext.Provider>
  )
}

export default InputRoot
