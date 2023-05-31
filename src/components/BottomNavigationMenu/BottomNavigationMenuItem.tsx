import { useNavigate } from 'react-router-dom';

interface BottomNavigationMenuItemInterface {
    item: any
    selected: boolean
    state: boolean
}

const BottomNavigationMenuItem = ({ item, selected, state }: BottomNavigationMenuItemInterface) => {

    const navigate=useNavigate();

    return (
        <div className={`h-full w-full bg-grey cursor-pointer flex items-center bg-gray-light justify-center ${selected?"bg-primary_color":"bg-transparent"}`} onClick={()=>{navigate(item.route)}}>
            <div className={`min-h-[50px] min-w-[50px] flex justify-center items-center`}>
                {selected?item.iconSelected:item.icon}
            </div>
            <div className={`${state ? 'flex justify-center ml-4' : 'hidden'}`}>
                <h2 className={`${state ? 'flex min-w-[132px]' : 'hidden'} ${selected?"text-secundary_color":"text-primary_color"}`}>{item.name}</h2>
            </div>
        </div>
    )
}

export default BottomNavigationMenuItem;