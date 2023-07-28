import { Lock, SignOut, UserSwitch, Wrench } from '@phosphor-icons/react'
import { useState } from 'react'
import SettingCell from './SettingCell'

const SettingsList = () => {
  const isAdmin = true

  const [items, setItems] = useState([
    {
      name: 'Alterar Senha',
      description: 'Altere dados de segurança da aplicação.',
      route: 'change-password',
      dark: true,
      Security: true,
      icon: <Lock className="text-primary_color" size={20} />,
      iconDark: <Lock className="text-secundary_color" size={20} />,
    },
    {
      name: 'Gerenciar Usuários',
      description: 'Adicionar e/ou gerenciar usuários da aplicação.',
      route: 'person',
      dark: false,
      Security: false,
      icon: <UserSwitch className="text-primary_color" size={20} />,
      iconDark: <UserSwitch className="text-secundary_color" size={20} />,
    },
    {
      name: 'Configurar Sistema',
      description: 'Altere as configurações técnicas do sistema.',
      route: 'system-settings',
      dark: true,
      Security: false,
      icon: <Wrench className="text-primary_color" size={20} />,
      iconDark: <Wrench className="text-secundary_color" size={20} />,
    },
    {
      name: 'Sair',
      description:
        'Exclua dados de autenticação e retorne para a tela de login',
      route: '/login',
      dark: false,
      Security: true,
      icon: <SignOut className="text-primary_color" size={20} />,
      iconDark: <SignOut className="text-secundary_color" size={20} />,
    },
  ])

  return (
    <div className="grid h-full w-full sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-settings grid-cols-settings md:gap-8 gap-6 md:px-12 pl-7 pr-6">
      {items.map((item, key) =>
        item.Security ? (
          <SettingCell key={key} setting={item} />
        ) : isAdmin ? (
          <SettingCell key={key} setting={item} />
        ) : null,
      )}
    </div>
  )
}

export default SettingsList
