import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { useState } from 'react'

interface DashboardOutDoorInterface {
  name: string
  quantityActually: number
  quantityPast: number
  icon: any
}

const DashboardOutDoor = ({
  name,
  quantityActually,
  quantityPast,
  icon,
}: DashboardOutDoorInterface) => {
  const [diff] = useState(
    quantityActually > quantityPast
      ? (quantityActually * 100) / quantityPast
      : (-quantityPast * 100) / quantityActually,
  )

  return (
    <div className="min-h-[144px] flex flex-col w-full justify-end items-end">
      <figure className="min-h-[54px] min-w-[54px] bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center">
        {icon}
      </figure>
      <div className="h-5/6 w-full rounded-lg self-end drop-shadow-3xl align-bottom -mt-7">
        <header className="h-2/4 w-full bg-primary_color rounded-t-md flex items-center pl-5 pr-5 justify-between">
          <h3 className="text-secundary_color font-medium">{name}</h3>
        </header>
        <div className="h-2/4 w-full bg-secundary_color rounded-b-lg flex items-center justify-center">
          <div className="h-full w-1/2 flex justify-start items-center pl-3">
            <figure className="h-8 w-8 flex justify-center items-center">
              {quantityActually > quantityPast ? (
                <CaretUp className="text-green-600" />
              ) : (
                <CaretDown className="text-red-600" />
              )}
            </figure>
            <strong
              className={`font-medium w-1/2 ${
                quantityActually > quantityPast
                  ? 'text-green-600'
                  : 'text-red-600'
              }`}
            >
              {diff + '%'}
            </strong>
          </div>
          <strong className="text-primary_color font-medium h-full flex justify-end items-center pr-7 w-1/2">
            {quantityActually}
          </strong>
        </div>
      </div>
    </div>
  )
}

export default DashboardOutDoor
