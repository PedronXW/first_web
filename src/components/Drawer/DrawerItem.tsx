import { useNavigate } from 'react-router-dom';

interface DrawerItemInterface {
    item: any
    selected: boolean
    state: boolean
}

const DrawerItem = ({ item, selected, state }: DrawerItemInterface) => {

    const navigate=useNavigate();

    return (
        <div className={`h-[50px] w-full bg-grey cursor-pointer flex items-center bg-gray-light justify-center ${selected?"bg-primary_color rounded-lg drop-shadow-3xl":"bg-transparent"}`} onClick={()=>{navigate(item.route)}}>
            <div className={`min-h-[50px] min-w-[50px] flex justify-center items-center`}>
                {selected?item.iconSelected:item.icon}
            </div>
            <div className={`${state ? 'flex justify-center ml-4' : 'hidden'}`}>
                <h2 className={`${state ? 'flex min-w-[132px]' : 'hidden'} ${selected?"text-secundary_color":"text-primary_color"}`}>{item.name}</h2>
            </div>
        </div>
    )
}

export default DrawerItem;