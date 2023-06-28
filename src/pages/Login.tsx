import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import icon from '../assets/icon.png';
import MailInput from "../components/Inputs/MailInput";
import PasswordInput from "../components/Inputs/PasswordInput";
import { usePersistanceStore } from '../hooks/usePersistanceStore';



type LoginRequest = {
    access_token: string,
    refresh: string
}

const Login = () => {
    const store = usePersistanceStore()
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (credentials: any) => {
            const response = await axios.post("http://10.1.1.24:3000/auth/login", { username: credentials.email, password: credentials.password });
            return response.data;
        },
        onSuccess: (data: LoginRequest) => {
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
        email: z.string().nonempty("O email é obrigatório").email('Formato de e-mail invalido'),
        password: z.string().nonempty("A senha é obrigatório").min(6, 'A senha precisa ter, no mínimo 6 caracteres')
    })

    const { register, handleSubmit, setFocus, formState: { errors }, clearErrors } = useForm({ resolver: zodResolver(createUserFormSchema) })


    return (
        <div className='h-full w-full flex flex-col justify-evenly'>
            <figcaption className="h-20 w-full flex justify-center items-center -mt-3">
                <img className='h-20 w-20 -ml-5' alt='Logo do produto IPorter' src={icon} />
                <figcaption className="text-4xl text-primary_color font-bold">IPorter</figcaption>
            </figcaption>
            <form onSubmit={handleSubmit(HandleLogin)} onChange={()=>{clearErrors()}} autoComplete="off" className="flex flex-col gap-2">
                <MailInput register={register} focus={setFocus}/>
                {errors.email ?
                    <span aria-label={"O campo email possui uma inconsistencia, por favor, verifique: " + errors!.email!.message?.toString()}
                        className="h-5 text-xs text-red-500 pl-2">{errors!.email!.message?.toString()}</span> : <div className="h-5"> </div>}
                <PasswordInput id="password" pattern_color='background_color' register={register} focus={setFocus} placeholder="Password"/>
                {errors.password ?
                    <span aria-label={"O campo senha possui uma inconsistencia, por favor, verifique: " + errors!.password!.message?.toString()}
                        className="h-5 text-xs text-red-500 pl-2">{errors!.password!.message?.toString()}</span> : <div className="h-5"> </div>}
                <button aria-label='Confirmar Login' type="submit" className="w-full p-2 cursor-pointer flex items-center bg-primary_color border-primary_color rounded-md text-secundary_color justify-center">Login</button>
                <Link className='h-8 w-auto p-2 flex cursor-pointer text-xs self-center' to={'/reset-password'}>Forgeted your Password?</Link>
            </form>
        </div>
    )
}

export default Login;