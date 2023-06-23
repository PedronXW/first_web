import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
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

const Calls=()=>{

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


    return (
        <div className="h-screen w-screen flex flex-col md:flex-row bg-background_color">
            <Drawer selected={2} />
            <div className="h-full w-full flex flex-col grow-1 overflow-hidden md:shadow-inner">
                <HeaderMobile />
                <div className="grow-1 w-full flex flex-col overflow-y-scroll">
                    <Header title="Chamadas"/>
                    <CallsList/>
                </div>
                <BottomNavigationMenu selected={2} />
            </div>
            <div className="h-full min-w-[320px] max-w-[320px] px-5 pt-5 hidden lg:flex lg:flex-col bg-secundary_color drop-shadow-lg gap-5">
                <SearchInput register={register} focus={setFocus}/>
                <DatePicker/>
            </div>
        </div>
    )
}

export default Calls;