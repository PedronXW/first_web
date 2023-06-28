import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowULeftDown, CheckFat, IdentificationBadge, Phone, UserList } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import BasicInput from "../components/Inputs/BasicInput";
import Drawer from "../components/Lists/Drawer/Drawer";
import QueuesList from "../components/Lists/QueuesList/QueuesList";

const QueuesAdd = () => {


    const { register, setFocus } = useForm({
        resolver: zodResolver(zod.object({
            name: zod.string().min(1).max(50),
        }))
    });


    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={1} />
            <div className="w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full flex flex-col overflow-y-scroll">
                    <Header title="Adicionar Fila">
                        <button className="flex gap-2 mt-2 cursor-pointer p-2">
                            Salvar
                            <CheckFat size={20} className="text-primary_color" />
                        </button>
                    </Header>
                    <strong className="text-sm h-min text-primary_color font-normal flex px-12 mt-6">Para adicionar uma nova fila, por favor, preencha os campos abaixo e selecione os ramais que farão parte da fila.</strong>
                    <div className="flex w-full h-full grow-1 px-12 gap-10 mt-8">
                        <form className="flex flex-col gap-7 min-w-[320px] max-w-[320px]">
                            <BasicInput id="id" pattern_color="secundary_color" placeholder="Id" register={register} focus={setFocus} icon={<IdentificationBadge size={20} className="text-primary_color" />} />
                            <BasicInput id="name" pattern_color="secundary_color" placeholder="Name" register={register} focus={setFocus} icon={<UserList size={20} className="text-primary_color" />} />
                            <BasicInput id="digit" pattern_color="secundary_color" placeholder="Dígito identificador" register={register} focus={setFocus} icon={<Phone size={20} className="text-primary_color" />} />
                            <BasicInput id="overflow" pattern_color="secundary_color" placeholder="Próximo destino quando desativada" register={register} focus={setFocus} icon={<ArrowULeftDown size={20} className="text-primary_color" />} />
                        </form>
                        <div className="grow-1 w-full flex flex-col gap-5">
                            <QueuesList />
                        </div>
                    </div>
                </div>
                <BottomNavigationMenu selected={1} />
            </div>
        </div>
    )
}

export default QueuesAdd;