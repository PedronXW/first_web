import { zodResolver } from '@hookform/resolvers/zod'
import { Lock } from '@phosphor-icons/react'
import axios from 'axios'
import { enqueueSnackbar } from 'notistack'
import { FormProvider, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import { Input } from '../components/Input'
import Drawer from '../components/Lists/Drawer/Drawer'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import useResponseTranslation from '../hooks/useResponseTranslation'
import { api } from '../lib/axios'

const createUserFormSchema = z
  .object({
    password: z
      .string()
      .nonempty('A senha é obrigatória')
      .min(6, 'A sua senha antiga tem, no mínimo, 6 caracteres'),
    newPassword: z
      .string()
      .nonempty('A nova senha é obrigatória')
      .min(6, 'A nova senha precisa ter, no mínimo, 6 caracteres'),
    confirmPassword: z
      .string()
      .nonempty('A confirmação de nova senha é obrigatória'),
  })
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: 'custom',
        message: 'Sua senha e a confirmação de senha não são iguais',
      })
    }
  })

export type ChangePassUserFormType = z.infer<typeof createUserFormSchema>

const ChangePassword = () => {
  const { traslateSuccess, translateError } = useResponseTranslation()
  const { value } = usePersistanceStore()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async (credentials: any) => {
      const response = await axios.post('http://10.1.1.24:3000/auth/login', {
        username: credentials.email,
        password: credentials.password,
      })
      return response.data
    },
    onSuccess: () => {
      navigate('/')
    },
    onError: (error: any) => {
      console.log(error)
    },
  })

  const HandleLogin = (credentials: any) => {
    mutation.mutate(credentials)
  }

  const changePasswordForm = useForm<ChangePassUserFormType>({
    resolver: zodResolver(createUserFormSchema),
  })

  async function handleChangePassword(data: ChangePassUserFormType) {
    api
      .patch(
        'persons/alter-pass',
        {
          password: data.newPassword,
          old_password: data.password,
        },
        { headers: { Authorization: `Bearer ${value.token}` } },
      )
      .then((response) => {
        enqueueSnackbar(traslateSuccess(response.status), {
          variant: 'success',
        })
      })
      .catch((error) => {
        enqueueSnackbar(translateError(error.response.status), {
          variant: 'error',
        })
      })
  }

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
    clearErrors,
  } = changePasswordForm

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
      <Drawer selected={4} />
      <div className="w-full flex flex-col h-full gap-2">
        <HeaderMobile />
        <div
          title="Dashboard"
          className="w-full flex flex-col grow-1 justify-between overflow-hidden md:shadow-inner gap-3"
        >
          <Header title="Alteração de Senha" />
          <form
            onSubmit={handleSubmit(handleChangePassword)}
            onChange={() => {
              clearErrors()
            }}
            autoComplete="off"
            className="h-screen md:max-w-[380px] md:mx-11 mx-8"
          >
            <FormProvider {...changePasswordForm}>
              <strong className="text-sm h-min text-primary_color font-normal mb-8 flex">
                Para alterar sua senha, por favor, preencha os campos abaixo.
              </strong>
              <Input.Root id="password" patternColor="secundary_color">
                <Input.Icon icon={<Lock color="gray" size={20} />} />
                <Input.Text placeholder="Password" />
                <Input.ActionPassword />
              </Input.Root>
              {errors.password ? (
                <span className="h-10 text-xs text-red-500 pl-2 pt-2 flex">
                  {errors!.password!.message?.toString()}
                </span>
              ) : (
                <div className="h-10 flex"> </div>
              )}
              <Input.Root id="newPassword" patternColor="secundary_color">
                <Input.Icon icon={<Lock color="gray" size={20} />} />
                <Input.Text placeholder="New Password" />
                <Input.ActionPassword />
              </Input.Root>
              {errors.newPassword ? (
                <span className="h-10 text-xs text-red-500 pl-2 pt-2 flex">
                  {errors!.newPassword!.message?.toString()}
                </span>
              ) : (
                <div className="h-10 flex"> </div>
              )}
              <Input.Root id="confirmPassword" patternColor="secundary_color">
                <Input.Icon icon={<Lock color="gray" size={20} />} />
                <Input.Text placeholder="Confirm Password" />
                <Input.ActionPassword />
              </Input.Root>
              {errors.confirmPassword ? (
                <span className="h-10 text-xs text-red-500 pl-2 pt-2 flex">
                  {errors!.confirmPassword!.message?.toString()}
                </span>
              ) : (
                <div className="h-10 flex"> </div>
              )}
              <button
                type="submit"
                className="w-full p-2 cursor-pointer flex items-center bg-primary_color border-primary_color rounded-md text-secundary_color justify-center drop-shadow-md"
              >
                Login
              </button>
            </FormProvider>
          </form>
        </div>
        <BottomNavigationMenu selected={4} />
      </div>
    </div>
  )
}

export default ChangePassword
