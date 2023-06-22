import { useNavigate } from 'react-router-dom';

interface BottomNavigationMenuItemInterface {
    item: any
    selected: boolean
    state: boolean
}

const BottomNavigationMenuItem = ({ item, selected, state }: BottomNavigationMenuItemInterface) => {

    const navigate=useNavigate();

    return (
        <li className={`h-full w-full cursor-pointer flex items-center bg-gray-light justify-center ${selected?"bg-primary_color":"bg-secundary_color"}`} onClick={()=>{navigate(item.route)}}>
            {selected?item.iconSelected:item.icon}
        </li>
    )
}

export default BottomNavigationMenuItem;