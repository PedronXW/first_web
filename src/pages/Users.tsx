import { zodResolver } from "@hookform/resolvers/zod";
import { Envelope, Phone, Plus, User } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import AddButton from "../components/AddButton/AddButton";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import { Input } from "../components/Input";
import Drawer from "../components/Lists/Drawer/Drawer";
import UsersList from "../components/Lists/UsersList/UsersList";

const Users = () => {

    const createUserFormSchema = z.object({
        email: z.string().nonempty("O email é obrigatório").email('Formato de e-mail invalido'),
        password: z.string().nonempty("A senha é obrigatório").min(6, 'A senha precisa ter, no mínimo 6 caracteres')
    })

    const loginForm = useForm({ resolver: zodResolver(createUserFormSchema) })

    const { handleSubmit, formState: { errors }, clearErrors } = loginForm;

    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={4} />
            <div className="w-full flex flex-col h-full grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full h-full flex flex-col overflow-y-scroll pb-4">
                    <Header title="Usuários" />
                    <UsersList />
                    <AddButton>
                        <form className="h-min w-80 bg-secundary_color rounded-lg flex justify-center items-center p-5 flex-col gap-5">
                            <FormProvider {...loginForm}>
                                <Input.Root id="name" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<User color="gray" size={20} />} />
                                    <Input.Text placeholder="Name" />
                                    <Input.Action />
                                </Input.Root>
                                <Input.Root id="email" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<Envelope color="gray" size={20} />} />
                                    <Input.Text placeholder="Email" />
                                    <Input.Action />
                                </Input.Root>
                                <Input.Root id="numero" pattern_color="background_color" initial_visibility={false}>
                                    <Input.Icon icon={<Phone color="gray" size={20} />} />
                                    <Input.Text placeholder="Ramal" />
                                    <Input.Action />
                                </Input.Root>
                                <button className="p-2 w-full text-secundary_color bg-primary_color flex justify-center items-center gap-2 rounded-md">
                                    <Plus size={18} className="text-secundary_color -ml-2"/>
                                    <span>ADICIONAR</span>
                                </button>
                            </FormProvider>
                        </form>
                    </AddButton>
                </div>
                <BottomNavigationMenu selected={4} />
            </div>
        </div>
    )
}

export default Users;