import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import BottomNavigationMenu from "../components/BottomNavigationMenu/BottomNavigationMenu";
import Header from "../components/Header/Header";
import HeaderMobile from "../components/Header/HeaderMobile";
import PasswordInput from "../components/Inputs/PasswordInput";
import Drawer from "../components/Lists/Drawer/Drawer";
import { usePersistanceStore } from "../hooks/usePersistanceStore";

const ChangePassword = () => {

    const store = usePersistanceStore()
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (credentials: any) => {
            const response = await axios.post("http://10.1.1.24:3000/auth/login", { username: credentials.email, password: credentials.password });
            return response.data;
        },
        onSuccess: () => {
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
        email: z.string().nonempty("O email é obrigatório").email('Formato de e-mail invalido'),
        password: z.string().nonempty("A senha é obrigatório").min(6, 'A senha precisa ter, no mínimo 6 caracteres')
    })

    const { register, handleSubmit, setFocus, formState: { errors }, clearErrors } = useForm({ resolver: zodResolver(createUserFormSchema) })


    return (
        <div className="h-screen w-screen flex flex-col md:flex-row">
            <Drawer selected={4} />
            <div className="w-full flex flex-col h-full">
                <HeaderMobile />
                <section title="Dashboard" className="w-full flex flex-col grow-1 justify-between">
                    <Header title="Alteração de Senha" />
                    <form onSubmit={handleSubmit(HandleLogin)} autoComplete="off" className="grow-1 max-w-[380px] mx-11">
                        <h2 className="text-sm h-min text-primary_color font-normal mb-10">Para alterar sua senha, por favor, preencha os campos abaixo.</h2>
                        <PasswordInput register={register} focus={setFocus} resetError={() => { clearErrors('password') }} />
                        {errors.password ?
                            <span aria-label={"O campo senha possui uma inconsistencia, por favor, verifique: " + errors!.password!.message?.toString()}
                                className="h-10 text-xs text-red-500 pl-2">{errors!.password!.message?.toString()}</span> : <div className="h-10"> </div>}
                        <PasswordInput register={register} focus={setFocus} resetError={() => { clearErrors('password') }} />
                        {errors.password ?
                            <span aria-label={"O campo senha possui uma inconsistencia, por favor, verifique: " + errors!.password!.message?.toString()}
                                className="h-10 text-xs text-red-500 pl-2">{errors!.password!.message?.toString()}</span> : <div className="h-10"> </div>}
                        <button aria-label='Confirmar Login' type="submit" className="w-full p-2 cursor-pointer flex items-center bg-primary_color border-primary_color rounded-md text-secundary_color justify-center">Login</button>
                    </form>
                </section>
                <BottomNavigationMenu selected={4} />
            </div>
        </div>
    )
}

export default ChangePassword;