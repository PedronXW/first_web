import { Archive, Lock, SignOut, UserPlus, UserSwitch } from "@phosphor-icons/react";
import { useState } from "react";
import SettingCell from "./SettingCell";

const SettingsList = () => {

    const [items, setItems] = useState([
        {
            name: "Alterar Senha",
            description: "Alterar dados de segurança da aplicação.",
            route: 'change-password',
            dark: false,
            icon: <Lock className="text-primary_color" size={20} />,
            iconDark: <Lock className="text-secundary_color" size={20} />,
        },
        {
            name: "Alterar Dados Pessoais",
            description: "Altere seus dados pessoais presentes na aplicação.",
            route: 'change-password',
            dark: true,
            icon: <Archive className="text-primary_color" size={20} />,
            iconDark: <Archive className="text-secundary_color" size={20} />,
        },
        {
            name: "Adicionar Usuário",
            description: "Adicione um novo usuário à aplicação.",
            route: 'change-password',
            dark: false,
            icon: <UserPlus className="text-primary_color" size={20} />,
            iconDark: <UserPlus className="text-secundary_color" size={20} />,
        },
        {
            name: "Alterar Permissão",
            description: "Altere as permissões de um usuário específico.",
            route: 'change-password',
            dark: true,
            icon: <UserSwitch className="text-primary_color" size={20} />,
            iconDark: <UserSwitch className="text-secundary_color" size={20} />,
        },
        {
            name: "Sair",
            description: "Excluir dados de autenticação e retornar para a tela de login",
            route: 'change-password',
            dark: false,
            icon: <SignOut className="text-primary_color" size={20} />,
            iconDark: <SignOut className="text-secundary_color" size={20} />,
        },
    ])

    return(
        <div className="grid h-full w-full grid-cols-settings md:gap-8 gap-6 mt-8 md:px-12 pl-7 pr-6 pb-14">
            {items.map((item, key) => <SettingCell key={key} setting={item}/>)}
        </div>
    )
}

export default SettingsList;