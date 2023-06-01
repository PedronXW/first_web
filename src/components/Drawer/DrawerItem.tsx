import { useNavigate } from 'react-router-dom';

interface DrawerItemInterface {
    item: any
    selected: boolean
    state: boolean
}

const DrawerItem = ({ item, selected, state }: DrawerItemInterface) => {

    const navigate = useNavigate();

    return (
        <li className={`h-[50px] w-full bg-grey cursor-pointer flex items-center bg-gray-light justify-center ${selected ? "bg-primary_color rounded-lg drop-shadow-3xl" : "bg-transparent"}`} onClick={() => { navigate(item.route) }}>
            <figure className={`min-h-[50px] min-w-[50px] flex justify-center items-center`}>
                {selected ? item.iconSelected : item.icon}
            </figure>
            <figcaption className={`${state ? 'flex min-w-[132px] ml-4' : 'hidden'} ${selected ? "text-secundary_color" : "text-primary_color"}`}>{item.name}</figcaption>
        </li>
    )
}

export default DrawerItem;