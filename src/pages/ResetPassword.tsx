import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Envelope } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import icon from '../assets/icon.png'
import { Input } from '../components/Input'

const ResetPassword = () => {
  const [email, setEmail] = useState('')

  function log(data: any) {
    console.log(data)
  }

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

  const resetPassForm = useForm({
    resolver: zodResolver(createUserFormSchema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = resetPassForm

  return (
    <div className="h-full w-full flex flex-col justify-evenly">
      <figcaption className="h-20 w-full flex justify-center items-center">
        <img
          className="h-20 w-20 -ml-5"
          alt="Logo do produto IPorter"
          src={icon}
        />
        <figcaption className="text-4xl text-primary_color font-bold">
          IPorter
        </figcaption>
      </figcaption>
      <form
        onSubmit={handleSubmit(log)}
        autoComplete="off"
        className="flex flex-col gap-2"
      >
        <FormProvider {...resetPassForm}>
          <Input.Root id="resetpassword" patternColor="secundary_color">
            <Input.Icon
              icon={
                <Envelope
                  aria-label="Icone de um envelope."
                  color="gray"
                  size={20}
                />
              }
            />
            <Input.Text placeholder="Email" />
            <Input.Action />
          </Input.Root>
        </FormProvider>
        {errors.email ? (
          <span
            aria-label={
              'O campo email possui uma inconsistencia, por favor, verifique: ' +
              errors!.email!.message?.toString()
            }
            className="h-5 text-xs text-red-500 pl-2"
          >
            {errors!.email!.message?.toString()}
          </span>
        ) : (
          <div className="h-5"> </div>
        )}
        <button
          aria-label="Enviar email com formulário para troca de senha."
          type="submit"
          className="w-full p-2 cursor-pointer flex items-center bg-primary_color border-primary_color rounded-md text-secundary_color justify-center"
        >
          Send Email
        </button>
      </form>
      <Link
        className="h-8 w-auto p-2 flex cursor-pointer text-xs self-center"
        to={'/login'}
      >
        Log In
      </Link>
    </div>
  )
}

export default ResetPassword
