import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputNumberContext } from './InputRootNumber'

interface InputTextInterface {
  placeholder: string
  maxLength?: number
}

const InputNumber = ({ placeholder, maxLength }: InputTextInterface) => {
  const { patternColor, value, changeValue, id } =
    useContext(InputNumberContext)
  const { register } = useFormContext()

  return (
    <input
      {...register(id, { valueAsNumber: true })}
      type="number"
      max={maxLength}
      placeholder={placeholder}
      className={`font-medium text-sm ml-2 bg-${patternColor} border-${patternColor} w-full pr-1`}
      onChange={(e) => {
        changeValue(parseInt(e.target.value))
      }}
      value={value}
    />
  )
}

export default InputNumber
