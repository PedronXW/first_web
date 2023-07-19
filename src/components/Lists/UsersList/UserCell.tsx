import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope, Phone, User as UserIcon } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { User, UsersContext } from '../../../contexts/UsersContext'
import { Input } from '../../Input'
import UserCallList from '../UserCallList/UserCallList'

const createUserFormSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório'),
  email: z.string().email('Email inválido'),
  ramal: z.string(),
})

export type NewUserType = z.infer<typeof createUserFormSchema>

interface UserCellInterface {
  user: User
}

const UserCell = ({ user }: UserCellInterface) => {
  const navigate = useNavigate()

  const { users, selectedUser, setSelectedUser } = useContext(UsersContext)

  const [open, setOpen] = useState(false)

  const { addUser } = useContext(UsersContext)

  const editUserForm = useForm<NewUserType>({
    resolver: zodResolver(createUserFormSchema),
  })

  const [userStatus, setUserStatus] = useState<boolean>(true)

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    clearErrors,
  } = editUserForm

  const [haveRamal, setHaveRamal] = useState<boolean>(true)

  function handleCreateNewUser(user: NewUserType) {
    console.log(user)
  }

  return (
    <div
      className={`min-h-[260px] max-h-[260px] overflow-hidden flex rounded-b-lg flex-col w-full justify-end drop-shadow-md items-end`}
    >
      <figure className="min-h-[54px] min-w-[54px] bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center">
        <UserIcon size={20} className="text-white" />
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
                onSubmit={handleSubmit(handleCreateNewUser)}
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
                  <Input.Root
                    id="email"
                    patternColor="background_color"
                    initialVisibility={false}
                  >
                    <Input.Icon icon={<Envelope color="gray" size={20} />} />
                    <Input.Text placeholder="Email" />
                    <Input.Action />
                  </Input.Root>
                  <h2 className="text-primary_color font-medium text-base">
                    Status
                  </h2>
                  <div className="flex w-full h-min">
                    <button
                      type="button"
                      onClick={() => {
                        setUserStatus(!userStatus)
                      }}
                      className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
                        userStatus ? 'border-green-500' : 'border-gray-400'
                      } rounded-l-lg drop-shadow-3xl`}
                    >
                      <p
                        className={`${
                          userStatus ? 'text-green-500' : 'text-gray-400'
                        }`}
                      >
                        Ativado
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setUserStatus(!userStatus)
                      }}
                      className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
                        !userStatus ? 'border-red-700' : 'border-gray-400'
                      } rounded-r-lg drop-shadow-3xl`}
                    >
                      <p
                        className={`${
                          !userStatus ? 'text-red-700' : 'text-gray-400'
                        }`}
                      >
                        Desativado
                      </p>
                    </button>
                  </div>
                  <h2 className="text-primary_color font-medium text-base">
                    Ramal
                  </h2>
                  <div className="flex w-full h-min">
                    <button
                      type="button"
                      onClick={() => {
                        setHaveRamal(!haveRamal)
                      }}
                      className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
                        haveRamal ? 'border-green-500' : 'border-gray-400'
                      } rounded-l-lg drop-shadow-3xl`}
                    >
                      <p
                        className={`${
                          haveRamal ? 'text-green-500' : 'text-gray-400'
                        }`}
                      >
                        Ativado
                      </p>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setHaveRamal(!haveRamal)
                      }}
                      className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${
                        !haveRamal ? 'border-red-700' : 'border-gray-400'
                      } rounded-r-lg drop-shadow-3xl`}
                    >
                      <p
                        className={`${
                          !haveRamal ? 'text-red-700' : 'text-gray-400'
                        }`}
                      >
                        Desativado
                      </p>
                    </button>
                  </div>
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
