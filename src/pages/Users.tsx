import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope, Phone, User } from '@phosphor-icons/react'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import FloatingButton from '../components/FloatingButton/FloatingButton'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import { Input } from '../components/Input'
import Drawer from '../components/Lists/Drawer/Drawer'
import UsersList from '../components/Lists/UsersList/UsersList'

const Users = () => {
  const createUserFormSchema = z.object({
    email: z
      .string()
      .nonempty('O email é obrigatório')
      .email('Formato de e-mail invalido'),
    password: z
      .string()
      .nonempty('A senha é obrigatório')
      .min(6, 'A senha precisa ter, no mínimo 6 caracteres'),
  })

  const loginForm = useForm({ resolver: zodResolver(createUserFormSchema) })

  const [haveRamal, setHaveRamal] = useState<boolean>(true)

  const {
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = loginForm

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
      <Drawer selected={4} />
      <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
        <HeaderMobile />
        <div className="grow-1 w-full h-full flex flex-col overflow-y-scroll pb-4">
          <Header title="Usuários" />
          <UsersList />
          <FloatingButton isAcceptable type="add">
            <form className="h-min w-80 bg-secundary_color rounded-lg flex p-5 flex-col gap-5">
              <FormProvider {...loginForm}>
                <h2 className="text-primary_color font-medium text-base">
                  Dados do Usuário
                </h2>
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
                  <Input.Icon icon={<Envelope color="gray" size={20} />} />
                  <Input.Text placeholder="Email" />
                  <Input.Action />
                </Input.Root>
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
              </FormProvider>
            </form>
          </FloatingButton>
        </div>
        <BottomNavigationMenu selected={4} />
      </div>
    </div>
  )
}

export default Users
