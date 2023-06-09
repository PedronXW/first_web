import { zodResolver } from '@hookform/resolvers/zod';
import { Envelope, Lock } from '@phosphor-icons/react';
import axios from 'axios';
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import icon from '../assets/icon.png';
import { Input } from '../components/Input';
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

    const loginForm = useForm({ resolver: zodResolver(createUserFormSchema) })

    const { handleSubmit, formState: { errors }, clearErrors } = loginForm;

    return (
        <div className='h-full w-full flex flex-col justify-evenly'>
            <figcaption className="h-20 w-full flex justify-center items-center -mt-3">
                <img className='h-20 w-20 -ml-5' alt='Logo do produto IPorter' src={icon} />
                <figcaption className="text-4xl text-primary_color font-bold">IPorter</figcaption>
            </figcaption>
            <form onSubmit={handleSubmit(HandleLogin)} onChange={() => { clearErrors() }} autoComplete="off" className="flex flex-col gap-2">
                <FormProvider {...loginForm}>
                    <Input.Root id="email" pattern_color="background_color" initial_visibility={false}>
                        <Input.Icon icon={<Envelope color="gray" size={20} />} />
                        <Input.Text placeholder="Email" />
                        <Input.Action />
                    </Input.Root>
                    {errors.email ?
                        <span aria-label={"O campo email possui uma inconsistencia, por favor, verifique: " + errors!.email!.message?.toString()}
                            className="h-5 text-xs text-red-500 pl-2">{errors!.email!.message?.toString()}</span> : <div className="h-5"> </div>}
                    <Input.Root id="password" pattern_color="background_color">
                        <Input.Icon icon={<Lock color="gray" size={20} />} />
                        <Input.Text placeholder="Password" />
                        <Input.ActionPassword />
                    </Input.Root>
                    {errors.password ?
                        <span aria-label={"O campo senha possui uma inconsistencia, por favor, verifique: " + errors!.password!.message?.toString()}
                            className="h-5 text-xs text-red-500 pl-2">{errors!.password!.message?.toString()}</span> : <div className="h-5"> </div>}
                    <button aria-label='Confirmar Login' type="submit" className="w-full p-2 cursor-pointer flex items-center bg-primary_color border-primary_color rounded-md text-secundary_color justify-center">Login</button>
                    <Link className='h-8 w-auto p-2 flex cursor-pointer text-xs self-center' to={'/reset-password'}>Forgeted your Password?</Link>
                </FormProvider>
            </form>
        </div>
    )
}

export default Login;