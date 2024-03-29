import { PhoneCall } from '@phosphor-icons/react'
import { Call } from '../../../contexts/CallsContext'
import AudioPlayer from '../../AudioPlayer/AudioPlayer'

interface CallCellInterface {
  call: Call
}

const CallCell = ({ call }: CallCellInterface) => {
  return (
    <div className="min-h-[240px] sm:min-h-[54px] md:min-h-[240px] lg:min-h-[54px] flex flex-col w-full items-end">
      <figure className="min-h-[54px] min-w-[54px] sm:hidden flex  md:flex lg:hidden bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full justify-center items-center">
        <PhoneCall size={20} className="text-green-500" />
      </figure>
      <div className="min-h-[126x] w-full rounded-lg  bg-secundary_color drop-shadow-3xl lg:mt-0 md:-mt-7 sm:mt-0 xs:-mt-7 ">
        <header className="h-[70px] w-full flex sm:hidden md:flex lg:hidden  bg-primary_color rounded-t-md drop-shadow-3xl  items-center pl-5 pr-5 justify-between">
          <h3 className="text-secundary_color font-medium">Administrativo</h3>
        </header>
        <div className="h-full grow-1 w-full bg-secundary_color rounded-b-lg sm:rounded-lg md:rounded-b-lg lg:rounded-lg flex sm:flex-row md:flex-col flex-col lg:flex-row items-center justify-around pl-5 pr-5 lg:pr-2">
          <div className="min-h-[10px] min-w-[10px] mx-4 bg-green-500 rounded-full drop-shadow-3xl hidden sm:flex md:hidden lg:flex" />
          <span className="text-primary_color font-medium h-full text-sm items-center w-1/2 ml-4 hidden sm:flex md:hidden lg:flex">
            Administrativo
          </span>
          <div className=" w-full bg-secundary_color rounded-b-lg flex items-center justify-between sm:mt-0 md:mt-2 lg:mt-0 mt-2 sm:pl-0 lg:pl-0 pl-2">
            <div className="flex justify-start items-center sm:justify-center md:justify-start lg:justify-center gap-2 w-1/2">
              <span className="text-primary_color font-medium h-full text-sm justify-center items-center flex sm:hidden md:flex lg:hidden">
                Horário:
              </span>
              <time className="text-primary_color font-medium h-full text-sm flex justify-center items-center pr-7">
                18:04:23
              </time>
            </div>
            <div className="flex justify-end items-center sm:justify-center md:justify-end lg:justify-center gap-2 w-1/2">
              <span className="text-primary_color font-medium h-full text-sm flex sm:hidden md:flex lg:hidden  justify-center items-center">
                Número:
              </span>
              <span className="text-primary_color font-medium h-full whitespace-nowrap text-sm flex justify-center items-center">
                (35)99124-4060
              </span>
            </div>
          </div>
          <AudioPlayer
            audioID="1687271212.464"
            client="d471de34-7bca-46dd-acde-e173c85813ff"
          />
        </div>
      </div>
    </div>
  )
}

export default CallCell
