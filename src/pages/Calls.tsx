import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import DatePicker from '../components/DatePicker/DatePicker'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import { Input } from '../components/Input'
import CallsList from '../components/Lists/CallsList/CallsList'
import Drawer from '../components/Lists/Drawer/Drawer'
import { SelectorCallResult } from '../components/SelectorCallResult/SelectorCallResult'
import { SelectorCallType } from '../components/SelectorCallType/SelectorCallType'
import { CallsContext, Direction, Result } from '../contexts/CallsContext'

const callSearchFormSchema = z.object({
  text: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de e-mail invalido'),
})

export type CallSearchrFormType = z.infer<typeof callSearchFormSchema>

const Calls = () => {
  const { fetchCalls, calls } = useContext(CallsContext)

  const [resultSelected, setResultSelected] = useState<Result>({
    answer: true,
    timeout: true,
    busy: true,
    cancel: true,
  })
  const [directionSelected, setDirectionSelected] = useState<Direction>({
    incomming: true,
    outgoing: true,
    internal: true,
  })
  const [searchingValue, setSearchingValue] = useState<string>('')
  const [startSelected, setStartSelected] = useState<Date | null>(null)
  const [endSelected, setEndSelected] = useState<Date | null>(null)

  const callsFormProvider = useForm<CallSearchrFormType>({
    resolver: zodResolver(callSearchFormSchema),
  })

  useEffect(() => {
    fetchCalls(
      searchingValue,
      directionSelected,
      resultSelected,
      startSelected || undefined,
      endSelected || undefined,
    )
  }, [
    startSelected,
    endSelected,
    searchingValue,
    directionSelected,
    resultSelected,
  ])

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<CallSearchrFormType>({
    resolver: zodResolver(callSearchFormSchema),
  })

  const [searchLayoutStatus, setSearchLayoutStatus] = useState<boolean>(false)

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color overflow-hidden">
      <Drawer selected={2} />
      <div className="h-full w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
        <HeaderMobile />
        <div className="grow-1 h-full w-full flex flex-col overflow-y-scroll gap-2 pb-4">
          <Header title="Chamadas" />
          <CallsList />
        </div>
        <BottomNavigationMenu selected={2} />
      </div>
      <div
        className={` h-full w-screen z-40 xl:w-min absolute xl:relative ${
          searchLayoutStatus ? 'flex' : 'hidden xl:flex'
        }`}
      >
        <div className="h-full flex grow-1 w-full bg-black opacity-30" />
        <form className="h-full min-w-[320px] max-w-[320px] px-5 pt-5 flex flex-col bg-secundary_color drop-shadow-lg gap-5 overflow-y-scroll pb-4">
          <DatePicker
            onEndSelected={setEndSelected}
            onStartSelected={setStartSelected}
          />
          <FormProvider {...callsFormProvider}>
            <Input.Root
              id="overflow"
              patternColor="background_color"
              initialVisibility={false}
            >
              <Input.Icon
                icon={
                  <MagnifyingGlass size={20} className="text-primary_color" />
                }
              />
              <Input.Text placeholder="Search" />
              <Input.Action />
            </Input.Root>
          </FormProvider>
          <SelectorCallType
            type={directionSelected}
            changeType={setDirectionSelected}
          />
          <SelectorCallResult
            result={resultSelected}
            setResult={setResultSelected}
          />
        </form>
      </div>
      <button
        className={`absolute xl:hidden p-4 drop-shadow-3xl rounded-full bottom-20 md:bottom-3 bg-white z-50 ${
          searchLayoutStatus ? 'right-[330px]' : 'right-2'
        }  `}
      >
        <MagnifyingGlass
          size={20}
          className="text-primary_color"
          onClick={() => {
            setSearchLayoutStatus(!searchLayoutStatus)
          }}
        />
      </button>
    </div>
  )
}

export default Calls
