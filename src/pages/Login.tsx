import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";
import icon from '../assets/icon.png';
import MailInput from "../components/Inputs/MailInput";
import PasswordInput from "../components/Inputs/PasswordInput";
import { usePersistanceStore } from '../hooks/usePersistanceStore';



type LoginRequest = {
    access_token: string,
    refresh:string
}

const Login = () => {

    const [isFetching, setIsFetching] = useState(false);
    const token_store = usePersistanceStore('token')
    const refresh_token_store = usePersistanceStore('refresh_token')
    const navigate=useNavigate();

    const HandleLogin=(credentials: any)=> {
        
        const { data, isFetching, error } = useQuery<LoginRequest>("login", async () => {
            const response= await axios.post("http://10.1.1.24:3000/auth/login", {username: credentials.email, password: credentials.password});
            return response.data;
        }, {})

        if(isFetching){
            setIsFetching(true);
            return;
        }
        setIsFetching(false);
        if(data){
            navigate('/');
        }
        return <Navigate to={'/login'}/>;
    }

    const createUserFormSchema = z.object({
        email: z.string().nonempty("O email é obrigatório").email('Formato de e-mail invalido'),
        password: z.string().nonempty("A senha é obrigatório").min(6, 'A senha precisa ter, no mínimo 6 caracteres')
    })

    const { register, handleSubmit, setFocus, formState: { errors }, clearErrors } = useForm({ resolver: zodResolver(createUserFormSchema) })


    return (
        <div className="h-screen w-screen sm:bg-grey flex justify-center items-center">
            <section title='Formulário para login' className="h-screen w-screen bg-secundary_color drop-shadow-3xl rounded-md sm:h-[400px] sm:w-[350px] sm:bg-secundary_color p-8 gap-6 pt-0 pb-0 flex flex-col justify-center">
                <figcaption className="h-20 w-full flex justify-center items-center">
                    <img className='h-20 w-20 -ml-5' alt='Logo do produto IPorter' src={icon} />
                    <figcaption className="text-4xl text-primary_color font-bold">IPorter</figcaption>
                </figcaption>
                <form onSubmit={handleSubmit(HandleLogin)} autoComplete="off" className="flex flex-col gap-2">
                    <MailInput register={register} focus={setFocus} resetError={() => { clearErrors('email') }} />
                    {errors.email ?
                        <span
                            aria-label={"O campo email possui uma inconsistencia, por favor, verifique: " + errors!.email!.message?.toString()}
                            className="h-5 text-xs text-red-500 pl-2">{errors!.email!.message?.toString()}</span> : <div className="h-5"> </div>}
                    <PasswordInput register={register} focus={setFocus} resetError={() => { clearErrors('password') }} />
                    {errors.password ?
                        <span
                            aria-label={"O campo senha possui uma inconsistencia, por favor, verifique: " + errors!.password!.message?.toString()}
                            className="h-5 text-xs text-red-500 pl-2">{errors!.password!.message?.toString()}</span> : <div className="h-5"> </div>}
                    <button aria-label='Confirmar Login' type="submit" className="w-full p-2 cursor-pointer flex items-center bg-primary_color border-primary_color rounded-md text-secundary_color justify-center">Login</button>
                    <Link className='h-8 w-auto p-2 flex cursor-pointer text-xs self-center' to={'/reset-password'}>Forgeted your Password?</Link>
                </form>
            </section>
        </div>
    )
}

export default Login;


