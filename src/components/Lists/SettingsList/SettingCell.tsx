import { useNavigate } from 'react-router-dom'
import { usePersistanceStore } from '../../../hooks/usePersistanceStore'

interface SettingCellInterface {
  setting: any
}

const SettingCell = ({ setting }: SettingCellInterface) => {
  const navigate = useNavigate()
  const store = usePersistanceStore()

  const handleClick = () => {
    if (setting.name === 'Sair') {
      store.deleteStore('refresh_token')
      store.deleteStore('token')
    }
    navigate(setting.route)
  }

  return (
    <li
      className={`max-h-[220px] min-h-[220px] w-full cursor-pointer flex flex-col drop-shadow-3xl rounded-md justify-between px-4 py-6 pt-4 ${
        setting.dark ? 'bg-secundary_color' : 'bg-primary_color'
      }`}
      onClick={handleClick}
    >
      <figure className={`h-[40px] w-[40px] flex justify-center items-center`}>
        {!setting.dark ? setting.iconDark : setting.icon}
      </figure>
      <div className="flex flex-col gap-2 items-end">
        <strong
          className={`flex text-end justify-end w-full pr-[10px] ${
            setting.dark ? 'text-primary_color' : 'text-secundary_color'
          }`}
        >
          {setting.name}
        </strong>
        <span
          className={`flex text-end justify-end w-2/3 pr-[10px] text-xs font-normal ${
            setting.dark ? 'text-primary_color' : 'text-secundary_color'
          }`}
        >
          {setting.description}
        </span>
      </div>
    </li>
  )
}

export default SettingCell
