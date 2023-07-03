import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowULeftDown, CheckFat, IdentificationBadge, Phone, UserList } from "@phosphor-icons/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import BasicInput from "../components/Inputs/BasicInput";
import Drawer from "../components/Lists/Drawer/Drawer";
import RamalCell from "../components/Lists/PersonList/PersonCell";

const QueuesAdd = () => {

    const ref = useRef<any>(null);

    const refScroll = useRef<any>(null);

    const person = [1, 2, 3, 5, 6, 7, 8, 9, 10];


    function drop(ev: any) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        var arr = [...ref.current.children]
        const element = document.getElementById("arroz");
        if (element != null) {
            ref.current.removeChild(element);
        }
        let draggingItem: any;
        const notDraggingItems: any = []
        arr.map((item: any) => {
            if (item.id === data) {
                draggingItem = item;
            } else {
                notDraggingItems.push(item);
            }
        });
        let nextSibling = notDraggingItems.find((notDragging: any) => {
            return ev.target.getBoundingClientRect().top + refScroll.current.scrollTop <= notDragging.offsetTop + notDragging.offsetHeight / 2;
        });
        const newQueuesOrder: any[] = [];
        notDraggingItems.map((queue: any) => {
            if (queue === nextSibling) {
                newQueuesOrder.push(draggingItem);
            }
            newQueuesOrder.push(queue);
        });
        console.log(draggingItem, nextSibling)
        if (draggingItem as Node && nextSibling!==undefined) {
            ref.current.insertBefore(draggingItem, nextSibling);
        }
    }

    function handleEnter(ev: any) {
        ev.preventDefault();
        if (ev.target.draggable = true) {
            let data = ev.dataTransfer.getData("text");
            var arr = [...ref.current.children]
            const element = document.getElementById("arroz");
            if (element != null) {
                ref.current.removeChild(element);
            }
            let draggingItem: any;
            const notDraggingItems: any = []
            arr.map((item: any) => {
                if (item.id === data) {
                    draggingItem = item;
                } else {
                    notDraggingItems.push(item);
                }
            });
            let nextSibling = notDraggingItems.find((notDragging: any) => {
                return ev.target.getBoundingClientRect().top + refScroll.current.scrollTop+68  <= notDragging.offsetTop + notDragging.offsetHeight / 2;
            });
        }
    }

    function handleLeave(ev: any) {
        ev.preventDefault();
    }

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
                <div ref={refScroll} className="grow-1 w-full flex flex-col overflow-y-scroll">
                    <Header title="Adicionar Fila">
                        <button className="flex gap-2 mt-2 cursor-pointer p-2">
                            Salvar
                            <CheckFat size={20} className="text-primary_color" />
                        </button>
                    </Header>
                    <strong className="text-sm h-min text-primary_color font-normal flex md:px-12 px-8 mt-6">Para adicionar uma nova fila, por favor, preencha os campos abaixo e selecione os ramais que farão parte da fila.</strong>
                    <div className="flex flex-col md:flex-row w-full h-full grow-1 md:px-12 px-8 gap-10 mt-8">
                        <form className="flex flex-col gap-5 min-w-[320px] md:max-w-[320px]">
                            <h2 className="text-primary_color font-medium text-lg">Dados da fila</h2>
                            <BasicInput id="id" pattern_color="secundary_color" placeholder="Id" register={register} focus={setFocus} icon={<IdentificationBadge size={20} className="text-primary_color" />} />
                            <BasicInput id="name" pattern_color="secundary_color" placeholder="Name" register={register} focus={setFocus} icon={<UserList size={20} className="text-primary_color" />} />
                            <BasicInput id="digit" pattern_color="secundary_color" placeholder="Dígito identificador" register={register} focus={setFocus} icon={<Phone size={20} className="text-primary_color" />} />
                            <BasicInput id="overflow" pattern_color="secundary_color" placeholder="Próximo destino quando desativada" register={register} focus={setFocus} icon={<ArrowULeftDown size={20} className="text-primary_color" />} />
                        </form>
                        <div className="grow-1 w-full grid grid-cols-1 pb-4">
                            <h2 className="text-primary_color font-medium text-lg mb-5">Ramais que farão parte da fila</h2>
                            <div ref={ref} onDrop={drop} onDragOver={handleEnter} onDragLeave={handleLeave} draggable={false} className="flex flex-col w-full h-full">
                                {person.map((person, key) => <RamalCell key={key} person={person} />)}
                            </div>
                        </div>
                    </div>
                </div>
                <BottomNavigationMenu selected={1} />
            </div>
        </div>
    )
}

export default QueuesAdd;