import { zodResolver } from '@hookform/resolvers/zod'
import { Phone, User as UserIcon } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useContext, useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { User, UsersContext } from '../../../contexts/UsersContext'
import { Input } from '../../Input'
import UserCallList from '../UserCallList/UserCallList'

const createUserFormSchema = z.object({
  name: z.string().min(0),
  ramal_active: z.enum(['true', 'false']),
  ramal: z.string().min(0),
  is_active: z.enum(['true', 'false']),
})

export type NewUserType = z.infer<typeof createUserFormSchema>

interface UserCellInterface {
  user: User
}

const UserCell = ({ user }: UserCellInterface) => {
  const [open, setOpen] = useState(false)

  const {
    users,
    deleteRamal,
    updateRamal,
    desactivePerson,
    editUser,
    addUser,
    createRamal,
  } = useContext(UsersContext)

  const editUserForm = useForm<NewUserType>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      ramal_active: user.Voip_Account !== null ? 'true' : 'false',
      is_active: user.is_active ? 'true' : 'false',
      name: user.name,
      ramal: user.Voip_Account ? String(user.Voip_Account.exten) : '',
    },
  })

  const [haveRamal, setHaveRamal] = useState<boolean>(!!user.Voip_Account)

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    clearErrors,
  } = editUserForm

  function handleEditUser(userChanges: NewUserType) {
    if (userChanges.is_active === 'false' && user.is_active) {
      desactivePerson({ id: user.id })
    }
    if (userChanges.is_active === 'true' && !user.is_active) {
      addUser({
        name: user.name,
        email: user.email,
      })
    }
    if (userChanges.ramal_active === 'false' && user.Voip_Account) {
      deleteRamal({ id: user.id })
    }
    if (userChanges.ramal_active === 'true' && !user.Voip_Account) {
      createRamal({
        id: user.id,
        ramal: parseInt(userChanges.ramal),
      })
    }
    if (
      userChanges.ramal !== '' &&
      userChanges.ramal_active === 'true' &&
      user.Voip_Account &&
      userChanges.ramal !== String(user.Voip_Account?.exten)
    ) {
      updateRamal({
        id: user.id,
        ramal: parseInt(userChanges.ramal),
      })
    }
    if (userChanges.name !== '' && userChanges.name !== user.name) {
      editUser({
        id: user.id,
        name: String(userChanges.name),
      })
    }
  }

  return (
    <div
      className={`min-h-[260px] max-h-[260px] lg:max-w-[400px] overflow-hidden flex rounded-b-lg flex-col w-full justify-end drop-shadow-md items-end`}
    >
      <figure className="min-h-[54px] min-w-[54px] bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center">
        <UserIcon
          size={20}
          className={`${user.is_active ? 'text-green-500' : 'text-red-500'}`}
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
              {user.name}
            </strong>
            <span className="text-background_color font-thin text-xs">
              {user.email}
            </span>
          </div>
          <strong className="text-secundary_color font-medium h-full flex justify-end items-center w-1/2">
            {user.Voip_Account
              ? 'Ramal: ' + user.Voip_Account.exten
              : 'Ramal Desativado'}
          </strong>
        </div>
        <div className="h-[142px] drop-shadow-3xl overflow-y-scroll w-full bg-secundary_color rounded-b-lg flex">
          <UserCallList user="" />
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
                onSubmit={handleSubmit(handleEditUser)}
                className="h-min w-80 bg-secundary_color rounded-lg flex flex-col gap-4"
              >
                <FormProvider {...editUserForm}>
                  <h2 className="text-primary_color font-medium text-base">
                    Editar informações do usuário
                  </h2>
                  <Input.Root
                    id="name"
                    patternColor="background_color"
                    initialVisibility={false}
                  >
                    <Input.Icon icon={<UserIcon color="gray" size={20} />} />
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

export default UserCell
