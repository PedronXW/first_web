import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useContext, useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import DatePicker from '../components/DatePicker/DatePicker'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import { Input } from '../components/Input'
import Drawer from '../components/Lists/Drawer/Drawer'
import LogsList from '../components/Lists/LogsList/LogsList'
import { LogsContext } from '../contexts/LogsContext'

const searchLogFormSchema = z.object({
  text: z.string(),
})

export type SearchLogFormData = z.infer<typeof searchLogFormSchema>

const Logs = () => {
  const { fetchLogs, logs } = useContext(LogsContext)

  const [searchingValue, setSearchingValue] = useState<string>('')
  const [startSelected, setStartSelected] = useState<Date | null>(null)
  const [endSelected, setEndSelected] = useState<Date | null>(null)
  const [skip, setSkip] = useState<number>(0)

  const ref = useRef(null)

  const searchForm = useForm<SearchLogFormData>({
    resolver: zodResolver(searchLogFormSchema),
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setSkip((currentValue) => currentValue + 1)
      }
    })
    observer.observe(ref.current!)
  }, [])

  useEffect(() => {
    fetchLogs(
      skip,
      searchingValue,
      startSelected || undefined,
      endSelected || undefined,
    )
  }, [startSelected, endSelected, searchingValue, skip])

  const [searchLayoutStatus, setSearchLayoutStatus] = useState<boolean>(false)

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color overflow-hidden">
      <Drawer selected={3} />
      <div className="h-full w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
        <HeaderMobile />
        <div className="grow-1 h-full w-full flex flex-col overflow-y-scroll gap-2 pb-4">
          <Header title="Logs" />
          <LogsList />
          <div ref={ref}>Loading...</div>
        </div>
        <BottomNavigationMenu selected={3} />
      </div>
      <div
        className={`h-full w-screen z-40 xl:w-min absolute xl:relative ${
          searchLayoutStatus ? 'flex' : 'hidden xl:flex'
        }`}
      >
        <div className="h-full flex grow-1 w-full bg-black opacity-30" />
        <div className="h-full min-w-[320px] max-w-[320px] px-5 pt-5 flex flex-col bg-secundary_color drop-shadow-lg gap-5 overflow-y-scroll pb-4">
          <DatePicker
            onEndSelected={setEndSelected}
            onStartSelected={setStartSelected}
          />
          <FormProvider {...searchForm}>
            <Input.Root
              id="overflow"
              getValue={setSearchingValue}
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
        </div>
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

export default Logs
