import { useForm } from "react-hook-form";
import MailInput from "../components/Inputs/MailInput";

import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from "react-router-dom";
import { z } from "zod";
import icon from '../assets/icon.png';


const ResetPassword = () => {

    function log(data: any) {
        console.log(data)
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
                <form onSubmit={handleSubmit(log)} autoComplete="off" className="flex flex-col gap-2">
                    <MailInput register={register} focus={setFocus} resetError={() => { clearErrors('email') }} />
                    {errors.email ?
                        <span
                            aria-label={"O campo email possui uma inconsistencia, por favor, verifique: " + errors!.email!.message?.toString()}
                            className="h-5 text-xs text-red-500 pl-2">{errors!.email!.message?.toString()}</span> : <div className="h-5"> </div>}
                    <button aria-label='Enviar email com formulário para troca de senha.' type="submit" className="w-full p-2 cursor-pointer flex items-center bg-primary_color border-primary_color rounded-md text-secundary_color justify-center">Send Email</button>
                </form>
                <Link className="h-8 w-auto p-2 flex cursor-pointer text-xs self-center" to={'/login'}>Log In</Link>
            </section>
        </div>
    )
}

export default ResetPassword;

