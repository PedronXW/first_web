import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "@phosphor-icons/react";
import axios from "axios";
import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import DatePicker from "../components/DatePicker/DatePicker";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import { Input } from "../components/Input";
import CallsList from "../components/Lists/CallsList/CallsList";
import Drawer from "../components/Lists/Drawer/Drawer";
import { SelectorCallResult } from "../components/SelectorCallResult/SelectorCallResult";
import { SelectorCallType } from "../components/SelectorCallType/SelectorCallType";
import { usePersistanceStore } from "../hooks/usePersistanceStore";

const Calls = () => {

    const store = usePersistanceStore()
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (credentials: any) => {
            const response = await axios.post("http://10.1.1.24:3000/auth/login", { username: credentials.email, password: credentials.password });
            return response.data;
        },
        onSuccess: (data: any) => {
            store.updateValue("token", data.access_token);
            store.updateValue("refresh_token", data.refresh);
            navigate('/');
        },
        onError: (error: any) => {
            console.log(error);
        },
    });

    const HandleLogin = (credentials: any) => {
        mutation.mutate(credentials);
    }

    const createUserFormSchema = z.object({
        text: z.string().nonempty("O email é obrigatório").email('Formato de e-mail invalido'),
    })

    const { register, handleSubmit, setFocus, formState: { errors }, clearErrors } = useForm({ resolver: zodResolver(createUserFormSchema) })
    const [value, onChange] = useState(new Date());
    const [startSelected, setStartSelected] = useState<Date | null>(null);
    const [endSelected, setEndSelected] = useState<Date | null>(null);


    const [searchLayoutStatus, setSearchLayoutStatus] = useState<boolean>(false);

    const searchSchema = z.object({
        number: z.number().min(1).max(50),
    })

    const ref = useRef<any>(null)
    const callsFormProvider = useForm({ resolver: zodResolver(searchSchema) })

    return (

        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color overflow-hidden">
            <Drawer selected={2} />
            <div className="h-full w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 h-full w-full flex flex-col overflow-y-scroll gap-2 pb-4">
                    <Header title="Chamadas" />
                    <div className="min-h-[50px] max-h-[50px] grow-1 drop-shadow-3xl bg-primary_color rounded-lg items-center lg:mx-12 ml-7 mr-6 pl-7 pr-6 flex-row hidden sm:flex md:hidden lg:flex justify-around">
                        <div className=" rounded-full drop-shadow-3xl hidden sm:flex md:hidden lg:flex" >
                            <span className="text-secundary_color font-medium h-full text-sm items-center">Status</span>
                        </div>
                        <span className="text-secundary_color font-medium h-full text-sm items-center w-1/2 ml-4 hidden sm:flex md:hidden lg:flex">Ramal</span>
                        <div className=" w-full rounded-b-lg flex items-center justify-center sm:mt-0 md:mt-2 lg:mt-0 mt-2">
                            <time className="text-secundary_color font-medium h-full text-sm flex justify-center items-center pr-7 w-1/2">Horário</time>
                            <span className="text-secundary_color font-medium h-full text-sm flex justify-center items-center w-1/2">Número</span>
                        </div>
                        <div className="w-full" />
                    </div>
                    <CallsList />
                </div>
                <BottomNavigationMenu selected={2} />
            </div>
            <div className={` h-full w-screen z-40 xl:w-min absolute xl:relative ${searchLayoutStatus ? "flex" : "hidden xl:flex"}`}>
                <div className="h-full flex grow-1 w-full bg-black opacity-30" />
                <form className="h-full min-w-[320px] max-w-[320px] px-5 pt-5 flex flex-col bg-secundary_color drop-shadow-lg gap-5 overflow-y-scroll pb-4">
                    <DatePicker onEndSelected={setEndSelected} onStartSelected={setStartSelected} />
                    <FormProvider {...callsFormProvider}>
                        <Input.Root id="overflow" pattern_color="background_color" initial_visibility={false}>
                            <Input.Icon icon={<MagnifyingGlass size={20} className="text-primary_color" />} />
                            <Input.Text placeholder="Search" />
                            <Input.Action />
                        </Input.Root>
                    </FormProvider>
                    <SelectorCallType />
                    <SelectorCallResult />
                </form>
            </div>
            <button className={`absolute xl:hidden p-4 drop-shadow-3xl rounded-full bottom-20 md:bottom-3 bg-white z-50 ${searchLayoutStatus ? "right-[330px]" : "right-2"}  `}>
                <MagnifyingGlass size={20} className="text-primary_color" onClick={() => { setSearchLayoutStatus(!searchLayoutStatus) }} />
            </button>
        </div>
    )
}

export default Calls;