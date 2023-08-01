import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowULeftDown,
  Person as PersonIcon,
  Phone,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useContext, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Voip } from '../../../contexts/DashboardContext'
import { Queue, QueuesContext } from '../../../contexts/QueuesContext'
import { usePersistanceStore } from '../../../hooks/usePersistanceStore'
import { api } from '../../../lib/axios'
import { Input } from '../../Input'
import PersonCell from '../PersonList/PersonCell'
import PersonCellSelectable from '../PersonList/PersonCellSelectable'

export type PossibleRamal = {
  voip: Voip
  added: boolean
}

const editQueueFormSchema = z.object({
  name: z.string().min(0),
  digit: z.number().min(0).max(99),
  overflow: z.number().min(0).max(9999),
})

export type EditQueueType = z.infer<typeof editQueueFormSchema>

interface QueueCellInterface {
  queue: Queue
}

const QueueCell = ({ queue }: QueueCellInterface) => {
  const [open, setOpen] = useState(false)

  const { value } = usePersistanceStore()

  const [persons, setPersons] = useState<Array<PossibleRamal>>([])

  const { editQueue, editMembers } = useContext(QueuesContext)

  async function getPersons() {
    const response = await api.get('panel', {
      headers: { Authorization: `Bearer ${value.token}` },
    })
    setPersons((state) => {
      return response.data.map((person: any) => {
        return {
          ...person,
          added: !!queue.Voip_Account.find(
            (voip: any) => voip.exten === person.voip,
          ),
        }
      })
    })
  }

  useEffect(() => {
    getPersons()
  }, [])

  const editPersonForm = useForm<EditQueueType>({
    resolver: zodResolver(editQueueFormSchema),
    defaultValues: {
      name: queue.name,
      digit: queue.digit,
      overflow: queue.overflow,
    },
  })

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    clearErrors,
  } = editPersonForm

  function handleEditQueue(queueChanges: EditQueueType) {
    editQueue({
      id: queue.id,
      name: queueChanges.name,
      digit: queueChanges.digit,
      overflow: queueChanges.overflow,
      members: persons
        .filter((person) => person.added)
        .map((person) => person.voip.voip),
    })
    setOpen(false)
  }

  function handleChangePersonStatus(personExten: number) {
    setPersons((state) => {
      return state.map((person) => {
        if (person.voip.voip === personExten) {
          person.added = !person.added
        }
        return person
      })
    })
  }

  return (
    <div
      className={`min-h-[260px] max-h-[260px] overflow-hidden flex rounded-b-lg flex-col w-full justify-end drop-shadow-md items-end`}
    >
      <figure className="min-h-[54px] min-w-[54px] bg-primary_color relative z-10 right-4 border-[8px] border-background_color rounded-full flex justify-center items-center"></figure>
      <div
        onClick={() => {
          setOpen(true)
        }}
        className="min-h-[206px] w-full rounded-lg self-end drop-shadow-3xl align-bottom -mt-5 cursor-pointer"
      >
        <div className="min-h-[90px] max-h-[90px] w-full bg-primary_color rounded-t-md  pl-5 pr-5 flex justify-between items-center ">
          <div className="h-full flex flex-col justify-center items-start">
            <strong className="text-secundary_color font-medium h-full w-1/2 whitespace-nowrap overflow-ellipsis">
              {queue.name}
            </strong>
            <span className="text-background_color font-thin text-xs">
              {queue.id}
            </span>
          </div>
          <strong className="text-secundary_color font-medium h-full flex justify-end items-center w-1/2">
            {queue.digit ? 'Ramal: ' + queue.digit : 'Ramal Desativado'}
          </strong>
        </div>
        <div className="h-[142px] drop-shadow-3xl overflow-y-scroll w-full bg-secundary_color rounded-b-lg flex flex-col">
          {queue.Voip_Account.length > 0 ? (
            queue.Voip_Account.map((queue: any) => (
              <PersonCell key={queue.exten} person={queue} type="white" />
            ))
          ) : (
            <div className="h-full w-full flex justify-center items-center text-primary_color font-medium">
              Nenhuma usuário cadastrado
            </div>
          )}
        </div>
      </div>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed flex justify-center items-center w-screen h-screen inset-0 bg-black/75 z-50">
            <Dialog.Content className="min-w-[25rem] max-w-[20rem] h-min drop-shadow-3xl rounded-md bg-white fixed flex flex-col justify-center p-8 gap-4">
              <Dialog.Title className="font-bold text-xl">
                Editar dados da fila
              </Dialog.Title>
              <form
                onSubmit={handleSubmit(handleEditQueue)}
                className="h-min w-80 bg-secundary_color rounded-lg flex flex-col gap-4"
              >
                <FormProvider {...editPersonForm}>
                  <Input.Root
                    id="name"
                    patternColor="background_color"
                    initialVisibility={false}
                  >
                    <Input.Icon icon={<PersonIcon color="gray" size={20} />} />
                    <Input.Text placeholder="Name" />
                    <Input.Action />
                  </Input.Root>
                  <Input.Root
                    id="digit"
                    patternColor="background_color"
                    initialVisibility={false}
                  >
                    <Input.Icon
                      icon={<Phone size={20} className="text-primary_color" />}
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

                  <h2 className="text-primary_color font-medium text-base">
                    Pessoas na fila
                  </h2>
                  <div className="h-[142px] overflow-y-scroll w-full flex">
                    <div className="flex flex-col w-full h-full">
                      {persons.map((person: PossibleRamal) => (
                        <PersonCellSelectable
                          key={person.voip.voip}
                          status={person.added}
                          changeStatus={handleChangePersonStatus}
                          person={person}
                        />
                      ))}
                    </div>
                  </div>

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

export default QueueCell
