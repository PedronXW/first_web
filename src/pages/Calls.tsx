import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowULeftDown, MagnifyingGlass, PhoneIncoming, PhoneOutgoing } from "@phosphor-icons/react";
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
import SearchInput from "../components/Inputs/SearchInput";
import CallsList from "../components/Lists/CallsList/CallsList";
import Drawer from "../components/Lists/Drawer/Drawer";
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
    const [incommingCallsStatus, setIncommingCallsStatus] = useState<boolean>(true);
    const [outgoingCallsStatus, setOutgoingCallsStatus] = useState<boolean>(true);
    const [localCallsStatus, setLocalCallsStatus] = useState<boolean>(true);
    const [answeredCallStatus, setAnsweredCallStatus] = useState<boolean>(true);
    const [busyCallStatus, setBusyCallStatus] = useState<boolean>(true);
    const [timeoutedCallStatus, setTimeoutedCallStatus] = useState<boolean>(true);
    const [canceledCallStatus, setCanceledCallStatus] = useState<boolean>(true);
    const [searchLayoutStatus, setSearchLayoutStatus] = useState<boolean>(false);

    const searchSchema = z.object({
        number: z.number().min(1).max(50),
    })

    const ref=useRef<any>(null)
    const callsFormProvider = useForm({ resolver: zodResolver(searchSchema) })

    return (

        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color overflow-hidden">
            <Drawer selected={2} />
            <div className="h-full w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 h-full w-full flex flex-col overflow-y-scroll">
                    <Header title="Chamadas" />
                    <div className="min-h-[50px] max-h-[50px] w-full drop-shadow-3xl align-bottom flex-col lg:px-12 pl-7 pr-6  self-center hidden sm:flex md:hidden lg:flex">
                        <div className="h-full w-full bg-primary_color rounded-lg flex sm:flex-row md:flex-col flex-col lg:flex-row items-center justify-around pl-5 pr-5 lg:pr-2">
                            <div className=" rounded-full drop-shadow-3xl hidden sm:flex md:hidden lg:flex" >
                                <span className="text-secundary_color">Status</span>
                            </div>
                            <span className="text-secundary_color font-medium h-full text-sm items-center w-1/2 ml-4 hidden sm:flex md:hidden lg:flex">Ramal</span>
                            <div className=" w-full rounded-b-lg flex items-center justify-center sm:mt-0 md:mt-2 lg:mt-0 mt-2">
                                <time className="text-secundary_color font-medium h-full text-sm flex justify-center items-center pr-7 w-1/2">Horário</time>
                                <span className="text-secundary_color font-medium h-full text-sm flex justify-center items-center w-1/2">Número</span>
                            </div>
                            <div className="w-full"/>
                        </div>
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
                        <SearchInput />
                    </FormProvider>
                    <h2 className="text-primary_color font-bold text-lg">Tipo de chamada</h2>
                    <div className="flex w-full h-min">
                        <button type="button" onClick={() => { setIncommingCallsStatus(!incommingCallsStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${incommingCallsStatus ? "border-green-700" : "border-primary_color"} rounded-l-lg drop-shadow-3xl`}>
                            <PhoneIncoming size={20} className={`-ml-[5px] ${incommingCallsStatus ? "text-green-700" : "text-primary_color"}`} />
                            <p className={`${incommingCallsStatus ? "text-green-700" : "text-primary_color"}`}>Recebida</p>
                        </button>
                        <button type="button" onClick={() => { setLocalCallsStatus(!localCallsStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${localCallsStatus ? "border-yellow-700" : "border-primary_color"} drop-shadow-3xl`}>
                            <ArrowULeftDown size={20} className={`-ml-[5px] ${localCallsStatus ? "text-yellow-700" : "text-primary_color"}`} />
                            <p className={`${localCallsStatus ? "text-yellow-700" : "text-primary_color"}`}>Interna</p>
                        </button>
                        <button type="button" onClick={() => { setOutgoingCallsStatus(!outgoingCallsStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${outgoingCallsStatus ? "border-blue-700" : "border-primary_color"} rounded-r-lg drop-shadow-3xl`}>
                            <PhoneOutgoing size={20} className={`-ml-[5px] ${outgoingCallsStatus ? "text-blue-700" : "text-primary_color"}`} />
                            <p className={`${outgoingCallsStatus ? "text-blue-700" : "text-primary_color"}`}>Realizada</p>
                        </button>
                    </div>
                    <h2 className="text-primary_color font-bold text-lg">Resultado de chamada</h2>
                    <div className="flex flex-col w-full">
                        <div className="flex w-full h-min">
                            <button type="button" onClick={() => { setAnsweredCallStatus(!answeredCallStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${answeredCallStatus ? "border-green-700" : "border-primary_color"} rounded-tl-lg drop-shadow-3xl`}>
                                <PhoneIncoming size={20} className={`-ml-[5px] ${answeredCallStatus ? "text-green-700" : "text-primary_color"}`} />
                                <p className={`${answeredCallStatus ? "text-green-700" : "text-primary_color"}`}>Atendida</p>
                            </button>
                            <button type="button" onClick={() => { setTimeoutedCallStatus(!timeoutedCallStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${timeoutedCallStatus ? "border-yellow-700" : "border-primary_color"} rounded-tr-lg drop-shadow-3xl`}>
                                <ArrowULeftDown size={20} className={`-ml-[5px] ${timeoutedCallStatus ? "text-yellow-700" : "text-primary_color"}`} />
                                <p className={`${timeoutedCallStatus ? "text-yellow-700" : "text-primary_color"}`}>Perdida</p>
                            </button>
                        </div>
                        <div className="flex w-full h-min">
                            <button type="button" onClick={() => { setBusyCallStatus(!busyCallStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${busyCallStatus ? "border-blue-700" : "border-primary_color"} rounded-bl-lg drop-shadow-3xl`}>
                                <PhoneIncoming size={20} className={`-ml-[5px] ${busyCallStatus ? "text-blue-700" : "text-primary_color"}`} />
                                <p className={`${busyCallStatus ? "text-blue-700" : "text-primary_color"}`}>Ocupada</p>
                            </button>
                            <button type="button" onClick={() => { setCanceledCallStatus(!canceledCallStatus) }} className={`p-2 bg-white flex flex-col flex-1 justify-center items-center gap-2 border-2 ${canceledCallStatus ? "border-red-700" : "border-primary_color"} rounded-br-lg drop-shadow-3xl`}>
                                <ArrowULeftDown size={20} className={`-ml-[5px] ${canceledCallStatus ? "text-red-700" : "text-primary_color"}`} />
                                <p className={`${canceledCallStatus ? "text-red-700" : "text-primary_color"}`}>Cancelada</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <button className={`absolute xl:hidden p-4 drop-shadow-3xl rounded-full bottom-20 md:bottom-3 bg-white z-50 ${searchLayoutStatus ? "right-[330px]" : "right-2"}  `}>
                <MagnifyingGlass size={20} className="text-primary_color" onClick={() => { setSearchLayoutStatus(!searchLayoutStatus) }} />
            </button>
        </div>
    )
}

export default Calls;