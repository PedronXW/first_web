import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowULeftDown,
  IdentificationBadge,
  Phone,
  Plus,
  UserList,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import BottomNavigationMenu from '../components/BottomNavigationMenu/BottomNavigationMenu'
import Header from '../components/Header/Header'
import HeaderMobile from '../components/Header/HeaderMobile'
import { Input } from '../components/Input'
import Drawer from '../components/Lists/Drawer/Drawer'
import QueuesList from '../components/Lists/QueuesList/QueuesList'
import { QueuesContext } from '../contexts/QueuesContext'

const newQueueFormSchema = z.object({
  id: z.string(),
  name: z.string().nonempty('O nome é obrigatório'),
  digit: z.string(),
  overflow: z.string(),
})

export type NewQueueType = z.infer<typeof newQueueFormSchema>

const Queues = () => {
  const [open, setOpen] = useState(false)

  const { addQueue } = useContext(QueuesContext)

  const QueueForm = useForm<NewQueueType>({
    resolver: zodResolver(newQueueFormSchema),
  })

  const {
    formState: { isSubmitting, errors },
    handleSubmit,
  } = QueueForm

  function handleCreateNewQueue(data: NewQueueType) {
    addQueue({
      digit: parseInt(data.digit),
      id: parseInt(data.id),
      name: String(data.name),
      overflow: parseInt(data.overflow),
    })
    setOpen(false)
  }

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
      <Drawer selected={1} />
      <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
        <HeaderMobile />
        <div className="grow-1 h-full w-full flex flex-col overflow-y-scroll">
          <Header title="Filas" />
          <QueuesList />

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
                    onSubmit={handleSubmit(handleCreateNewQueue)}
                    className="flex flex-col gap-4"
                  >
                    <FormProvider {...QueueForm}>
                      <Input.Root
                        id="id"
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
                        <Input.Text placeholder="Id" />
                        <Input.Action />
                      </Input.Root>
                      <Input.Root
                        id="name"
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
                        <Input.Text placeholder="Name" />
                        <Input.Action />
                      </Input.Root>
                      <Input.Root
                        id="digit"
                        patternColor="background_color"
                        initialVisibility={false}
                      >
                        <Input.Icon
                          icon={
                            <Phone size={20} className="text-primary_color" />
                          }
                        />
                        <Input.Text placeholder="Dígito Identificador" />
                        <Input.Action />
                      </Input.Root>
                      <Input.Root
                        id="overflow"
                        patternColor="background_color"
                        initialVisibility={false}
                      >
                        <Input.Icon
                          icon={
                            <ArrowULeftDown
                              size={20}
                              className="text-primary_color"
                            />
                          }
                        />
                        <Input.Text placeholder="Próximo destino quando desativada" />
                        <Input.Action />
                      </Input.Root>
                    </FormProvider>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 w-full rounded-md bg-primary_color text-secundary_color font-medium"
                    >
                      Criar
                    </button>
                  </form>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <BottomNavigationMenu selected={1} />
      </div>
    </div>
  )
}

export default Queues
