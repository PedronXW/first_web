import { zodResolver } from '@hookform/resolvers/zod'
import {
  IdentificationBadge,
  Pen,
  Person,
  UserList,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { enqueueSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import { Input } from '../components/Input'
import Drawer from '../components/Lists/Drawer/Drawer'
import PersonInfoCard from '../components/PersonInfoCard/PersonInfoCard'
import { usePersistanceStore } from '../hooks/usePersistanceStore'
import useResponseTranslation from '../hooks/useResponseTranslation'
import { api } from '../lib/axios'

const systemSettingsFormSchema = z.object({
  exten: z
    .number()
    .min(0, 'A extensão tem que ser maior que 0')
    .max(999, 'A extensão tem que ser menor ou igual à 999'),
  queues: z
    .number()
    .min(0, 'A quantidade de filas tem que ser maior que 0')
    .max(99, 'A quantidade de filas tem que ser menor ou igual à 999'),
})

export type SystemSettingsType = z.infer<typeof systemSettingsFormSchema>

const SystemSettings = () => {
  const [open, setOpen] = useState(false)
  const { value } = usePersistanceStore()
  const { traslateSuccess, translateError } = useResponseTranslation()

  const systemSettingsForm = useForm<SystemSettingsType>({
    resolver: zodResolver(systemSettingsFormSchema),
  })

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = systemSettingsForm

  useEffect(() => {
    if (errors.exten) {
      enqueueSnackbar(errors.exten.message, {
        variant: 'error',
      })
    }
    if (errors.queues) {
      enqueueSnackbar(errors.queues.message, {
        variant: 'error',
      })
    }
  }, [errors])

  function handleChangeSystemSettings(systemSettings: SystemSettingsType) {
    api
      .patch(
        '/config',
        { exten: systemSettings.exten, queues: systemSettings.queues },
        {
          headers: { Authorization: `Bearer ${value.token}` },
        },
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

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
      <Drawer selected={4} />
      <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
        <HeaderMobile />
        <div className="grow-1 w-full h-full flex flex-col overflow-y-scroll">
          <Header title="Configuração de Sistema" />
          <div className="min-w-[320px] max-w-[320px] h-full flex flex-col gap-4 ml-12">
            <h2 className="text-primary_color font-medium text-xl">
              Informações
            </h2>
            <PersonInfoCard
              data="Pedro de Almeida csdcdsacsa cascassadcasdcsa csdcas csadcdascsad xcsadcdsac csdacasd"
              name="Nome"
              icon={<Person size={20} className="text-secundary_color" />}
            />
            <PersonInfoCard
              data="Pedro de Almeida csdcdsacsa cas"
              name="Nome"
              icon={<Person size={20} className="text-secundary_color" />}
            />
          </div>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button className="fixed bottom-4 right-4 h-16 w-16 rounded-full bg-secundary_color drop-shadow-3xl flex justify-center items-center">
                <Pen size={24} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed flex justify-center items-center w-screen h-screen inset-0 bg-black/75 z-50">
                <Dialog.Content className="min-w-[25rem] max-w-[20rem] h-min drop-shadow-3xl rounded-md bg-white fixed flex flex-col justify-center p-8 gap-4">
                  <Dialog.Title className="font-bold text-xl">
                    Alterar configurações do sistema
                  </Dialog.Title>
                  <form
                    onSubmit={handleSubmit(handleChangeSystemSettings)}
                    className="h-min w-80 bg-secundary_color rounded-lg flex flex-col gap-4"
                  >
                    <FormProvider {...systemSettingsForm}>
                      <Input.RootNumber
                        id="exten"
                        patternColor="background_color"
                        initialVisibility={false}
                      >
                        <Input.Icon
                          icon={
                            <IdentificationBadge
                              size={20}
                              className="text-primary_color"
                            />
                          }
                        />
                        <Input.Number placeholder="Extensão" />
                      </Input.RootNumber>
                      <Input.RootNumber
                        id="queues"
                        patternColor="background_color"
                        initialVisibility={false}
                      >
                        <Input.Icon
                          icon={
                            <UserList
                              size={20}
                              className="text-primary_color"
                            />
                          }
                        />
                        <Input.Number placeholder="Quantidade de Filas" />
                      </Input.RootNumber>
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

export default SystemSettings
