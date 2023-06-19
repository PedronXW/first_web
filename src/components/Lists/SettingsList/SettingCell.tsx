import { useNavigate } from "react-router-dom";

interface SettingCellInterface{
    setting:any;
}

const SettingCell=({setting}:SettingCellInterface)=>{

    const navigate = useNavigate();

    return(
        <li className={`h-full w-full cursor-pointer flex flex-col border-2 drop-shadow-3xl border-primary_color rounded-md justify-between px-4 py-6 pt-4 ${setting.dark ? "bg-secundary_color" : "bg-primary_color"}`} onClick={() => { navigate(setting.route) }}>
            <figure className={`h-[40px] w-[40px] flex justify-center items-center`}>
                {!setting.dark ? setting.iconDark : setting.icon}
            </figure>
            <div className="flex flex-col gap-2 items-end">
                <h3 className={`flex text-end justify-end w-full pr-[10px] ${setting.dark ? "text-primary_color" : "text-secundary_color"}`}>{setting.name}</h3>
                <h3 className={`flex text-end justify-end w-full pr-[10px] text-xs font-normal ${setting.dark ? "text-primary_color" : "text-secundary_color"}`}>{setting.description}</h3>
            </div>
        </li>
    )
}

export default SettingCell;