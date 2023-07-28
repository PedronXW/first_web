import { zodResolver } from '@hookform/resolvers/zod'
import { Person as PersonIcon, Phone } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useContext, useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Person, PersonsContext } from '../../../contexts/PersonsContext'
import { Input } from '../../Input'
import PersonCallList from '../PersonCallList/PersonCallList'

const createPersonFormSchema = z.object({
  name: z.string().min(0),
  ramal_active: z.enum(['true', 'false']),
  ramal: z.string().min(0),
  is_active: z.enum(['true', 'false']),
})

export type NewPersonType = z.infer<typeof createPersonFormSchema>

interface PersonCellInterface {
  person: Person
}

const PersonCardCell = ({ person }: PersonCellInterface) => {
  const [open, setOpen] = useState(false)

  const {
    persons,
    deleteRamal,
    updateRamal,
    desactivePerson,
    editPerson,
    addPerson,
    createRamal,
  } = useContext(PersonsContext)

  const editPersonForm = useForm<NewPersonType>({
    resolver: zodResolver(createPersonFormSchema),
    defaultValues: {
      ramal_active: person.Voip_Account !== null ? 'true' : 'false',
      is_active: person.is_active ? 'true' : 'false',
      name: person.name,
      ramal: person.Voip_Account ? String(person.Voip_Account.exten) : '',
    },
  })

  const [haveRamal, setHaveRamal] = useState<boolean>(!!person.Voip_Account)

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    clearErrors,
  } = editPersonForm

  function handleEditPerson(personChanges: NewPersonType) {
    if (personChanges.is_active === 'false' && person.is_active) {
      desactivePerson({ id: person.id })
    }
    if (personChanges.is_active === 'true' && !person.is_active) {
      addPerson({
        name: person.name,
        email: person.email,
      })
    }
    if (personChanges.ramal_active === 'false' && person.Voip_Account) {
      deleteRamal({ id: person.id })
    }
    if (personChanges.ramal_active === 'true' && !person.Voip_Account) {
      createRamal({
        id: person.id,
        ramal: parseInt(personChanges.ramal),
      })
    }
    if (
      personChanges.ramal !== '' &&
      personChanges.ramal_active === 'true' &&
      person.Voip_Account &&
      personChanges.ramal !== String(person.Voip_Account?.exten)
    ) {
      updateRamal({
        id: person.id,
        ramal: parseInt(personChanges.ramal),
      })
    }
    if (personChanges.name !== '' && personChanges.name !== person.name) {
      editPerson({
        id: person.id,
        name: String(personChanges.name),
      })
    }
  }

  return (
    <div
      className={`min-h-[260px] max-h-[260px] overflow-hidden flex rounded-b-lg flex-col w-full justify-end drop-shadow-md items-end`}
    >
      <figure className="min-h-[54px] min-w-[54px] bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center">
        <PersonIcon
          size={20}
          className={`${person.is_active ? 'text-green-500' : 'text-red-500'}`}
        />
      </figure>
      <div
        onClick={() => {
          setOpen(true)
        }}
        className="min-h-[206px] w-full rounded-lg self-end drop-shadow-3xl align-bottom -mt-5 cursor-pointer"
      >
        <div className="min-h-[90px] max-h-[90px] w-full bg-primary_color rounded-t-md  pl-5 pr-5 flex justify-between items-center ">
          <div className="h-full flex flex-col justify-center items-start">
            <strong className="text-secundary_color font-medium h-full w-1/2 whitespace-nowrap overflow-ellipsis">
              {person.name}
            </strong>
            <span className="text-background_color font-thin text-xs">
              {person.email}
            </span>
          </div>
          <strong className="text-secundary_color font-medium h-full flex justify-end items-center w-1/2">
            {person.Voip_Account
              ? 'Ramal: ' + person.Voip_Account.exten
              : 'Ramal Desativado'}
          </strong>
        </div>
        <div className="h-[142px] drop-shadow-3xl overflow-y-scroll w-full bg-secundary_color rounded-b-lg flex">
          <PersonCallList person="" />
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed flex justify-center items-center w-screen h-screen inset-0 bg-black/75 z-50">
            <Dialog.Content className="min-w-[25rem] max-w-[20rem] h-min drop-shadow-3xl rounded-md bg-white fixed flex flex-col justify-center p-8 gap-4">
              <Dialog.Title className="font-bold text-xl">
                Dados da fila
              </Dialog.Title>
              <form
                onSubmit={handleSubmit(handleEditPerson)}
                className="h-min w-80 bg-secundary_color rounded-lg flex flex-col gap-4"
              >
                <FormProvider {...editPersonForm}>
                  <h2 className="text-primary_color font-medium text-base">
                    Editar informações do usuário
                  </h2>
                  <Input.Root
                    id="name"
                    patternColor="background_color"
                    initialVisibility={false}
                  >
                    <Input.Icon icon={<PersonIcon color="gray" size={20} />} />
                    <Input.Text placeholder="Name" />
                    <Input.Action />
                  </Input.Root>
                  <h2 className="text-primary_color font-medium text-base">
                    Status
                  </h2>
                  <Controller
                    control={control}
                    name="is_active"
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
                          onValueChange={() => {
                            field.onChange(
                              field.value === 'true' ? 'false' : 'true',
                            )
                            setHaveRamal(field.value === 'false')
                          }}
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

                  {haveRamal && (
                    <Input.Root
                      id="ramal"
                      patternColor="background_color"
                      initialVisibility={false}
                    >
                      <Input.Icon icon={<Phone color="gray" size={20} />} />
                      <Input.Text placeholder="Ramal" />
                      <Input.Action />
                    </Input.Root>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 w-full rounded-md bg-primary_color text-secundary_color font-medium"
                  >
                    Editar
                  </button>
                </FormProvider>
              </form>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default PersonCardCell
