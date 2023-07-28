import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope, Phone, Plus, User } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useContext, useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import { Input } from '../components/Input'
import Drawer from '../components/Lists/Drawer/Drawer'
import PersonList from '../components/Lists/PersonCardList/PersonCardList'
import { PersonsContext } from '../contexts/PersonsContext'

const createPersonFormSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório'),
  email: z.string().email('Email inválido'),
  ramal: z.string(),
  ramal_active: z.enum(['true', 'false']),
})

export type NewPersonType = z.infer<typeof createPersonFormSchema>

const Person = () => {
  const { addPerson } = useContext(PersonsContext)

  const loginForm = useForm<NewPersonType>({
    resolver: zodResolver(createPersonFormSchema),
    defaultValues: {
      ramal_active: 'true',
    },
  })

  const [open, setOpen] = useState(false)

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
    control,
  } = loginForm

  function handleCreateNewPerson(person: NewPersonType) {
    addPerson({
      name: String(person.name),
      email: String(person.email),
      ramal: parseInt(person.ramal),
      ramal_active: person.ramal_active === 'true',
    })
    reset()
    setOpen(false)
  }

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
      <Drawer selected={4} />
      <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
        <HeaderMobile />
        <div className="grow-1 w-full h-full flex flex-col overflow-y-scroll pb-4">
          <Header title="Usuários" />
          <PersonList />

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="fixed bottom-4 right-4 h-16 w-16 rounded-full bg-secundary_color drop-shadow-3xl flex justify-center items-center">
                <Plus size={24} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed flex justify-center items-center w-screen h-screen inset-0 bg-black/75 z-50">
                <Dialog.Content className="min-w-[25rem] max-w-[20rem] h-min drop-shadow-3xl rounded-md bg-white fixed flex flex-col justify-center p-8 gap-4">
                  <Dialog.Title className="font-bold text-xl">
                    Dados da fila
                  </Dialog.Title>
                  <form
                    onSubmit={handleSubmit(handleCreateNewPerson)}
                    className="h-min w-80 bg-secundary_color rounded-lg flex flex-col gap-4"
                  >
                    <FormProvider {...loginForm}>
                      <Input.Root
                        id="name"
                        patternColor="background_color"
                        initialVisibility={false}
                      >
                        <Input.Icon icon={<User color="gray" size={20} />} />
                        <Input.Text placeholder="Name" />
                        <Input.Action />
                      </Input.Root>
                      <Input.Root
                        id="email"
                        patternColor="background_color"
                        initialVisibility={false}
                      >
                        <Input.Icon
                          icon={<Envelope color="gray" size={20} />}
                        />
                        <Input.Text placeholder="Email" />
                        <Input.Action />
                      </Input.Root>
                      <h2 className="text-primary_color font-medium text-base">
                        Ramal
                      </h2>
                      <Controller
                        control={control}
                        name="ramal_active"
                        render={({ field }) => {
                          return (
                            <RadioGroup.Root
                              className="flex w-full h-min"
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <RadioGroup.Item
                                value="true"
                                className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2  ${
                                  field.value === 'true'
                                    ? 'border-green-500 text-green-500'
                                    : 'border-gray-400 text-gray-400'
                                } rounded-l-lg drop-shadow-3xl`}
                              >
                                Ativado
                              </RadioGroup.Item>
                              <RadioGroup.Item
                                value="false"
                                className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 border-gray-400 ${
                                  field.value === 'false'
                                    ? 'border-red-700 text-red-700'
                                    : 'border-gray-400 text-gray-400'
                                } rounded-r-lg drop-shadow-3xl`}
                              >
                                Desativado
                              </RadioGroup.Item>
                            </RadioGroup.Root>
                          )
                        }}
                      />
                      <Input.Root
                        id="ramal"
                        patternColor="background_color"
                        initialVisibility={false}
                      >
                        <Input.Icon icon={<Phone color="gray" size={20} />} />
                        <Input.Text placeholder="Ramal" />
                        <Input.Action />
                      </Input.Root>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="h-12 w-full rounded-md bg-primary_color text-secundary_color font-medium"
                      >
                        Criar
                      </button>
                    </FormProvider>
                  </form>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <BottomNavigationMenu selected={4} />
      </div>
    </div>
  )
}

export default Person
